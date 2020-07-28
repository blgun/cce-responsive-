import React, { Component } from "react";

class CardAdiya extends Component {
  render() {
    return (
      <div className="aboutCard text-center shadow">
        <div>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
        </div>
        <div>
          <div style={{ textAlign: "left", padding: "0 10px" }}>
            <h2 style={{ fontWeight: "bold" }}>Mr. Ganbaatar Adiya</h2>
            <h4>Member of the board of directors</h4>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ textAlign: "left", padding: "0 10px" }}>
              <b>1975-1980</b> Graduated from the University of Lodz with
              Bachelor of Science Degree in Mathematics
              <br />
              <b>1980-1990</b> Professor at the National University of Mongolia{" "}
              <br />
              <b>1992-2000</b> Member of the State Great Khural (Parliament of
              Mongolia)
            </div>
            <div style={{ textAlign: "left", padding: "0 10px" }}>
              <b>2000-2012</b> Leader of the Mongolian Social Democratic
              Movement; Deputy Chairman of the Mongolian Social Democratic
              Party; Editor-in-chief of the "Ug(Word)" Studio and the "Ug(Word)
              newspaper"
              <br />
              <b>2012-current</b> Ambassador Extroardinary and Plenipotentiary
              of Mongolia to the Republic of Poland <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardAdiya;
