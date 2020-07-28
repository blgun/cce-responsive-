import React, { Component } from "react";

class CardSainbayar extends Component {
  render() {
    return (
      <div className="aboutCard text-center shadow">
        <div>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
        </div>
        <div>
          <div style={{ textAlign: "left", padding: "0 10px" }}>
            <h2 style={{ fontWeight: "bold" }}>Mrs. Uyanda Sainbayar</h2>
            <h4>Member of the board of directors</h4>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ textAlign: "left", padding: "0 10px" }}>
              <b>2002-2006</b> Graduated from the National University of
              Mongolia with Bachelor of Arts Degree in History and History
              Teacher She is one of the contributing authors of Civic Education
              textbooks of General Educations School of Mongolia
              <br />
              <b>2006-current</b> Teacher of History and Civic Education at the
              6th Secondary School of Ulaanbaatar, Mongolia <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardSainbayar;
