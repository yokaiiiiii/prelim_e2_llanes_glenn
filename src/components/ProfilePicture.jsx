import React from 'react';

function ProfilePicture({ profilePic }) {
  return (
    <div
      style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: profilePic ? 'transparent' : '#001f3f', /* Navy blue */
        backgroundImage: profilePic ? `url(${profilePic})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '0 auto',
        border: '4px solid #001f3f', /* Navy blue border */
      }}
    ></div>
  );
}

export default ProfilePicture;