// src/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signup';
import Find from './pages/Find';
import Post from './pages/Post';
import Details from './pages/Details'; // Import the Details component

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/find" element={<Find />} />
      <Route path="/post" element={<Post />} />
      <Route path="/find/details/:id" element={<Details />} /> // Update the route path
      <Route path="*" element={<div>404: Page Not Found</div>} />
    </Routes>
  );
};

export default UserRoutes;














