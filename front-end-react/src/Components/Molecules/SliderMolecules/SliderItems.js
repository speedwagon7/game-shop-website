import React from "react";
import SliderItem from "../../Atoms/SliderAtoms/SliderItem";

const SliderItems = () => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <SliderItem
          imgPath="images/slider-sws.png"
          alt="Star Wars Jedi: Survivor"
        />
      </div>
      <div className="carousel-item">
        <SliderItem imgPath="images/slider-re4.png" alt="Resident Evil 4" />
      </div>
      <div className="carousel-item">
        <SliderItem
          imgPath="images/slider-tlou.png"
          alt="The Last Of Us: Part 1"
        />
      </div>
    </div>
  );
};
export default SliderItems
