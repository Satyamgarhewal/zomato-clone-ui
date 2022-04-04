import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Homepage from './pages/homepage/homepage.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
