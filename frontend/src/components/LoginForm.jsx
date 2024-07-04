import React from 'react';
import '../assets/styles/AuthForm.css';
import '../assets/styles/LandingPage.css';
import '../assets/images/images.jpeg';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div className="landing-page">
      <div className="left-panel">
         <h1>ToDO APP</h1>
         <div className="todo">
         <img src="images.jpeg" alt="todo" />
      </div>
    </div>
    <div className="right-panel">
    <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link classNamelink to="/register" className='link'>Register</Link></p>
    </div>
    </div>
  );
}

export default LoginForm;
