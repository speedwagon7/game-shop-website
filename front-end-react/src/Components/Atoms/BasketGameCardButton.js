import React, { Component } from 'react';
import axios from 'axios';

class BasketGameCardButton extends Component {
  state = {
    deleted: false
  }  
  constructor(props) {
    super(props);
  }

  onHandleClick = () => {
    const { id } = this.props;
    axios.delete(`http://localhost:8088/api/v1/basket/deleteGameById/${id}`)
      .then(response => {
        console.log(response)
        this.setState({ deleted: true })
      })
      .catch(error => {
        console.log(error)
      });
  }

  onHandleUpdateClick = (event) => {
    event.preventDefault();
    const { id } = this.props;
    const quantity = this.refs.quantityNew.value;
    console.log(quantity);
    axios.put(`http://localhost:8088/api/v1/basket/updateGameInBasket/${id}/${quantity}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
  }
  
  
  
  
  
  
  

  render() {
    const { quantity } = this.props;
    return (
      <div className='delete-button-basket mt-5'>
        <form>
        <input
          type="number"
          step={1}
          max={10}
          defaultValue={quantity}
          name="quantityNew"
          className="quantity-field border-2 text-center mr-2 "
          ref="quantityNew"
/>

          <button type="button" className="btn btn-success mp-5" onClick={this.onHandleUpdateClick}>
            Update quantity
          </button>
        </form>
        <button type="button" className="btn btn-success mt-2" onClick={this.onHandleClick}>
          <i className="fa fa-trash" />
        </button>
      </div>
    )
  }
}

export default BasketGameCardButton;

