import React from "react";
import BasketCheckoutCard from "../Organisms/BasketOrganisms/BasketCheckoutCard";
import BasketGames from "../Organisms/BasketOrganisms/BasketGames";

const BasketPage = () => {
  return (
    <div className="basket-page-container text-center m-4">
      <div className="row">
        <div className="col ">
          <div className="basket-checkout-card-container">
            <BasketCheckoutCard />
          </div>
          <div className="col"></div>
          <div className="basket-game-card-container ">
            <BasketGames/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasketPage;
