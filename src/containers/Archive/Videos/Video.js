import React, { Component } from "react";
import Iframe from "react-iframe";
import style from "./style.css";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemNumber: {},
    };
  }
  addItem = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => (
      <div key={number} className={style.homeVideoContainerFrame}>
        <Iframe url={number} className={style.homeVideoContainerFrameVideo} />
      </div>
    ));
    return <div className={style.homeVideoContainer}>{listItems}</div>;
  };
  render() {
    const numbers = [
      "https://www.youtube.com/embed/3gdPFH-1FIo",
      "https://www.youtube.com/embed/HjWMhflKgFk",
      "https://www.youtube.com/embed/nq0xodtXgy4",
      "https://www.youtube.com/embed/s2x0-Mf79dE",
    ];
    return (
      <div>
        <h2 className={style.homeVideoContainerTitle}>Video</h2>
        <hr />
        <this.addItem numbers={numbers} />
      </div>
    );
  }
}

export default Video;
