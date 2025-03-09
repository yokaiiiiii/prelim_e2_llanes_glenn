import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ darkMode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (e.g., clear user session)
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          User Profile App
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <Link className="nav-link" to="/settings">
            Settings
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <button className="btn btn-danger ms-2" onClick={handleLogout}>
            Logout
          </button>
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;