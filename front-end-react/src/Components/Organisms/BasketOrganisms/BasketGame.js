import React, { Component } from "react";
import PropTypes from 'prop-types'
import BasketGameCard from "./BasketGameCard"

class BasketGame extends Component {
  state = {
    inBasket: false
  }

  onHandleClick = () =>{
    this.setState({inBasket: !this.state.inBasket})
  }

  render() {
    const { id, quantity } = this.props.game;
    const { imgstring, name, description, price } = this.props.gameData || {};
    console.log(this.props.game); // log the game object
    console.log(this.props.gameData); // log the game data object
    return (
      <BasketGameCard
        id={id}
        imgSrc={imgstring}
        name={name}
        description={description}
        price={price}
        quantity={quantity}
      />
    )
  }
}

BasketGame.defaultProps = {
  imgstring: "Not Defined",
  name: "Not Defined",
  description: "Not Defined",
  price: "Not Defined",
  quantity: "Not Defined"
}

BasketGame.propTypes = {
  imgstring: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired
}

export default BasketGame;
