import React from 'react';

//Components
import Navbar from '../../components/navbar/navbar.jsx';
import Navigator from '../../components/navigator/navigator.jsx';
import HomepageCardsContainer from '../../components/homepageCardsContainer/homepageCardsContainer.jsx';

export default function DiningOut() {
  return (
    <>
      <div className="dining-container">
        <div className="dining-navbar">
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
