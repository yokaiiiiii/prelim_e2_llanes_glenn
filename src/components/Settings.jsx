import React from 'react';

function Settings({ darkMode, toggleDarkMode }) {
  return (
    <div className="container mt-5">
      <h1>Settings</h1>
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          id="darkMode"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkMode" className="form-check-label">
          Dark Mode
        </label>
      </div>
    </div>
  );
}

export default Settings;