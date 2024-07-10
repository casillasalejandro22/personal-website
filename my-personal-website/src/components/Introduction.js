import React from 'react';
import './Introduction.css';

// Introduction component to display personal information
const Introduction = () => {
  return (
    <div className="introduction">
      <h1>
        Hello, I'm <span className="name-highlight">Alejandro Casillas</span>
      </h1>
      <h2>Computer Science student at Virginia Tech</h2>
      <p>
        I am a third-year undergraduate student studying Computer Science at Virginia Tech planning on graduating in May 2026. I am currently seeking summer internships or full-time opportunities in Software Development and Machine Learning roles.
      </p>
    </div>
  );
}

export default Introduction;
