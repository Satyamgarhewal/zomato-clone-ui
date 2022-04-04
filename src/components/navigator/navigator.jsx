import React from 'react';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';

import './navigator.css';
export default function Navigator() {
  function handlePageNaviation(e) {
    console.log(e.target);
    const { name } = e.target;
    console.log('page navigation clicked', name);
  }
  return (
    <>
      <div className="navigation-container">
        <div className="delivery" name="delivery" onClick={handlePageNaviation}>
          <div className="delivery-icon">
            <DeliveryDiningOutlinedIcon
              style={{ color: 'rgba(0,0,0,0.4)', fontSize: '40px' }}
            />
          </div>
          <h1 className="delivery-text">Delivery</h1>
        </div>
        <div className="dining" name="dining" onClick={handlePageNaviation}>
          <div className="dining-icon">
            <RestaurantOutlinedIcon
              style={{ color: 'rgba(0,0,0,0.4)', fontSize: '40px' }}
            />
          </div>
          <h1 className="dining-text">Dining Out</h1>
        </div>
        <div
          className="nightlife"
          name="nightlife"
          onClick={handlePageNaviation}
        >
          <div className="nightlife-icon">
            <NightlifeIcon
              style={{ color: 'rgba(0,0,0,0.4)', fontSize: '40px' }}
            />
          </div>
          <h1 className="nightlife-text">Nightlife</h1>
        </div>
      </div>
    </>
  );
}
