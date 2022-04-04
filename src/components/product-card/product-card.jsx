import React from 'react';
import './product-card.css';
function ProductCard() {
  return (
    <>
      <div className="card-container">
        <div className="card-body">
          <div className="card-image">
            <img
              src="https://b.zmtcdn.com/data/pictures/6/18748726/2fa6cb333e7183f47ec0f0099dac4c08_featured_v2.jpg?output-format=webp"
              alt="food image"
            />
          </div>
          <div className="card-offer">Pro - Get 20% off</div>
          <div className="card-distance">300 m</div>

          <div className="card-info-flex">
            <div className="card-basic-info">
              <div className="card-title">the night jar</div>
              <div className="card-subtitle">north Indian,Continental, ...</div>
              <div className="card-details">
                Leisure Inn Grand Chanakya, MI Road, Jaipur
              </div>
            </div>
            <div className="card-rating-info">
              <div className="card-rating">4.5 &#9733;</div>
              <div className="card-price-info"> &#8377;1600 for two</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
