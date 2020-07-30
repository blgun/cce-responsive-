import React from "react";
import style from "./style.css";

const Card = (props) => {
  return (
    <div className={style.archiveFeedBack}>
      <div className="overflow">
        <img
          src={props.imgsrc}
          alt="image1"
          className={style.archiveFeedBackImgTop}
        />
      </div>
    </div>
  );
};

export default Card;
