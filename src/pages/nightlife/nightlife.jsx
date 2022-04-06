import React from 'react';

//components
import Navbar from '../../components/navbar/navbar.jsx';
import Navigator from '../../components/navigator/navigator.jsx';
import HomepageCardsContainer from '../../components/homepageCardsContainer/homepageCardsContainer.jsx';

export default function Nightlife() {
  return (
    <>
      <div className="nightlife-container">
        <div className="nightlife-navbar">
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
