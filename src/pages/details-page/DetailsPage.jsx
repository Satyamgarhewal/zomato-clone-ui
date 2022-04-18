import React from 'react';
import { useParams } from 'react-router-dom';

function DetailsPage(props) {
  const id = useParams();
  console.log('id-------->', id);
  return (
    <>
      <div className="details-page-container">
        <div>This is details page</div>
      </div>
    </>
  );
}

export default DetailsPage;
