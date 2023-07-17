import React from 'react'
import BasketGameCardButton from '../Atoms/BasketGameCardButton'

const BasketGameCardBody = ({name, description, price, id, quantity}) => {
  return (
    <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h4 className="basket-game-card-price">£{price}</h4>
        <p className="card-text">{description}</p>
        <BasketGameCardButton quantity = {quantity} id = {id}/>
    </div>
  )
}
export default BasketGameCardBody
