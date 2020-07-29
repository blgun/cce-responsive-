import React from "react";
import book from "../CEPublication/book.jpg";
import publication from "./Ecologi.css"
const index = (props) => {
  return (
    <div className={ publication .ecologi}>
      <div className={ publication .ecologioverflow}>
        <img src={book} alt="image1" className={publication.ecologiimgtop} />
      </div>
      <div className={publication.ecologibodytextdark}>
        <h4 className={publication.ecologititle}>Ecological Education Publication</h4>
        <p className={publication.ecologitexttextsecondary}>
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
