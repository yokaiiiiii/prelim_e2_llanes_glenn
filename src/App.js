import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword'; // Import the ForgotPassword component
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''}>
        <Navbar darkMode={darkMode} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Settings darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Dashboard darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/register" element={<Register setLoggedIn={setLoggedIn} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the ForgotPassword route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;