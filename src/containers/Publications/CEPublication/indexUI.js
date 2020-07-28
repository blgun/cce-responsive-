import React from "react";
import book from "../CEPublication/book.jpg";
import publication from "./publication.css"
const index = (props) => {
  return (
    <div className={ publication .Ce}>
      <div className={ publication .overflow}>
        <img src={book} alt="image1" className={publication.Ceimgtop} />
      </div>
      <div className={publication.Cebodytextdark}>
        <h4 className={publication.Cetitle}>Civic Education3</h4>
        <p className={publication.Cetexttextsecondary}>
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
