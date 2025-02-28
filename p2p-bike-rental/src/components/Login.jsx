import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
    // Add login logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', signupData);
    // Add signup logic here
  };

  return (
    <div className="auth-background">
      <div className="auth-container">
        {/* Tab Buttons */}
        <div className="button-container">
          <button 
            className={`tab-button ${isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`tab-button ${!isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form Container with Slide Animation */}
        <div className={`form-container ${isLogin ? 'slide-login' : 'slide-signup'}`}>
          {/* Login Form */}
          <div className="form-box login-box">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <label htmlFor="login-username">Username</label>
                <input
                  type="text"
                  id="login-username"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  placeholder="Enter your username"
                />
              </div>
              <div className="input-group">
                <label htmlFor="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="submit-button">Log In</button>
            </form>
          </div>

          {/* Signup Form */}
          <div className="form-box signup-box">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <div className="input-group">
                <label htmlFor="signup-username">Username</label>
                <input
                  type="text"
                  id="signup-username"
                  name="username"
                  value={signupData.username}
                  onChange={handleSignupChange}
                  placeholder="Choose a username"
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-group">
                <label htmlFor="signup-password">Password</label>
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Create a password"
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirm-signup-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-signup-password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Confirm password"
                />
              </div>


              <button type="submit" className="submit-button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
