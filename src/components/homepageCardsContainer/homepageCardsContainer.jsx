import React from 'react';
import ProductCard from '../product-card/product-card.jsx';
import './homepageCardsContainer.css';

export default function HomepageCardsContainer() {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="homepage-card-container">
        {num.map((items, i) => {
          return (
            <div key={i}>
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
