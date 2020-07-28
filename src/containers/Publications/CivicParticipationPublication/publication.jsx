import React, { Component } from "react";
import CE from "./indexUI";
import { FaUserAlt } from "react-icons/fa";

class publication extends Component {
  render() {
    return (
      <div>
        <h1 className="CivicparticipationPrimary">
          <i class="fa fa-user" aria-hidden="true"></i>
          Civic Education Publication
        </h1>
        <hr className="CivicparticipationHr" />

        <div style={{ display: "flex" }}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
        <div style={{ display: "flex" }}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
        <div style={{ display: "flex" }}>
          <CE />
          <CE />
          <CE />
          <CE />
        </div>
      </div>
    );
  }
}

export default  publication;
