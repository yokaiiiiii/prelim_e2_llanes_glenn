import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // Add error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear previous errors
    // Simulate an API call with a delay
    setTimeout(() => {
      if (email) {
        alert(`Password reset instructions sent to ${email}`);
        setEmail('');
      } else {
        setError('Please enter your email.'); // Set error message
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <h1>Forgot Password</h1>
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
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
            'Reset Password'
          )}
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;