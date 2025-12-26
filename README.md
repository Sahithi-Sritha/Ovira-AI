# Ovira AI – Preventive Women's Health Tracker

**Ovira AI is an AI-powered women's health platform that goes beyond period tracking to enable early risk detection, doctor-ready reporting, and personalized preventive care.**

**Period tracking apps predict dates. Ovira predicts health risks.**

[Live Demo](#) • [Documentation](#-core-features) • [Contributing](#-contributing)

---

## 🧠 The Problem

Over **200 million women globally** live with undiagnosed conditions like **anemia, PCOS, and hormonal disorders**. Despite widespread adoption of period tracking apps, **early detection is still nonexistent**.

### Existing Apps Fail Because:
- They focus on **date prediction**, not health insights
- No disease risk detection or symptom correlation
- No outputs usable by doctors
- One-size-fits-all averages ignore individual patterns

**Result:** Delayed diagnosis (6–12 months), preventable complications, and avoidable healthcare costs.

---

## 🎯 The Solution — Ovira AI

Ovira AI transforms daily symptom logs into **preventive health intelligence** using AI-driven pattern analysis.

### What Makes Ovira Different
- ✅ Risk-first, not calendar-first
- ✅ Symptom correlation, not averages
- ✅ Doctor-ready outputs, not vague charts
- ✅ Privacy-first, medical-grade architecture

---

## ✨ Core Features

### 🗓️ Smart Period Tracking
- Cycle phase visualization
- Personalized next-period prediction
- Adjustable cycle length (no forced averages)

### 📝 Advanced Symptom Logging
- Flow level (none → heavy)
- Pain scale (0–10)
- Mood tracking (emoji-based)
- Energy & sleep monitoring
- Optional notes and symptom checklists

### 🤖 AI Health Companion
- Google Gemini–powered chat assistant
- Empathetic, stigma-free responses
- Myth-busting and educational guidance
- Suggested starter questions
- Built-in medical disclaimers

### 📊 Preventive Health Reports
- Pattern detection across cycles
- Risk flags for:
  - Anemia
  - PCOS indicators
  - Hormonal imbalance
- Personalized recommendations
- Exportable, doctor-ready PDF reports

### 🔒 Privacy & Security (Non-Negotiable)
- Firebase Authentication (Email + Google)
- Firestore with strict security rules
- User-only data access
- Data export and account deletion support

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase project (Blaze plan for Gemini API calls)
- Google Gemini API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ovira-ai.git
cd ovira-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
GEMINI_API_KEY=your_gemini_api_key
```

4. **Deploy Firebase security rules**
```bash
firebase deploy --only firestore:rules,storage
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open in browser**

Navigate to `http://localhost:3000`

---

## 🏗️ Architecture (Hackathon-Ready & Scalable)

### Tech Stack

**Frontend**
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS v4
- Lucide Icons
- React Hook Form

**Backend**
- Firebase Authentication
- Firestore (encrypted storage)
- Firebase Security Rules

**AI Layer**
- Google Gemini API
- Rule-based + pattern-driven analysis
- Explainable outputs (no black-box risk)

**Utilities**
- date-fns (date handling)

---

## 📁 Project Structure

```
ovira-ai/
├── src/
│   ├── app/
│   │   ├── (auth)/           # Login, signup, onboarding
│   │   ├── (dashboard)/      # Protected dashboard routes
│   │   ├── api/              # Chat and analysis endpoints
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/ui/
│   ├── contexts/auth-context.tsx
│   ├── lib/firebase/
│   ├── lib/utils/
│   └── types/
├── firebase/
│   ├── firestore.rules
│   └── storage.rules
└── ENV_SETUP.md
```

---

## 🎨 Design System

### Color Palette

| Token | Usage |
|-------|-------|
| `primary` (#7C3AED) | Primary actions, brand color |
| `secondary` (#14B8A6) | Secondary actions |
| `accent` (#EC4899) | Highlights and badges |
| `success` (#10B981) | Success states |
| `warning` (#F59E0B) | Warning indicators |
| `error` (#EF4444) | Error states |

### Typography
- **Font:** Inter (Google Fonts)
- Medical-grade, minimal UI
- Accessible spacing and sizing

---

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/login` | Sign in |
| `/signup` | Create account |
| `/onboarding` | User setup |
| `/dashboard` | Main dashboard |
| `/log` | Symptom logging |
| `/chat` | AI chat |
| `/reports` | Health analysis |
| `/settings` | User settings |

---

## ⚠️ Medical Disclaimer

**Ovira AI provides health insights for informational purposes only.** This is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider.

---

## 🤝 Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before submitting pull requests.

---

## 📄 License

MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ for women's health**

</div>
