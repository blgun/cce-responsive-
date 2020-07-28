import React, { Component } from "react";
import Iframe from "react-iframe";

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
      <div key={number} style={{ width: "25%" }}>
        <Iframe url={number} />
      </div>
    ));
    return <div style={{ display: "flex" }}>{listItems}</div>;
  };
  render() {
    const numbers = [
      "https://www.youtube.com/embed/3gdPFH-1FIo",
      "https://www.youtube.com/embed/byaq3qrSd4",
      "https://www.youtube.com/embed/HjWMhflKgFk&t=3s",
      "https://www.youtube.com/embed/s2x0-Mf79dE",
    ];
    return (
      <div>
        <h2>Видео</h2>
        <hr />
        <this.addItem numbers={numbers} />
      </div>
    );
  }
}

export default Video;
