import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Online Learning Platform</h1>
      <p>Explore courses, improve your skills, and learn from the best instructors.</p>
      
      <div className="home-buttons">
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="home-button">Register</button>
        </Link>
        <Link to="/courses">
          <button className="home-button">View Courses</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
