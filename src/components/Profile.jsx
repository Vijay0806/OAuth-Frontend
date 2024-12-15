import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For redirection
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles.css"; // Link your CSS file

const Profile = ({ user }) => {
  const navigate = useNavigate();

  // Redirect to the login page if user is not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/"); // Go to the login page if no user exists
    }
  }, [user, navigate]);

  const handleLogout = () => {
    // Logout endpoint with environment variable
    window.location.href = "https://oauth-backend-1-vj.onrender.com/auth/logout";
  };

  return (
    <div className="profile-page">
      <h1>Welcome, {user?.displayName || "User"}!</h1>
      <div className="profile-actions">
        <button onClick={handleLogout} className="logout-button">
          <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
