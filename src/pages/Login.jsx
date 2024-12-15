// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../pages/Login.css";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "https://oauth-backend-1-vj.onrender.com/auth/google"; // Backend Google URL
  };

  const handleGithubLogin = () => {
    window.location.href = "https://oauth-backend-1-vj.onrender.com/auth/github"; // Backend GitHub URL
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login with</h2>
      <div className="login-buttons">
        <button className="login-button google" onClick={handleGoogleLogin}>
          <FontAwesomeIcon icon={faGoogle} className="icon" />
          <span>Google</span>
        </button>
        <button className="login-button github" onClick={handleGithubLogin}>
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <span>GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
