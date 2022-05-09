import React from 'react';
import './product-card.css';
function ProductCard({ index }) {
  return (
    <>
      <div className="card-container" id={index}>
        <div className="card-body">
          <div className="card-image">
            <img
              src="https://b.zmtcdn.com/data/pictures/6/18748726/2fa6cb333e7183f47ec0f0099dac4c08_featured_v2.jpg?output-format=webp"
              alt="food image"
              id={index}
            />
          </div>
          <div className="card-offer" id={index}>
            Pro - Get 20% off
          </div>
          <div className="card-distance" id={index}>
            300 m
          </div>

          <div className="card-info-flex" id={index}>
            <div className="card-basic-info">
              <div className="card-title" id={index}>
                the night jar
              </div>
              <div className="card-subtitle" id={index}>
                north Indian,Continental, ...
              </div>
              <div className="card-details" id={index}>
                Leisure Inn Grand Chanakya, MI Road, Jaipur
              </div>
            </div>
            <div className="card-rating-info">
              <div className="card-rating" id={index}>
                4.5 &#9733;
              </div>
              <div className="card-price-info" id={index}>
                {' '}
                &#8377;1600 for two
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
