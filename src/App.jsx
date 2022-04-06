import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Homepage from './pages/homepage/homepage.jsx';
import Nightlife from './pages/nightlife/nightlife.jsx';
import Delivery from './pages/delivery/Delivery.jsx';
import DiningOut from './pages/diningOut/DiningOut.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nightlife" exact element={<Nightlife />} />
          <Route path="/delivery" exact element={<Delivery />} />
          <Route path="/diningout" exact element={<DiningOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
