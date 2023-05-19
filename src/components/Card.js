import React, { memo } from 'react';

const Card = ({ onClick, isVisible }) => {
  console.log({ isVisible });
  return (
    <div
      className=''
      style={{ width: '100px', height: '100px', border: '2px solid black' }}
      onClick={onClick}
    >
      {isVisible && <p>Content on card</p>}
    </div>
  );
};

export const MemoizedCard = memo(Card);

export default Card;
