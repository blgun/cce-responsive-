import React, { Component } from "react";
import style from "./style.css";

class CardSainbayar extends Component {
  render() {
    return (
      <div className={style.AboutCard}>
        <div className={style.AboutCardImgContainer}>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
        </div>
        <div className={style.AboutCardInfoContainer}>
          <div className={style.AboutCardInfoName}>
            <h2 style={{ fontWeight: "bold" }}>Mrs. Uyanda Sainbayar</h2>
            <h4>Member of the board of directors</h4>
          </div>
          <div className={style.AboutCardInfoText}>
            <div className={style.AboutCardInfoTextleftright}>
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
