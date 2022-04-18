import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Homepage from './pages/homepage/homepage.jsx';
import Nightlife from './pages/nightlife/nightlife.jsx';
import Delivery from './pages/delivery/Delivery.jsx';
import DiningOut from './pages/diningOut/DiningOut.jsx';
import DetailsPage from './pages/details-page/DetailsPage.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nightlife" exact element={<Nightlife />} />
          <Route path="/delivery" exact element={<Delivery />} />
          <Route path="/diningout" exact element={<DiningOut />} />
          <Route path="/delivery/:id" exact element={<DetailsPage />} />
          <Route path="/nightlife/:id" exact element={<DetailsPage />} />
          <Route path="/diningout/:id" exact element={<DetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
