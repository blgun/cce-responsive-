import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import homeSlider from "../../../assets/images/homeSlider.png";
import classes from "./HomeSlider.css";

class HomeSlider extends Component {
  render() {
    return (
      <div>
        <Carousel style={{ padding: "15px 0" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeSlider}
              alt="First slide"
              style={{ height: "550px", margin: "0" }}
            />
            <Carousel.Caption className={classes.HomeSliderTitle}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeSlider}
              alt="Third slide"
              style={{ height: "550px", margin: "0" }}
            />

            <Carousel.Caption className={classes.HomeSliderTitle}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeSlider}
              alt="Third slide"
              style={{ height: "550px", margin: "0" }}
            />

            <Carousel.Caption className={classes.HomeSliderTitle}>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default HomeSlider;
