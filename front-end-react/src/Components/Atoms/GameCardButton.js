import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class GameCardButton extends Component {
  onHandleClick = () => {
    const { id } = this.props;
    console.log(id); // Check the value of id
    const quantity = 1;
    axios
      .post(`http://localhost:8088/api/v1/basket/add/${quantity}/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <button className="btn btn-outline-light" onClick={this.onHandleClick}>
        Add to Basket
      </button>
    );
  }
}

export default GameCardButton;
