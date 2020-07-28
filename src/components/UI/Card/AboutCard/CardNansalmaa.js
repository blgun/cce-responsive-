import React, { Component } from "react";

class CardNansalmaa extends Component {
  render() {
    return (
      <div className="aboutCard text-center shadow">
        <div>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
        </div>
        <div>
          <div style={{ textAlign: "left", padding: "0 10px" }}>
            <h2 style={{ fontWeight: "bold" }}>Mrs. Nansalmaa Purevdorj</h2>
            <h4>Member of the board of directors</h4>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ textAlign: "left", padding: "0 10px" }}>
              <b>2002-2006</b> Businesswoman Graduated from the National
              University of Mongolia with LLM
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardNansalmaa;
