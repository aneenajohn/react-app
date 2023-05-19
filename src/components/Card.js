import React, { memo } from 'react';
 

const Card = ({ onClick, isHidden }) => {
    console.log({isHidden});
  return (
    <div className='' style={{width: '100px', height: '100px', border: '2px solid black'}} onClick={onClick}>
        <p style={{ display: `${isHidden ? 'none' : 'block'}`}}>Content on card</p>
    </div>
  )
}

export const MemoizedCard = memo(Card);

export default Card