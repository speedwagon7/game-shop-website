import React from "react";
import SliderIndicator from "../../Atoms/SliderAtoms/SliderIndicator";

const SliderIndicators = () =>{
    return (
        <div className="carousel-indicators">
          <SliderIndicator className="active" aria_current="true" slideNumber="0"/>
          <SliderIndicator slideNumber="1"/>
          <SliderIndicator slideNumber="2"/>
        </div>
    )
}
export default SliderIndicators