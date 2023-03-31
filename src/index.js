import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';

// import './reset.css';

const rootElement = document.getElementById("root");
rootElement.classList = "font";

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
