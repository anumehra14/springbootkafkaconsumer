import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Use the new root API for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with StrictMode for better development experience
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
