// src/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';      // Import Home component
import Login from './pages/login';    // Import Login page component
import Signup from './pages/signup';  // Import Signup page component
import Find from './pages/Find';

const UserRoutes = () => {
  return (
    <Routes>
      {/* Route to Home (display the homepage with login/signup links) */}
      <Route path="/" element={<Home />} />
      
      {/* Routes for Login and Signup */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/find" element={<Find />}/>
      

      {/* Fallback for 404 */}
      <Route path="*" element={<div>404: Page Not Found</div>} />
    </Routes>
    
  );
};

export default UserRoutes;














