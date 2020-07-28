import React from "react";

const Card = (props) => {
  return (
    <div className={"archiveReportsCard text-center shadow"}>
      <div className="overflow">
        <img
          src={props.imgsrc}
          alt="image1"
          className="archiveReports-img-top"
        />
      </div>
      {/* <div className="archiveReports-body text-dark">
        <h4 className="archiveReports-title">News Title</h4>
        <p className="archiveReports-text text-secondary">
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
