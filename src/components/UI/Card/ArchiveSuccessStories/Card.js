import React from "react";

const Card = (props) => {
  return (
    <div className={"archiveSuccessStories text-center shadow"}>
      <div className="overflow">
        <img
          src={props.imgsrc}
          alt="image1"
          className="archiveSuccessStories-img-top"
        />
      </div>
      <div className="archiveSuccessStories-body text-dark">
        <h4 className="archiveSuccessStories-title">News Title</h4>
        <p>{new Date().toString()}</p>
      </div>
    </div>
  );
};

export default Card;
