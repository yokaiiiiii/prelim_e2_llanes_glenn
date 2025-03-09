import React, { useState } from 'react';
import UserInfo from './UserInfo';
import ProfilePicture from './ProfilePicture';

function Profile({ darkMode }) {
  const [name, setName] = useState('John Doe');
  const [profilePic, setProfilePic] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Profile</h1>
      <ProfilePicture profilePic={profilePic} />
      <UserInfo name={name} />
      <div className="mt-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="profilePic" className="form-label">
          Upload Profile Picture:
        </label>
        <input
          type="file"
          id="profilePic"
          className="form-control"
          accept="image/*"
          onChange={handleProfilePicChange}
        />
      </div>
      <p>Dark Mode is {darkMode ? 'on' : 'off'}.</p>
    </div>
  );
}

export default Profile;