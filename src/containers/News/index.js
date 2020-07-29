import React, { Component } from "react";
import { connect } from "react-redux";
import NewsSlider from "../../components/UI/Slider/NewsSlider/index";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import NewsCard from "../../components/UI/Card/NewsCard/CardUI";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import img from "./img1.jpeg";
import indexStyle from "./index-style.css";

class News extends Component {
  render() {
    return (
      <div>
        {/* <NewsSlider /> */}
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
            <iframe
              src={
                "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcce.mongolia%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              }
              width="300px"
              height="500px"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="cce_mongolia"
              options={{ height: 350, width: 300 }}
            />
            {/* <FacebookShareButton
              url={"https://www.facebook.com/cce.mongolia/"}
              quote={"bla2"}
            >
              <FacebookIcon size={"2.5rem"} />
            </FacebookShareButton> */}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
