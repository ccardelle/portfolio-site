import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import elaidanPic from "../media/Elaidan_Screenshot.png";
import billifyPic from "../media/Billify_Screenshot.png";
import midiBankPic from "../media/MidiBank_Screenshot.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="container main-container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={elaidanPic} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={billifyPic}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={midiBankPic}
              alt="Third slide"
            />

            <Carousel.Caption>
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

export default Projects;
