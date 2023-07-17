import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// useHistory
export const CheckoutPaymentCard = () => {
  // const history = useHistory();

  const handleCheckout = () => {
    axios.delete("http://localhost:8088/api/v1/basket/deleteAllGamesInBasket").then((res) => {
      console.log(res);
      // handle the response from the server here
    }).catch((err) => {
      console.log(err);
      // handle errors here
    });
  };
  
  return (
    <div className="card text-start">
      <h4 className="card-header">Checkout</h4>
      <div className="card-body">
        <div className="row">
          <div className="card p-3">
            <form>
              <h6 className="text-uppercase">Payment details</h6>
              <div className="inputbox mt-3">
                {" "}
                <input
                  type="text"
                  className="form-control"
                  required="required"
                />{" "}
                <span>Name on card</span>{" "}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      required="required"
                    />{" "}
                    <i className="fa fa-credit-card" /> <span>Card Number</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-row">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Expiry</span>{" "}
                    </div>
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>CVV</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Billing Address</h6>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Street Address</span>{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>City</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>State/Province</span>{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Post Code</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <Link to={"/Confirmation"} >
              <button
                className="btn btn-outline-success"
                onClick={handleCheckout}
              >
                Checkout
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  }