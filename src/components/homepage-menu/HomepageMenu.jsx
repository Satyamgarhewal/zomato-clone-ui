import React from 'react';
import { NavLink } from 'react-router-dom';
// css
import './HomePageMenu.css';
// Components
import ProductCard from '../product-card/product-card.jsx';
import { NavCard } from '../navigation-card/Navigation-Card.jsx';
//utils
import { navCardData } from '../../utils/temp-card-data.jsx';
function HomePageMenu() {
  return (
    <>
      <div className="homepage-menu">
        {/* <ProductCard /> */}
        {navCardData.map((item, i) => {
          return (
            <div key={i}>
              <NavLink to={item.route} style={{ textDecoration: 'none' }}>
                <NavCard cardData={item} />
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePageMenu;
