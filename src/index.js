import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Redirect} from 'react-router-dom';
import axios from 'axios';
import history from './history'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
