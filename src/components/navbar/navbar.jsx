import React, { useReducer } from 'react';
import './navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD_VALUES':
      return {
        ...state,
        [action.field]: action.payload,
      };
  }
};
function Navbar(props) {
  const initialState = {
    address: '',
    search: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch({
      field: name,
      payload: value,
      type: 'SET_FIELD_VALUES',
    });
  };
  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <h1 className="header-logo-heading">zomato</h1>
        </div>
        <div className="header-fields">
          <form className="header-form">
            <input
              type="text"
              placeholder="Address"
              className="form-address"
              name="address"
              value={state.address}
              onChange={handleFormChange}
            />
            <div className="border-separation"></div>
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="form-search"
              name="search"
              value={state.search}
              onChange={handleFormChange}
            />
          </form>
        </div>
        <div className="header-user-profile">
          <AccountCircleTwoToneIcon
            style={{ color: '#4174DD', fontSize: '60px' }}
          />
          {/* <h3 className="user-name">Name</h3> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
