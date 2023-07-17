import React from "react";
import GameCardBody from "../../Molecules/GameCardBody";
import { Link } from "react-router-dom";

const GameCard = ({ imgSrc, name, description, price, id}) => {
  return (
    <div className="col">
      <div className="card game-card">
        <Link to={`/Display/${id}`}><img src={imgSrc} className="card-img-top"/></Link>
        <GameCardBody name={name} description={description} price={price} id={id} />
      </div>
    </div>
  );
};

export default GameCard;
