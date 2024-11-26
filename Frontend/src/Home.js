import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Lost and Found</h1>
      <p>Please choose an option to get started:</p>
      <div>
        <Link to="/login" style={linkStyle}>Login</Link>
        <br />
        <Link to="/signup" style={linkStyle}>Sign Up</Link>
      </div>
    </div>
  );
};

// Optional: you can add some inline styles for your links
const linkStyle = {
  color: 'blue',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Home;

