import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app';
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import './Components/index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
