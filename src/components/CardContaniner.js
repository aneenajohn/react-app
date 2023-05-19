import React, { useState } from 'react';
import { MemoizedCard } from './Card';
import '../styles/card.css';

const CardContainer = ({ numOfCards }) => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(null);

  const toggleCardVisibility = (index) => {
    setVisibleCardIndex((prevVisibleCardIndex) =>
      prevVisibleCardIndex === index ? null : index
    );
  };

  return (
    <div className='card-container my-1 mx-1'>
      {Array.from({ length: numOfCards }).map((_, index) => (
        <MemoizedCard
          key={index}
          onClick={() => toggleCardVisibility(index)}
          isVisible={visibleCardIndex === index}
        />
      ))}
    </div>
  );
};

export default CardContainer;
