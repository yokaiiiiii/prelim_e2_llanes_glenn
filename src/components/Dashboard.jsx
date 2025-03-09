import React from 'react';

function Dashboard({ darkMode }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 className="text-center mb-4">Dashboard</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text display-4">1,234</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Active Users</h5>
                <p className="card-text display-4">987</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Inactive Users</h5>
                <p className="card-text display-4">247</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Recent Activity</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">User John Doe logged in</li>
                  <li className="list-group-item">User Jane Smith updated profile</li>
                  <li className="list-group-item">User Alice Johnson registered</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Statistics</h5>
                <p className="card-text">Here are some statistics about user activity.</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '75%' }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '90%' }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-4">
          Dark Mode is {darkMode ? 'on' : 'off'}.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;