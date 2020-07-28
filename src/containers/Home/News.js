import React, { Component } from "react";
import NewsCard from "../../components/UI/Card/NewsCard/CardUI";

class News extends Component {
  render() {
    return (
      <div>
        <h3>Мэдээ</h3>
        <hr />
        <div style={{ display: "flex" }}>
          <NewsCard styleWidth="home" />
          <NewsCard styleWidth="home" />
          <NewsCard styleWidth="home" />
          <NewsCard styleWidth="home" />
        </div>
      </div>
    );
  }
}

export default News;
