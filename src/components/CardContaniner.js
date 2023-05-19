import React, { useState } from 'react'
import {MemoizedCard} from './Card';
import '../styles/card.css';
import { useEffect } from 'react';

const CardContaniner = ({ numOfCards }) => {
    // const renderCards = () => {
    //     const cards = [];
    //     for(let i=0;i<numOfCards;i++) {
    //         cards.push(<Card />)
    //     }
    //     console.log("cards: ", cards);
    //     return cards;
    // }
    const [isHidden, setHidden] = useState(true)

    const showHideCardHandler = () => {
        console.log("onClick called");
        setHidden(() => setHidden(!isHidden))
    }

    console.log({isHidden});

  return (
    <div className='card-container my-1 mx-1'>
        {Array.from({length: numOfCards}).map((_,index)=>{
            return (
                <MemoizedCard 
                    key={index} 
                    onClick={showHideCardHandler} 
                    isHidden={isHidden}
                />
            )
        })}
    </div>
  )
}

export default CardContaniner;