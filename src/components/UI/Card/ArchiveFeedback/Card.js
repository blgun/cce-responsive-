import React from "react";

const Card = (props) => {
  return (
    <div className={"archiveFeedback text-center shadow"}>
      <div className="overflow">
        <img
          src={props.imgsrc}
          alt="image1"
          className="archiveFeedback-img-top"
        />
      </div>
      {/* <div className="archiveFeedback-body text-dark">
        <h4 className="archiveFeedback-title">News Title</h4>
        <p className="archiveFeedback-text text-secondary">
          Some texts are shown here
        </p>
        <a href="/newsDetail" className="btn btn-primary">
          Read
        </a>
      </div> */}
    </div>
  );
};

export default Card;
