// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './Routes';  // Import routes for the application
import './App.css';  // Your global styles

const App = () => {
  return (
    <BrowserRouter>
      <UserRoutes />  {/* This will handle routing */}
    </BrowserRouter>
  );
};

export default App;



