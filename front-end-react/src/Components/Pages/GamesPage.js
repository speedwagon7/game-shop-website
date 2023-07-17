import React from "react";
import Slider from "../Organisms/GamePageOrganisms/Slider";
import Games from "../Organisms/Games"

const GamesPage = () => {
  return (
    <div>
      <div><div className="slider-header-container">
        <h2 className="slider-header">
          New Releases
        </h2>
      </div>
        <Slider />
        </div>
        <div className="games-header-container">
        <h2 className="games-header">
          Best Sellers
        </h2>
      </div>
        <div >
        <Games/>
      </div>
      </div>
 
  );
};

export default GamesPage;