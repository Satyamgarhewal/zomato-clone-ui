import React from 'react';

// CSS
import './homepage.css';

// Components
import Navbar from '../../components/navbar/navbar.jsx';
import HomepageCardsContainer from '../../components/homepageCardsContainer/homepageCardsContainer.jsx';
import Navigator from '../../components/navigator/navigator.jsx';

function Homepage(props) {
  return (
    <>
      <div className="homepage-container">
        <div className="homepage-navbar">
          <Navbar />
        </div>
        <div>
          <Navigator />
        </div>
        <div>
          {/* <ProductCard /> */}
          <HomepageCardsContainer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
