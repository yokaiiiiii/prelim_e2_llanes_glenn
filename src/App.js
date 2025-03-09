import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'bg-dark text-white' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
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