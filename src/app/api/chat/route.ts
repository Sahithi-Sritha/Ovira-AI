import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `You are Ovira AI, a compassionate and knowledgeable women's health assistant. Your role is to provide supportive, educational information about women's health topics including menstrual health, reproductive wellness, and general well-being.

IMPORTANT GUIDELINES:
1. Be empathetic, warm, and use stigma-free language
2. NEVER prescribe medications or provide medical diagnoses
3. ALWAYS recommend consulting healthcare professionals for medical concerns
4. Provide educational information based on established medical knowledge
5. Address sensitive topics with care, respect, and without judgment
6. If asked about emergencies or severe symptoms, immediately advise seeking medical care
7. Keep responses concise but informative (2-3 paragraphs max)
8. Use simple, accessible language

TOPICS YOU CAN HELP WITH:
- Menstrual cycle tracking and understanding
- PMS and period symptoms
- General reproductive health education
- Lifestyle tips for menstrual wellness
- When to see a doctor
- Emotional support and validation

TOPICS TO REDIRECT TO DOCTORS:
- Specific medical diagnoses
- Medication recommendations
- Severe pain or unusual symptoms
- Pregnancy-related medical advice
- Fertility treatments

Remember: You are a supportive companion, not a replacement for medical care.`;

export async function POST(request: NextRequest) {
    try {
        const { message, history, userContext } = await request.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        if (!process.env.GEMINI_API_KEY) {
            // Return a helpful fallback response when API key is not configured
            return NextResponse.json({
                message: "I'm currently in demo mode. To enable full AI capabilities, please configure the Gemini API key. In the meantime, I recommend:\n\n1. Tracking your symptoms regularly\n2. Consulting a healthcare provider for personalized advice\n3. Maintaining a healthy lifestyle with adequate sleep and exercise\n\nIs there anything specific about women's health I can help explain?",
            });
        }

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // Build conversation history
        const conversationHistory = history?.map((msg: any) => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }],
        })) || [];

        // Add user context to the system message if available
        let contextualPrompt = SYSTEM_PROMPT;
        if (userContext?.ageRange) {
            contextualPrompt += `\n\nUser context: Age range ${userContext.ageRange}`;
        }
        if (userContext?.conditions?.length > 0) {
            contextualPrompt += `, known conditions: ${userContext.conditions.join(', ')}`;
        }

        const chat = model.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: 'You are Ovira AI. Please follow these instructions for all responses:' + contextualPrompt }],
                },
                {
                    role: 'model',
                    parts: [{ text: 'I understand. I am Ovira AI, a compassionate women\'s health assistant. I will provide supportive, educational information while always recommending professional medical consultation for health concerns. How can I help you today?' }],
                },
                ...conversationHistory,
            ],
        });

        const result = await chat.sendMessage(message);
        const response = result.response.text();

        return NextResponse.json({ message: response });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Failed to process message' },
            { status: 500 }
        );
    }
}
