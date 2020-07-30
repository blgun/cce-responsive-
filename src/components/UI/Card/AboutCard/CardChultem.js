import React, { Component } from "react";
import style from "./style.css";

class CardChultem extends Component {
  render() {
    return (
      <div className={style.AboutCard}>
        <div className={style.AboutCardImgContainer}>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
        </div>
        <div className={style.AboutCardInfoContainer}>
          <div className={style.AboutCardInfoName}>
            <h2 style={{ fontWeight: "bold" }}>Dr. Lkhagvajav Chultem</h2>
            <h4>Member of the board of directors</h4>
          </div>
          <div className={style.AboutCardInfoText}>
            <div className={style.AboutCardInfoTextleftright}>
              <b>1968-1973</b> Graduated the M.V.Lomonosov Moscow State
              University with Bachelor of Science Degree in Astonomy,
              Astrophysics Secretary General of the Board of Mongolian National
              Council "Intercosmos"
              <br />
              <b>1973-1976</b> Researcher at the Astronomy Research Center of
              the Mongolian Academy of Sciences <br />
              <b>1976-1980</b> Ph.D in Physics-Mathematics ("Solar Physics") at
              the National University of Mongolia <br />
              <b>1980-1990</b> Chief of the Astrospace Research sector of the
              Physics, Technological Institute of the Mongolian Academy of
              Sciences
            </div>
            <div className={style.AboutCardInfoTextleftright}>
              <b>1991-1995</b> Chief of the Astrospace Research sector of the
              Physics, Technological Institute of the Mongolian Academy of
              Sciences and project leader of the Astrophysics Research <br />
              <b>1996-2000</b> Member of the Cabinet, Minister of Education;
              Advisor to the Prime Minister of Mongolia; Advisor to the Speaker
              of the Parliament of Mongolia <br />
              <b>2002-2010</b> Director of the School of Physics and Electronics
              of the National University of Mongolia <br />
              <b>2004-current</b> Advisor to the Minister of Education and
              Science of Mongolia
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardChultem;
