import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App.jsx';
import './App.css';

// const appElement = document.getElementById('app');
// ReactDOM.render(<App />, appElement);
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
