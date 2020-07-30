import React, { Component } from "react";
import NewsCard from "../../components/UI/Card/NewsCard/CardUI";
import homeNewsStyle from "./homeNewsStyle.css";
import imgss from "../../assets/images/News/imgss.jpg";

class News extends Component {
  render() {
    return (
      <div>
        <h3 className={homeNewsStyle.homeNewsStyleContainerTitle}>News</h3>
        <hr />
        <div className={homeNewsStyle.homeNewsStyleContainer}>
          <NewsCard styleWidth="home" imgsrc={imgss} />
          <NewsCard styleWidth="home" imgsrc={imgss} />
          <NewsCard styleWidth="home" imgsrc={imgss} />
          <NewsCard styleWidth="home" imgsrc={imgss} />
        </div>
      </div>
    );
  }
}

export default News;
