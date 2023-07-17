import React from "react";
import DisplayAllGamesCardBody from "../../Molecules/DisplayAllGamesCardBody";

const DisplayAllGamesCard = ({id, name, genre, platform, price, ageRating, rating, description, imgstring}) => {
  return (
    <div className="col">
      <div className="card display-card">
        <DisplayAllGamesCardBody id={id} name={name} genre={genre} platform={platform} price={price} ageRating={ageRating} rating={rating} description={description} imgstring={imgstring}/>
      </div>
    </div>
  );
};

export default DisplayAllGamesCard;
