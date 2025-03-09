import React from 'react';

function ProfilePicture({ profilePic }) {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: profilePic ? 'transparent' : 'gray',
        backgroundImage: profilePic ? `url(${profilePic})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  );
}

export default ProfilePicture;