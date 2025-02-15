import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom'
function HomePage() {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to Vaagdevi College</h1>
        <p className="description">
          This website is developed exclusively for the One Day Batsmans! We provide you with the exact syllabus and lectures so you don’t have to waste time searching for videos the night before your exam.
        </p>
        <p className="details">
          Find all the information you need about your courses, subjects, topics, and subtopics, tailored for fast learning and exam preparation. Keep learning, stay ahead, and ace your exams with confidence.
        </p>
        <p className="good-luck">
          Good luck, and remember – time spent here is time saved on exam night!
        </p>
      </div>
      <div className="cta">
        <Link to="/cse" className="cta-button">Explore Syllabus</Link>
      </div>
    </div>
  );
}

export default HomePage;