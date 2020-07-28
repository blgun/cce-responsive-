import React, { Component } from "react";
import CE from "./indexUI";
import { FaUserAlt } from "react-icons/fa";

class youth extends Component {
  render() {
    return (
      <div>
        <h1 className="YouthDevelopmentPublicationsPrimary">
          <i class="fa fa-user" aria-hidden="true"></i>
          Youth Development Publications
        </h1>
        <hr className="YouthDevelopmentPublicationspublicationHr" />

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

export default youth ;
