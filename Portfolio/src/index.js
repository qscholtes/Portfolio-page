import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './nav';
import Footer from './footer';
import { BrowserRouter } from "react-router-dom";




const root = createRoot(document.getElementById('root')); // Use createRoot instead of ReactDOM.createRoot
root.render(
  <BrowserRouter > 
    <React.StrictMode>
      <NavBar />
      <App />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
