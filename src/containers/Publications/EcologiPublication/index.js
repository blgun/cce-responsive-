import React, { Component } from "react";
import CE from "./indexUI";

import publication from "./Ecologi.css";
import { FaUserAlt } from "react-icons/fa";

class Youth extends Component {
  render() {
    return (
      <div>
        <h1 className={ publication .ecologiPrimary}>
          <i class="fa fa-user" aria-hidden="true"></i>
          Ecological Education Publications
        </h1>
        <hr className={ publication .ecologiHr} />

        <div className={ publication.ecologiResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
        <div className={ publication.ecologiResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
        <div className={ publication.ecologiResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
      </div>
    );
  }
}

export default Youth;
