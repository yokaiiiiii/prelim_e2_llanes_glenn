import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Simulate an API call with a delay
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        setLoggedIn(true);
        navigate('/profile');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-center mb-4">Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
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
                'Login'
              )}
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
        <p className="text-center mt-2">
          Forgot your password? <Link to="/forgot-password">Reset it here</Link>.
        </p>
      </div>
    </div>
  );
}

export default Login;