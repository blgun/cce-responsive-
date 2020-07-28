import React, { Component } from "react";
import ArchiveSuccessStories from "../../../components/UI/Card/ArchiveSuccessStories/Card";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: "1200px", margin: "auto" }}>
        <div style={{ display: "flex", padding: "15px 0" }}>
          <div style={{ display: "table", margin: "0 15px", width: "70%" }}>
            <ArchiveSuccessStories />
            <ArchiveSuccessStories />
            <ArchiveSuccessStories />
            <ArchiveSuccessStories />
            <ArchiveSuccessStories />
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

export default Report;
