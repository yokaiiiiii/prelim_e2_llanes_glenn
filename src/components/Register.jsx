import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Simulate an API call with a delay
    setTimeout(() => {
      if (username && password && email) {
        alert('Registration successful! Please log in.');
        navigate('/login');
      } else {
        setError('Please fill in all fields.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-center mb-4">Register</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Loading...</span>
                </>
              ) : (
                'Register'
              )}
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login">Log in here</Link>.
        </p>
      </div>
    </div>
  );
}

export default Register;