import React, { useState } from 'react';
import SignupForm from './SignupForm'; // Import the SignupForm component

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password');
      return;
    }
    // Implement your login logic here
    console.log('Logged in with username:', username, 'and password:', password);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={toggleSignup}>
          Switch to Signup
        </button>
      </form>
      {showSignup && <SignupForm />} {/* Render SignupForm if showSignup is true */}
    </div>
  );
}

export default LoginForm;
