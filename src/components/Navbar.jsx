import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
    </nav>

  );
};

export default Navbar;
