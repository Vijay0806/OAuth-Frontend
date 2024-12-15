import React from "react";
import "./Home.css"; // Link your CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="home-title">Welcome to the OAuth-App</h1>
        <p className="home-description">
          Securely log in using Google or GitHub and explore the amazing features.
        </p>
        
      </div>
    </div>
  );
};

export default Home;
