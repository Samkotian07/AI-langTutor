# Ai-Lang 🎙️🌍  
**A Voice-First AI Language Learning Agent for Real-Time Speaking Practice**

[🌐 Live Demo](https://ai-lang.netlify.app/) | [📂 GitHub Repo](https://github.com/Samkotian07/AI-langTutor)

Lang Tutor was born from my personal journey of learning German on Duolingo. While the app is great for vocabulary and grammar, I always believed real fluency comes from actual conversations. I wanted to talk, listen, and practice in real time — not just tap through multiple-choice questions.

That curiosity drove me to build **Lang Tutor**: a **voice-first AI language tutor** designed for **real-time interaction** and **natural language fluency practice**.

---

## 🚀 How It Works

- 🎧 **[LiveKit API](https://docs.livekit.io/agents/)** for high-quality, low-latency voice communication (3 core APIs used)
- 🧠 **Google Gemini RealtimeModel API** to generate contextual, human-like responses
- 🐍 **Python + Flask Backend** to manage the AI agent and server logic
- ⚛️ **Vite + React Frontend** for a fast, responsive, and intuitive user experience

This tech stack ensures a **seamless voice interaction** experience with sub-500ms latency.

---

## 🗣️ Why a Voice-First Tutor?

Most language apps rely on passive learning techniques, but **speaking and listening** are essential for fluency. Lang Tutor lets you:

- Build confidence in pronunciation
- Learn natural phrasing
- Think and respond in your target language

It's like having a **daily speaking partner** powered by AI.

---

## 🎯 What You Can Do

- Converse freely in your target language
- Practice travel dialogues, introductions, or ordering food
- Ask for grammar rules, word meanings, or translations
- Train your ear for natural speech patterns

---

## 🛠️ Tech Stack & Tools

| Component    | Tech Used                                         |
|--------------|---------------------------------------------------|
| Frontend     | Vite + React                                      |
| Backend      | Python, Flask                                     |
| Voice API    | [LiveKit Agents](https://docs.livekit.io/agents/) |
| AI Model     | Google Gemini RealtimeModel                       |

---

## 📦 Setup Instructions

### 🔧 Prerequisites
- Node.js & npm
- Python 3.10+
- `pip install -r requirements.txt` (for backend dependencies)
- `.env` file with relevant API keys and credentials

### ▶️ Getting Started

**Frontend**
```bash
cd frontend
npm install
npm run dev
```
**Backend**
```bash
cd backend
python server.py
python agent.py dev



