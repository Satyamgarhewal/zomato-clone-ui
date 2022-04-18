import React from 'react';
import { useNavigate } from 'react-router-dom';

import ProductCard from '../product-card/product-card.jsx';
import './homepageCardsContainer.css';

export default function HomepageCardsContainer() {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let navigate = useNavigate();
  const handleCardClick = (e) => {
    console.log('--------!!!!!!!!', e.target);
    navigate('/diningout/1');
  };
  return (
    <>
      <div className="homepage-card-container">
        {num.map((items, i) => {
          return (
            <div key={i} onClick={handleCardClick}>
              <ProductCard />
            </div>
          );
        })}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </>
  );
}
