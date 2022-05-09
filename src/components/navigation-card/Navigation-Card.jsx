import React from 'react';

// CSS
import './Navigation-Card.css';
const NavigationCard = ({ cardData }) => {
  return (
    <>
      <div className="nav-card-container">
        <div className="nav-card-body">
          <div className="nav-card-image">
            <img src={cardData.img} alt="food image" id={cardData.index} />
          </div>
        </div>
        <div className="nav-card-title">
          <h2>{cardData.title}</h2>
        </div>
      </div>
    </>
  );
};

export const NavCard = React.memo(NavigationCard);
