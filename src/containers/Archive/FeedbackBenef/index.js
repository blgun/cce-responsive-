import React, { Component } from "react";
import ArchiveFeedback from "../../../components/UI/Card/ArchiveFeedback/Card";
import SocialSection from "../../../components/UI/Social/Social";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";
import imgss from "../../../assets/images/Archives/FeedbackBenef/imgss.png";
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
        <div className={style.FeedbackBenefSection}>
          <div className={style.FeedbackBenefContainer}>
            <ArchiveFeedback imgsrc={imgss} />
            <ArchiveFeedback imgsrc={imgss} />
            <ArchiveFeedback imgsrc={imgss} />
            <ArchiveFeedback imgsrc={imgss} />
            <ArchiveFeedback imgsrc={imgss} />
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
