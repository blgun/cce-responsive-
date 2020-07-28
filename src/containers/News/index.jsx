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

class News extends Component {
  render() {
    return (
      <div style={{ width: "1200px", margin: "0 auto" }}>
        <NewsSlider />
        <div style={{ display: "flex", padding: "15px 0" }}>
          <div style={{ display: "table", margin: "0 15px", width: "70%" }}>
            <NewsCard styleWidth="news" />
            <NewsCard styleWidth="news" />
            <NewsCard styleWidth="news" />
            <NewsCard styleWidth="news" />
            <NewsCard styleWidth="news" />
            <NewsCard styleWidth="news" />
          </div>
          <div style={{ width: "30%" }}>
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
