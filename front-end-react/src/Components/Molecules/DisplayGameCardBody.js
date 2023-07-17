import React from "react";

const GameDisplayCardBody = ({name, description, price, platform}) =>{
    return (
        <div className="col-md-8">
          <div className="card-body display-card-body">

            <h5 className="card-title display-card-title">{name}</h5>
            <div className="display-card-price-container">
            <p className="display-card-price">£{price}</p>
            </div>
            <p className="card-text display-card-text">
              {description}
            </p>
            <p className="card-text">
              <small className="text-muted">{platform}</small>
            </p>
          </div>
        </div>
    )
}

export default GameDisplayCardBody