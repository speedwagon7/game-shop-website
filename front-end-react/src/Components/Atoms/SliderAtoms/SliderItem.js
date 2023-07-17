import React from "react";

const SliderItem = ({imgPath, alt, divClassName}) =>{
    return (
            <img
            src={imgPath}
            className="d-block w-100"
            alt={alt}
            />
    )
}
export default SliderItem
