import React from 'react'
import Card from './Card';
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

  return (
    <>
        {Array.from({length: numOfCards}).map((_,index)=>{
            return (
                <Card key={index} />
            )
        })}
    </>
  )
}

export default CardContaniner;