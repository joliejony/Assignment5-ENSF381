// LoginPage.js

import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';


function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      <Header />
      {showLoginForm ? <LoginForm /> : <SignupForm />}
      <button onClick={toggleForm}>
        {showLoginForm ? 'Switch to Signup' : 'Switch to Login'}
      </button>
      <Footer />
    </div>
  );
}

export default LoginPage;
