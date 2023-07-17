import React from "react";
import SliderControlSpan from "../../Atoms/SliderAtoms/SliderControlSpan";

const SliderButton = ({classNameButton, classNameSpan, data_slide}) =>{
<button
          className={classNameButton}
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to={data_slide}
        >
        <SliderControlSpan className="carousel-control-prev-icon"/>
        <span className="visually-hidden">Next</span>
        </button>
}
export default SliderButton