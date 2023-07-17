import React from 'react'

const CheckoutBasketCard = () => {
    return (
        <div className="card text-start" >
        <h5 className='card-header'>
          Basket
        </h5>
        <div className="card-body ps-4">
          <h5 className="card-title">Total Price: £29.99</h5>
          <p className="card-text">Inc. VAT</p>
        </div>
      </div>
      )
    }
export default CheckoutBasketCard;
