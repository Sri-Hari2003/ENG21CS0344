import React from 'react';

const Card = ({ productName, price, rating, discount, availability }) => {
  
  const placeholderImage = 'https://via.placeholder.com/250';

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" style={{ width: '250px' }}>
      <img src={placeholderImage} alt="Product" />
      <div>
        <h2>{productName}</h2>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <p>Discount: {discount}</p>
        <p>Availability: {availability}</p>
      </div>
    </div>
  );
}

export default Card;
