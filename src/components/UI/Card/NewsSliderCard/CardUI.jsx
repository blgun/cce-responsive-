import React from "react";
import wtf from "./slider1.jpg"

const Card = (props) => {
  return (
    <div className="newsSliderCard text-center shadow">
      <div>
        <img src={wtf} alt="image1" className="newsSliderCard-img-top" />
      </div>
      <div className="newsSliderCard-body text-dark">
        <h4 className="newsSliderCard-title">News Title</h4>
        <p className="newsSliderCard-text text-secondary">Some texts are shown here</p>
      </div>
    </div>
  );
};

export default Card;
