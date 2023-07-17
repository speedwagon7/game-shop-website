import React from 'react'
import BasketGameCardBody from '../../Molecules/BasketGameCardBody';
import { Link } from "react-router-dom";

const BasketGameCard = ({ imgSrc, name, description, price, id, quantity }) => {
  return (
    <div className="card basket-game-card" >
      <div className="card-body">
        <div>
          <BasketGameCardBody name={name} description={description} price={price} id={id} quantity={quantity} />
        </div> 
      </div>
    </div>
  )
}

export default BasketGameCard;
