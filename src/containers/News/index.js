import React, { Component } from "react";
import { connect } from "react-redux";
import NewsCard from "../../components/UI/Card/NewsCard/CardUI";
import MenuTitle from "../../components/UI/MenuTitle/MenuTitle";
import SocialSection from "../../components/UI/Social/Social";
import img from "../../assets/images/News/imgss.jpg";
import indexStyle from "./index-style.css";

class News extends Component {
  render() {
    return (
      <div>
        <MenuTitle title={"News"} />
        <div className={indexStyle.newsSection}>
          <div className={indexStyle.newsContainer}>
            <NewsCard styleWidth="news" imgsrc={img} />
            <NewsCard styleWidth="news" imgsrc={img} />
            <NewsCard styleWidth="news" imgsrc={img} />
            <NewsCard styleWidth="news" imgsrc={img} />
            <NewsCard styleWidth="news" imgsrc={img} />
            <NewsCard styleWidth="news" imgsrc={img} />
            <NewsCard styleWidth="news" imgsrc={img} />
            <NewsCard styleWidth="news" imgsrc={img} />
            <NewsCard styleWidth="news" imgsrc={img} />
          </div>
          <div className={indexStyle.socialContainer}>
            <SocialSection />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
