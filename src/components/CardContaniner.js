import React from 'react'

const CardContaniner = ({numOfCards}) => {
    let cards = new Array().fill(numOfCards)
    console.log({cards});
  return (
    <div>
       {[1,2,3,4,5].map((_) => {
            return (
                <div className='' style={{width: '50px', height: '60px', border: '1px sold black'}} >
                    <p>Content on card</p>
                </div>
            )
       })}
    </div>
  )
}

export default CardContaniner;