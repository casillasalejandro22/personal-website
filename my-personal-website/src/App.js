import React from 'react';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <ProfilePicture />
        {/* Placeholder for future text content */}
        <div style={{ flexBasis: '66.67%', padding: '20px' }}>
          <h1>Hello, I'm Alejandro Casillas</h1>
          <p>blah blah blah</p>
        </div>
      </div>
    </div>
  );
}

export default App;
