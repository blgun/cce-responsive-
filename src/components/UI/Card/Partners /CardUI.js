import React from "react";
import style from "./Partners.css";

const Card = (props) => {
  return (
    <div className={style.Partners}>
      <div>
        <img src={props.imgsrc} alt="image1" className={style.PartnersImgTop} />
      </div>

      <div className={style.PartnersBody}>
        <h4 className={style.PartnersText}>{props.text}</h4>

      </div>
    </div>
  );
};

export default Card;
