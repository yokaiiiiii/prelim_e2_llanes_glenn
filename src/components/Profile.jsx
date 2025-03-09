import React from 'react';
import UserInfo from './UserInfo';
import ProfilePicture from './ProfilePicture';

function Profile({ darkMode }) {
  return (
    <div className="container mt-5">
      <h1>Profile</h1>
      <ProfilePicture />
      <UserInfo name="John Doe" />
      <p>Dark Mode is {darkMode ? 'on' : 'off'}.</p>
    </div>
  );
}

export default Profile;