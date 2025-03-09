import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Navbar from './components/Navbar'; // Import the Navbar
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''}>
        <Navbar darkMode={darkMode} /> {/* Add the Navbar */}
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route
            path="/profile"
            element={<Profile darkMode={darkMode} />}
          />
          <Route
            path="/settings"
            element={<Settings darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;