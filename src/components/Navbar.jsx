import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode }) {
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;