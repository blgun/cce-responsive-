import React, { Component } from "react";
import style from "./style.css";

class CardNansalmaa extends Component {
  render() {
    return (
      <div className={style.AboutCard}>
        <div className={style.AboutCardImgContainer}>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
        </div>
        <div className={style.AboutCardInfoContainer}>
          <div className={style.AboutCardInfoName}>
            <h2 style={{ fontWeight: "bold" }}>Mrs. Nansalmaa Purevdorj</h2>
            <h4>Member of the board of directors</h4>
          </div>
          <div className={style.AboutCardInfoText}>
            <div className={style.AboutCardInfoTextleftright}>
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
