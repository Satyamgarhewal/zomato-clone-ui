import React from 'react';

// Components
import Navbar from '../../components/navbar/navbar.jsx';
import Navigator from '../../components/navigator/navigator.jsx';
import HomepageCardsContainer from '../../components/homepageCardsContainer/homepageCardsContainer.jsx';

// css
import './Delivery.css';
export default function Delivery() {
  return (
    <>
      <div className="delivery-container">
        <div className="delivery-navbar">
          <Navbar />
        </div>
        <div>
          <Navigator />
        </div>
        <div>
          <HomepageCardsContainer />
        </div>
      </div>
    </>
  );
}
