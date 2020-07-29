import React, { Component } from "react";
import CE from "./indexUI";

import publication from "./publication.css";
import { FaUserAlt } from "react-icons/fa";

class Publication extends Component {
  render() {
    return (
      <div>
        <h1 className={ publication .ParticipatoryPrimary}>
          <i clapartiss="fa fa-user" aria-hidden="true"></i>
          Citizen Participatory Publication
        </h1>
        <hr className={ publication .ParticipatoryHr} />

        <div className={ publication.ParticipatoryResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
        <div className={ publication.ParticipatoryResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
        <div className={ publication.ParticipatoryResponsive}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
      </div>
    );
  }
}

export default Publication;
