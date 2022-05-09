import React from 'react';

// CSS
import './homepage.css';

// Components
import Navbar from '../../components/navbar/navbar.jsx';
import HomepageCardsContainer from '../../components/homepageCardsContainer/homepageCardsContainer.jsx';
import Navigator from '../../components/navigator/navigator.jsx';
import HomepageCarousel from '../../components/homepage-carousel/homepage-carousel.jsx';
import HomePageMenu from '../../components/homepage-menu/HomepageMenu.jsx';

function Homepage(props) {
  return (
    <>
      <div className="homepage-container">
        <div className="homepage-carousel">
          <HomepageCarousel />
        </div>
        <div>
          <HomePageMenu />
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
