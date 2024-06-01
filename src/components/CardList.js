import React from 'react';
import Card from './Card';

const CardList = ({ cardValues }) => {
  return (
    <div className='tc'>
      {cardValues.map((card, index) => (
        <Card
          key={index}
          productName={card.productName}
          price={card.price}
          rating={card.rating}
          discount={card.discount}
          availability={card.availability}
        />
      ))}
    </div>
  );
}

export default CardList;
