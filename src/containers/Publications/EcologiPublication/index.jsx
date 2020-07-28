import React, { Component } from "react";
import CE from "./indexUI";
import { FaUserAlt } from "react-icons/fa";

class index extends Component {
  render() {
    return (
      <div>
        <h1 className="EcopublicationPrimary">
          <i class="fa fa-user" aria-hidden="true"></i>
          Ecological Education Publication
        </h1>
        <hr className="EcopublicationHr" />

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

export default index;
