import React from "react";
import "./Modal.css"; // use the same styles

const LearnMoreModal = ({ setShowLearnMore }) => {
  return (
    <div className="modal-overlay1">
      <div className="modal-content1">
        <h2>Why Lang Tutor Exists</h2>
            <p>
                Lang Tutor was born from my personal journey of learning German on Duolingo.
                While the app is great for vocabulary and grammar, I always believed real fluency comes
                from actual conversations. I wanted to talk, listen, and practice in real time
                not just tap through multiple-choice questions.
            </p>
         <p>
            That curiosity drove me to build Lang Tutor a voice-first AI language learning agent
            designed for speaking practice and natural interaction.
        </p>

        <h3>How It Works</h3>
        <ul>
            <li><strong>LiveKit API</strong> for high-quality real-time voice communication</li>
            <li><strong>Gemini AI</strong> (Google RealtimeModel) to generate context-aware responses</li>
            <li><strong>Python + Flask</strong> backend to manage the voice agent and server logic</li>
            <li><strong>Vite + React</strong> frontend for a responsive and fast interface</li>
        </ul>

         <p>
            This setup makes Lang Tutor versatile, fast, and ideal for practicing spoken languages
            with AI in a way that feels natural and intuitive.
        </p>

        <h3>Why a Voice-First Agent?</h3>
        <p>
          Most apps rely on passive learning, but <strong>speaking and listening</strong> are key to mastering a language. Lang Tutor lets you practice in real-time, helping you build pronunciation confidence, natural phrasing, and thinking in your target language.
        </p>

        <h3>Built on the Future of Voice AI</h3>
        <p>
          Lang Tutor uses <a href="https://docs.livekit.io/agents/start/voice-ai/" target="_blank" rel="noopener noreferrer">LiveKit Voice AI Agents ↗</a>, enabling <strong>ultra-low latency</strong> conversations powered by a cutting-edge voice pipeline.
          You get <strong>instant interaction</strong>, thanks to sub-500ms audio response times.
        </p>

        <h3>What You Can Do</h3>
        <ul>
          <li> Speak freely in your target language</li>
          <li> Practice travel phrases, ordering food, or introductions</li>
          <li> Ask for explanations, grammar rules, or translations</li>
          <li> Use as your daily speaking partner</li>
        </ul>

        <h3>What’s Next?</h3>
        <ul>
          <li> Personalized lessons & fluency tracking</li>
          <li> Support for regional accents</li>
          <li> Memory-based responses and retention tools</li>
        </ul>

        


        <p>
            Curious about how the voice agent works under the hood? Check out:
            <br />
            <a
            href="https://docs.livekit.io/"
            target="_blank"
            rel="noopener noreferrer"
            >
            LiveKit Documentation ↗
            </a>
        </p>

       
      </div>
       <button
          className="cancel-button"
          onClick={() => setShowLearnMore(false)}
        >
          Close
        </button>
    </div>
  );
};

export default LearnMoreModal;
