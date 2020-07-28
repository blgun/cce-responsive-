import React from "react";

const Card = (props) => {
  return (
    <div className={"archiveDonorEvolution text-center shadow"}>
      <div className="overflow">
        <img
          src={props.imgsrc}
          alt="image1"
          className="archiveDonorEvolution-img-top"
        />
      </div>
      {/* <div className="archiveDonorEvolution-body text-dark">
        <h4 className="archiveDonorEvolution-title">News Title</h4>
        <p className="archiveDonorEvolution-text text-secondary">
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
