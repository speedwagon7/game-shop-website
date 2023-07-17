import React from "react";
import CheckoutBasketCard from "../Organisms/CheckoutOrganisms/CheckoutBasketCard"
import { CheckoutPaymentCard } from "../Organisms/CheckoutOrganisms/CheckoutPaymentCard";

const CheckoutPage = () => {
  return (
    <div className="basket-page-container text-center m-4">
      <div className="row">
        <div className="col">
          <div className="basket-checkout-card-container ">
            <CheckoutBasketCard/>
          </div>
          <div className="col"></div>
          <div className="basket-game-card-container">
            <CheckoutPaymentCard/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;