import { useState } from 'react'
import './App.css'
import LiveKitModal from './components/LiveKitModal';
import OrbBackground from './components/OrbBackground';
import LearnMoreModal from './components/LearnMoreModal'; // NEW
import Footer from './components/Footer';

function App() {
  const [showSupport, setShowSupport] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false); // NEW

  const handleSupportClick = () => {
    setShowSupport(true)
  }

  const handleLearnMoreClick = () => {
    setShowLearnMore(true); // NEW
  };

  return (
    
    <div className="app-container">
      <OrbBackground
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={280}
        forceHoverState={false}
      />

      <div className="orb-content">
        <div className="new-badge">✦ Lang Tutor</div>

        <h1 className="orb-heading">
         Fluency Begins with a <br/> Conversation
        </h1>

        <div className="orb-buttons">
          <button className="orb-button primary"  onClick={handleSupportClick}>Talk to an Agent!</button>
          <button className="orb-button secondary" onClick={handleLearnMoreClick}>Learn More</button>
        </div>

        {showSupport && <LiveKitModal setShowSupport={setShowSupport}/>}
          {showLearnMore && <LearnMoreModal setShowLearnMore={setShowLearnMore} />} {/* NEW */}
      </div>
      <div>
      {/* your main content like hero, sections, etc. */}
      <Footer />
    </div>

     

    </div>
  )
}

export default App
