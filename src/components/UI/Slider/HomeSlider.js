import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import homeSlider from "../../../assets/images/Home/homeSlider.png";
import classes from "./HomeSlider.css";

class HomeSlider extends Component {
  render() {
    return (
      <div>
        <Carousel className={classes.HomeSlider}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeSlider}
              alt="First slide"
              className={classes.HomeSliderImg}
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
              className={classes.HomeSliderImg}
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
              className={classes.HomeSliderImg}
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
