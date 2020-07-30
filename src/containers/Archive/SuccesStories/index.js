import React, { Component } from "react";
import ArchiveSuccessStories from "../../../components/UI/Card/ArchiveSuccessStories/Card";
import SocialSection from "../../../components/UI/Social/Social";
import imgss from "../../../assets/images/Archives/SuccessStories/ss.png";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";
import style from "./style.css";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyText: ["fadsf", "adsf", "fdsaf", "fadsfjugfad", "sasfdasf"],
    };
  }
  render() {
    return (
      <div>
        <MenuTitle title={"Succes Stories"} />
        <div className={style.succesStoriesSection}>
          <div className={style.succesStoriesContainer}>
            <ArchiveSuccessStories
              imgsrc={imgss}
              text={this.state.storyText[0]}
            />
            <ArchiveSuccessStories
              imgsrc={imgss}
              text={this.state.storyText[1]}
            />
            <ArchiveSuccessStories
              imgsrc={imgss}
              text={this.state.storyText[2]}
            />
            <ArchiveSuccessStories
              imgsrc={imgss}
              text={this.state.storyText[3]}
            />
            <ArchiveSuccessStories
              imgsrc={imgss}
              text={this.state.storyText[4]}
            />
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
