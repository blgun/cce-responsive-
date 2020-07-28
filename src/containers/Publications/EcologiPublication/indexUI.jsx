import React from "react";
import book from "../CEPublication/book.jpg";

const index = (props) => {
  return (
    <div className="Ecopublication">
      <div className="Ecopublicationoverflow">
        <img src={book} alt="image1" className="Ecopublication-img-top" />
      </div>
      <div className="Ecopublication-body text-dark">
        <h4 className="Ecopublication-title">Civic Education3</h4>
        <p className="Ecopublication-text text-secondary">
          Civic Education3:Textbook for the 3rd grade of-year general education
          school/Narangerel.R.,And others;Ed Tuya.U.Purev.O-UB 2011
        </p>
        <a href="#" className="Ecopublication btn btn-outline-success">
          Reading
        </a>
      </div>
    </div>
  );
};

export default index;
