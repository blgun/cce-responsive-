import React from "react";
import newsCard from "./style.css";

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
        <img
          src={props.imgsrc}
          alt="image1"
          className={newsCard.newsCardImgTop}
        />
      </div>
      <div className={newsCard.newsCardBody}>
        <h4>News Title</h4>
        <p className={newsCard.newsCardText}>Some texts are shown here</p>
        <div>
          <a href="/newsDetail" className={newsCard.newsCardButton}>
            Read
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
