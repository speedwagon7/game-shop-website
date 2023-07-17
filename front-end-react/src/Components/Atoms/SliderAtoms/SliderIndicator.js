import React from "react";

const SliderIndicator = ({className, slideNumber, aria_current}) => {
    return(
        <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            className={className}
            data-bs-slide-to={slideNumber}
            aria-current={aria_current}
          ></button>
    )

}
export default SliderIndicator;