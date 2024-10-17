import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css'; // Went with the global style as I think theyblook better
import App from './App';
import reportWebVitals from './reportWebVitals'; //I used this so as to measure performance

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <App /> // Render the main App component
  </React.StrictMode>
);

// Measuring performance with regards to time
reportWebVitals();
