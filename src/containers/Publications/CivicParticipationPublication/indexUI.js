import React from "react";
import book from "../CEPublication/book.jpg";

const index = (props) => {
  return (
    <div className="Ce">
      <div className="overflow">
        <img src={book} alt="image1" className="Ce-img-top" />
      </div>
      <div className="Ce-body text-dark">
        <h4 className="Ce-title">Civic Education3</h4>
        <p className="Ce-text text-secondary">
          Civic Education3:Textbook for the 3rd grade of-year general education
          school/Narangerel.R.,And others;Ed Tuya.U.Purev.O-UB 2011
        </p>
        <a href="#" className="btn btn-outline-success">
          Reading
        </a>
      </div>
    </div>
  );
};

export default index;
