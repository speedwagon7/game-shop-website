import PropTypes from "prop-types";
import React, { Component } from "react";
import axios from "axios";
import BasketGame from "../BasketOrganisms/BasketGame";

class BasketGames extends Component {
  state = {
    basketgames: [],
    gamesData: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:8088/api/v1/basket/getGamesInBasket")
      .then((res) => {
        const games = Object.entries(res.data).map(([id, quantity]) => ({
          id: id,
          quantity: quantity,
        }));        
        this.setState({ basketgames: games });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { basketgames, gamesData } = this.state;

    // If the basket games have changed, fetch the game data for each game ID
    if (basketgames !== prevState.basketgames) {
      const gameIds = basketgames.map((game) => Number(game.id));

      // Make an Axios request for each game ID and store the game data in state
      gameIds.forEach((id) => {
        axios
          .get(`http://localhost:8088/api/v1/games/id/${id}`)
          .then((res) => {
            this.setState((prevState) => ({
              gamesData: {
                ...prevState.gamesData,
                [id]: res.data,
              },
            }));
          });
      });
    }
  }

  render() {
    const { basketgames, gamesData } = this.state;
    console.log(basketgames);
    console.log(gamesData);

    return (
      <div>
        {basketgames.map((game) => (
  <BasketGame
    key={game.id}
    game={game}
    gameData={gamesData[game.id]}
    quantity={game.quantity} // pass the quantity as a prop
  />
))}

      </div>
    );
  }
}

export default BasketGames;
