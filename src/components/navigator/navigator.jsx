import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// components
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';

import './navigator.css';
export default function Navigator(props) {
  const currentLocation = useLocation();

  const handlePageNavigation = (e) => {};
  return (
    <>
      <div className="navigation-container">
        <NavLink
          to="/delivery"
          activeclassname="active"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="delivery"
            name="delivery"
            onClick={handlePageNavigation}
          >
            <div className="delivery-icon">
              <DeliveryDiningOutlinedIcon
                style={{ color: 'rgba(0,0,0,0.4)', fontSize: '40px' }}
              />
            </div>
            <h1 className="delivery-text">Delivery</h1>
          </div>
        </NavLink>
        <NavLink
          to="/diningout"
          style={{ textDecoration: 'none' }}
          activeclassname="active"
        >
          <div className="dining" name="dining" onClick={handlePageNavigation}>
            <div className="dining-icon">
              <RestaurantOutlinedIcon
                style={{ color: 'rgba(0,0,0,0.4)', fontSize: '40px' }}
              />
            </div>
            <h1 className="dining-text">Dining Out</h1>
          </div>
        </NavLink>
        <NavLink
          to="/nightlife"
          style={{ textDecoration: 'none' }}
          activeclassname="active"
        >
          <div
            className="nightlife"
            name="nightlife"
            onClick={handlePageNavigation}
          >
            <div className="nightlife-icon">
              <NightlifeIcon
                style={{ color: 'rgba(0,0,0,0.4)', fontSize: '40px' }}
              />
            </div>
            <h1 className="nightlife-text">Nightlife</h1>
          </div>
        </NavLink>
      </div>
    </>
  );
}
