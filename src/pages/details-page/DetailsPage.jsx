import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Carousel from '../../components/carousel/carousel.jsx';
function DetailsPage(props) {
  const id = useParams();
  console.log('id-------->', id);
  return (
    <>
      <div className="details-page-container">
        <Carousel />
      </div>
    </>
  );
}

export default DetailsPage;
