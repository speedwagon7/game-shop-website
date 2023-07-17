import React, { Component } from "react";
import axios from "axios";

class BasketCheckoutCard extends Component {
  state = {
    total: null
  }

  componentDidMount(){
    axios.get("http://localhost:8088/api/v1/basket/total").then((res) => {
      const total = res.data;
      this.setState({ total });
    }).catch(error => {
      console.error('Error fetching total:', error);
    });
  }

  render() {
    const { total } = this.state;
    return (
      <div className="card">
        <div className='card-header'>
          Basket
        </div>
        <div className="card-body">
          {total !== null ? (
            <>
              <h5 className="card-title">£{total.toFixed(2)}</h5>
              <p className="card-text">Inc. VAT</p>
              <a href="/Checkout" className="btn btn-success">
                Checkout
              </a>
            </>
          ) : (
            <p>Loading total...</p>
          )}
        </div>
      </div>
    );
  }
}

export default BasketCheckoutCard;
