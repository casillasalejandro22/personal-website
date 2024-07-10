import React from 'react';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import Introduction from './components/Introduction';
import './App.css';

// Main App component that includes Header, ProfilePicture, and Introduction components
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <ProfilePicture />
        <Introduction />
      </div>
    </div>
  );
}

export default App;
