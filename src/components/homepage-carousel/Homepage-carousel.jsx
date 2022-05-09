import React from 'react';

// CSS
import './Homepage-carousel.css';

// components
import Navbar from '../navbar/navbar.jsx';
function HomepageCarousel() {
  return (
    <>
      <div className="homepage-carousel-container">
        {/* <h1>This is homepage Carousel</h1> */}
        <div>
          {/* <img
            src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg"
            alt="food-image"
            className="homepage-carousel-image"
          /> */}
        </div>
        <div className="homepage-carousel-navbar">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default HomepageCarousel;
