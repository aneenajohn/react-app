import React, { useState } from 'react';
import { MemoizedCard } from './Card';
import '../styles/card.css';

const CardContainer = ({ numOfCards }) => {
    // NOTE: this is for only one card visiblity at a time
    // TODO: At max 2 cards should be visible
    //   const [visibleCardIndex, setVisibleCardIndex] = useState(null);

    //   const toggleCardVisibility = (index) => {
    //     setVisibleCardIndex((prevVisibleCardIndex) =>
    //       prevVisibleCardIndex === index ? null : index
    //     );
    //   };
    const [visibleCards, setVisibleCards] = useState([]);

    const toggleCardVisibility = (index) => {
        if (visibleCards.includes(index)) {
            setVisibleCards((prevVisibleCards) =>
              prevVisibleCards.filter((cardIndex) => cardIndex !== index)
            );
          }
        else {
            if (visibleCards.length < 2) {
                setVisibleCards((prevVisibleCards) => [...prevVisibleCards, index]);
            }
        }     
    }

  return (
    <div className='card-container my-1 mx-1'>
      {Array.from({ length: numOfCards }).map((_, index) => (
        <MemoizedCard
          key={index}
          onClick={() => toggleCardVisibility(index)}
          isVisible={visibleCards.includes(index)}
        //   isVisible={visibleCardIndex === index}
        />
      ))}
    </div>
  );
};

export default CardContainer;
