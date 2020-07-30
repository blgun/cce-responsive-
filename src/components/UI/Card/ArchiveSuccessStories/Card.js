import React from "react";
import style from "./style.css";

const Card = (props) => {
  return (
    <div className={style.archiveSuccessStories}>
      <div className="overflow">
        <img
          src={props.imgsrc}
          alt="image1"
          className={style.archiveSuccessStoriesImgTop}
        />
      </div>
      <div className={style.archiveSuccessStoriesBody}>
        <p className={style.archiveSuccessStoriesText}>{props.text}</p>
        <span>{new Date().toString()}</span>
      </div>
    </div>
  );
};

export default Card;
