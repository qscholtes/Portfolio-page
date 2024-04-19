import React from 'react';
import portrait from '../assets/portraitjpg-removebg-preview.png';
import '../CSS/Portrait.css'

function Portrait() {
  return (
    <section className="intro-container">
      <div className="img-portrait">
        <img src={portrait} alt="portrait of Quinten" className='portrait-image' />
      </div>
      <div className="intro-welcome">
          <p>Hello! I'm Quinten, a first-year Computer Science student with a interest for creating immersive web applications.</p>
      </div>
      
    </section>
    
  );
}

export default Portrait;