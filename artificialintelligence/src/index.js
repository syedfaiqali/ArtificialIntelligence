import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Change import to BrowserRouter

AOS.init({
  duration: 1200,
});

ReactDOM.render(
  <BrowserRouter> {/* Use BrowserRouter here */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
