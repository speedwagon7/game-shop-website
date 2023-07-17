import React, { useEffect, useState } from "react";
import GameDisplayCardBody from "../Molecules/DisplayGameCardBody";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams } from "react-router-dom";

function DisplayGame(props) {
  const { id } = useParams();
  const [game, setGame] = useState({
    imgstring: "Not Defined",
    name: "Not Defined",
    description: "Not Defined",
    price: "Not Defined",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8088/api/v1/games/id/${id}`)
      .then((res) => {
        setGame(res.data);
      });
  }, [id]);

  const { imgstring, name, description, price, platform } = game;

  return (
    <div className="display-game-card-cont">
    <div class="card mb-3 bg-purp display-game-card">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={imgstring} className="img-fluid rounded-start" alt="..." />
        </div>
        <GameDisplayCardBody name={name} description={description} price={price} platform={platform} />
      </div>
    </div>
    </div>
  );
}

DisplayGame.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imgstring: PropTypes.string.isRequired,
};

export default DisplayGame;