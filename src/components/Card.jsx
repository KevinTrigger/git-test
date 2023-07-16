import React from 'react'
import karaTe from "../images/kara-te.jpg";



const Card = ({card}) => {
  return (
    <div>
      <img className="max-h-smallCover" src={karaTe} alt="" />
      <span>Автор: {card.title}</span>
    </div>
  )
}

export default Card;