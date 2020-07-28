import React, { Component } from "react";
import Partners from "./CardUI";

class Card extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <Partners />
          <Partners />
          <Partners />
          <Partners />
        </div>
        <div style={{ display: "flex" }}>
          <Partners />
          <Partners />
          <Partners />
          <Partners />
        </div>
        <div style={{ display: "flex" }}>
          <Partners />
          <Partners />
          <Partners />
          <Partners />
        </div>
      </div>
    );
  }
}

export default Card;
