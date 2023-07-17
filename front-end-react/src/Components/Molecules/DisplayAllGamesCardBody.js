import React from "react";
import DeleteGameButton from "../Atoms/DeleteGameButton";

const DisplayAllGamesCardBody = ({
  id,
  name,
  genre,
  platform,
  price,
  ageRating,
  rating,
  description,
  imgstring,
}) => {
  return (
    <div className="">
      <div className="game-card-header">
        <div class="card">
          <div class="card-header">
            {id}: {name}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{genre}</li>
            <li class="list-group-item">{platform}</li>
            <li class="list-group-item">£{price}</li>
            <li class="list-group-item">{ageRating}</li>
            <li class="list-group-item">{rating}</li>
            <li class="list-group-item">{description}</li>
            <li class="list-group-item">{imgstring}</li>
          </ul>
        </div>
      </div>

      <DeleteGameButton id={id} />
    </div>
  );
};

export default DisplayAllGamesCardBody;
