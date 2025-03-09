import React from 'react';

function Settings({ darkMode, toggleDarkMode }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 className="text-center mb-4">Settings</h1>
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
        <div className="mt-4">
          <h5>Notification Preferences</h5>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dailyNotifications"
            />
            <label htmlFor="dailyNotifications" className="form-check-label">
              Daily Notifications
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="weeklyNotifications"
            />
            <label htmlFor="weeklyNotifications" className="form-check-label">
              Weekly Notifications
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="monthlyNotifications"
            />
            <label htmlFor="monthlyNotifications" className="form-check-label">
              Monthly Notifications
            </label>
          </div>
        </div>
        <div className="mt-4">
          <h5>Privacy Settings</h5>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="privateProfile"
            />
            <label htmlFor="privateProfile" className="form-check-label">
              Make Profile Private
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;