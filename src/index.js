import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import Popper from '@popperjs/core';
import './style.css';
import './darkmode-style.css';
import "../node_modules/primereact/resources/primereact.css";
import "../node_modules/primereact/resources/primereact.min.css";
// import "../node_modules/primereact/resources/themes/lara-dark-purple";
// import "../node_modules/primereact/resources/themes/lara-light-purple";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
