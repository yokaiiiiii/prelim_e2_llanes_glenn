import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ darkMode, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
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
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
          {loggedIn ? (
            <button className="btn btn-danger ms-2" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link className="btn btn-primary ms-2" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;