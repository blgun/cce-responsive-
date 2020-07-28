import React, { Component } from "react";
import { Carousel } from "primereact/carousel";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import NewsSliderCard from "../../Card/NewsSliderCard/CardUI";

class NewsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [1, 2, 3, 4, 5, 6, 7, 8],
    };
    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  render() {
    return (
      <div style={{padding: "15px 0"}}>
        <Carousel
          value={this.state.news}
          itemTemplate={NewsSliderCard}
          numVisible={4}
          responsiveOptions={this.responsiveOptions}
        ></Carousel>
      </div>
    );
  }
}

export default NewsSlider;
