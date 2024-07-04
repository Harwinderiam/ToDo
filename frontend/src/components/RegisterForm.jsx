import React from 'react';
import '../assets/styles/AuthForm.css';
import '../assets/styles/LandingPage.css';
import '../assets/images/images.jpeg';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <div className="landing-page">
      <div className="left-panel">
         <h1>ToDO APP</h1>
         <div className="todo">
         <img src="images.jpeg" alt="todo" />
         </div>
      </div>
    <div className="right-panel">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link  className='link' to="/login">Sign in</Link></p>
    </div>
    </div>
  );
}

export default RegisterForm;

