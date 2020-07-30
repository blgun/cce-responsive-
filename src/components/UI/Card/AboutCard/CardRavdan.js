import React, { Component } from "react";
import style from "./style.css";

class CardRavdan extends Component {
  render() {
    return (
      <div className={style.AboutCard}>
        <div className={style.AboutCardImgContainer}>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
        </div>
        <div className={style.AboutCardInfoContainer}>
          <div className={style.AboutCardInfoName}>
            <h2 style={{ fontWeight: "bold" }}>Mr. Khatanbaatar Ravdan</h2>
            <h4>Chairman of the board of directors</h4>
          </div>
          <div className={style.AboutCardInfoText}>
            <div className={style.AboutCardInfoTextleftright}>
              <b>1972-1979</b> Graduated from the National University of
              Mongolia with Bachelors Degree in Mathematics <br />
              <b>1977-1990</b> Proffessor at the National University of Mongolia
              <br />
              <b>1990-1992</b> Member of the State Baga Khural of Mongolia(first
              democratic parliament) <br />
              <b>1992-1994</b> Deputy director of the Mongolian Social
              Democratic Party
            </div>
            <div className={style.AboutCardInfoTextleftright}>
              <b>1995-2000</b> Ambassador Extraordinary and Plenipotentiary of
              Mongolia to Hungary <br />
              <b>2001-2005</b> Ambassador at large of Mongolia and the People's
              Republic of China's Border, Commission <br />
              <b>2005-2009</b> Ambassador Extraordinary and Plenipotentiary of
              Mongolia to the Republic of Kazakhstan <br />
              <b>2010-current</b> Senior Officer at the Secretarist of the
              Parliament of Mongolia
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardRavdan;
