import React from 'react';
import { Link } from 'react-router-dom';

function Home({ darkMode }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-center mb-4">Welcome to the User Profile App</h1>
        <p className="text-center mb-4">
          Manage your profile, customize settings, and explore the app features.
        </p>
        <div className="text-center">
          <Link to="/profile" className="btn btn-primary me-3">
            Go to Profile
          </Link>
          <Link to="/settings" className="btn btn-secondary">
            Go to Settings
          </Link>
        </div>
        <p className="text-center mt-4">
          Dark Mode is {darkMode ? 'on' : 'off'}.
        </p>
      </div>
    </div>
  );
}

export default Home;