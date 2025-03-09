import React from 'react';

function Home({ darkMode }) {
  return (
    <div className="container mt-5">
      <h1>Welcome to the User Profile App!</h1>
      <p>Dark Mode is {darkMode ? 'on' : 'off'}.</p>
    </div>
  );
}

export default Home;