import React from "react";
import SliderIndicators from "../../Molecules/SliderMolecules/SliderIndicators";
import SliderItems from "../../Molecules/SliderMolecules/SliderItems";


const Slider = () => {
  return (
    <div className="carousel-div">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <SliderIndicators />
        <SliderItems />

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        
      </div>
    </div>
  );
};
export default Slider;
