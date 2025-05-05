// write product card here
// cart/productcard.jsx

import React from 'react';
import ViewProductButton from '../component/button';

const Productcard = () => {
  // Static dummy data
  const productName = 'Classic Sneakers';
  const productPrice = '$59.99';
  const productImage = 'https://via.placeholder.com/150';

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '250px', textAlign: 'center' }}>
      <img src={productImage} alt={productName} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
      <h3>{productName}</h3>
      <p>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
