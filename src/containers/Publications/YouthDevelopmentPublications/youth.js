import React, { Component } from "react";
import CE from "./indexUI";

import publication from "./publication.css";
import { FaUserAlt } from "react-icons/fa";

class Youth extends Component {
  render() {
    return (
      <div>
        <h1 className={ publication .youthPrimary}>
          <i class="fa fa-user" aria-hidden="true"></i>
          Youth Development Publication
        </h1>
        <hr className={ publication .youthHr} />

        <div className={ publication.youthResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
        <div className={ publication.youthResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
        <div className={ publication.youthResponsive}>
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
