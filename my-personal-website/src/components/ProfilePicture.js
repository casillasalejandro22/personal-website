import React from 'react';
import './ProfilePicture.css';
import profilePic from '../assets/Default_pfp.png'; // TEMPORARY PICTURE

const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      {/* Profile picture image */}
      <img src={profilePic} alt="Profile" />
    </div>
  );
}

export default ProfilePicture;
