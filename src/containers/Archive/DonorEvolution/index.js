import React, { Component } from "react";
import ArchiveDonorEvolution from "../../../components/UI/Card/ArchiveDonorEvolution/Card";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";
import SocialSection from "../../../components/UI/Social/Social";
import imgss from "../../../assets/images/Archives/DonorsEvolution/imgss.png";
import style from "./style.css";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MenuTitle title={"Feedback from Beneficiareies"} />
        <div className={style.DonorEvolutionSection}>
          <div className={style.DonorEvolutionContainer}>
            <ArchiveDonorEvolution imgsrc={imgss} />
            <ArchiveDonorEvolution imgsrc={imgss} />
            <ArchiveDonorEvolution imgsrc={imgss} />
            <ArchiveDonorEvolution imgsrc={imgss} />
            <ArchiveDonorEvolution imgsrc={imgss} />
          </div>
          <div className={style.socialContainer}>
            <SocialSection />
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
