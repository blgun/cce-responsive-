import React from "react";
const Card = (props) => {
  return (
    <div className="Partners">
      <div className="overflow"></div>
      <div className="Partners-body text-dark">
        <h4 className="Partners-title">Center for Civic Education,USA</h4>
        <p className="Partners-text text-secondary">
          Project Description.Lorem ipsum dolor sit amet,consectetur adipiscing
          elit,sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.Ut enim ad minum veniam,quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore e
        </p>
        <a href="#" className="btn btn-outline-success">
          Reading
        </a>
      </div>
    </div>
  );
};

export default Card;
