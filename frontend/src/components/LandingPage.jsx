import React ,{ useState }from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LandingPage.css';
import '../assets/images/images.jpeg';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

function LandingPage() {
  return (
    <div className="landing-page">
    <div className="left-panel">
      <h1>ToDO APP</h1>
      <div className="todo">
          <img src="images.jpeg" alt="todo" />
      </div>
    </div>
      <div className="right-panel">
        <h1>Productive Mind</h1>
        <p>Todo is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.</p>
        <Link to="/register" className="btn">Get Started</Link>
        <p>Already have an account? <Link className='link' to="/login">Sign in</Link></p>
      </div>
    </div>
  );
}

export default LandingPage;
