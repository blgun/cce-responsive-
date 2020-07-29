import React, { Component } from "react";
import CE from "./indexUI";

import publication from "./publication.css";
import { FaUserAlt } from "react-icons/fa";

class index extends Component {
  render() {
    return (
      <div>
        <h1 className={ publication .CePrimary}>
          <i class="fa fa-user" aria-hidden="true"></i>
          Civic Education Publication
        </h1>
        <hr className={ publication .CeHr} />

        <div className={ publication.CeResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
        <div className={ publication.CeResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
        <div className={ publication.CeResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
      </div>
    );
  }
}

export default index;
