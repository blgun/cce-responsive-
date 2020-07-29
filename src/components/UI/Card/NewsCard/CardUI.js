import React from "react";
import newsCard from "./card-style.css";

const Card = (props) => {
  return (
    <div
      className={
        props.styleWidth === "home"
          ? newsCard.newsCardHome
          : newsCard.newsCardNews
        //   ? "newsCardHome text-center shadow"
        //   : "newsCardNews text-center shadow"
      }
    >
      <div className="overflow">
        <img src={props.imgsrc} alt="image1" className={newsCard.newsCardImgTop} />
      </div>
      <div className="newsCard-body text-dark">
        <h4 className="newsCard-title">News Title</h4>
        <p className="newsCard-text text-secondary">
          Some texts are shown here
        </p>
        <a href="/newsDetail" className="btn btn-primary">
          Read
        </a>
      </div>
    </div>
  );
};

export default Card;
