import React from "react";
import GameCardButton from "../Atoms/GameCardButton";
import { Link } from "react-router-dom";
import UpdateButton from "../Atoms/UpdateButton"


const GameCardBody = ({name, description, price, id}) => {
  return (
    <div className="game-card-body bg-purp">
      <div className="game-card-header">
        <Link className="game-link-display" to={`/Display/${id}`}><h5 className="game-card-title">{name}</h5></Link>
        <h4 className="game-card-price">£{price}</h4>
      </div>
      <div className="game-card-text-container">
      <p className="game-card-text">
        {description}
      </p></div>
      <GameCardButton id={id}/>
    </div>
  )
}

export default GameCardBody;























