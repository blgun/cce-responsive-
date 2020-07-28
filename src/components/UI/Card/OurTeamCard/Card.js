import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="ourMemberCard text-center shadow">
        <div>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
        </div>
        <div>
          <div style={{ textAlign: "center", padding: "0 10px" }}>
            <h3 style={{ fontWeight: "bold" }}>{this.props.member.name}</h3>
            <h5 style={{ color: "black" }}>{this.props.member.job}</h5>
          </div>
          {this.props.member.cv ? (
            <div style={{ textAlign: "left", padding: "15px" }}>
              {this.props.member.cv.year ? (
                <b>{this.props.member.cv.year[0]} </b>
              ) : (
                ""
              )}
              {this.props.member.cv.text[0]}
              <br />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Card;
