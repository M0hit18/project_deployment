import './App.css'; // Make sure this is at the top of your index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import AppRoutes from "./Routes"; // Correct path to Routes.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SnackbarProvider>
      <AppRoutes /> {/* Render routes here */}
    </SnackbarProvider>
  </BrowserRouter>
);


