import React, { Component } from "react";
import CE from "./indexUI";
import { FaUserAlt } from "react-icons/fa";

class index extends Component {
  render() {
    return (
      <div>
        <h1 className="Primary">
          <i class="fa fa-user" aria-hidden="true"></i>
          Civic Education Publication
        </h1>
        <hr className="Hr" />

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
