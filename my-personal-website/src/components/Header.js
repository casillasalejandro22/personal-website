import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="social-icons">
        {/* GitHub icon link */}
        <a href="https://github.com/casillasalejandro22" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
        {/* LinkedIn icon link */}
        <a href="https://linkedin.com/in/casillasalejandro" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
      </div>
      {/* Resume button link DOESN'T WORK YET*/}
      <a href="C:\Users\casil\Downloads\Alejandro_Casillas_Resume_07_09_2024.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">Resume</a>
    </header>
  );
}

export default Header;
