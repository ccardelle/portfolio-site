import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import elaidanPic from "../media/Elaidan_Screenshot.png";
import billifyPic from "../media/Billify_Screenshot.png";
import midiBankPic from "../media/MidiBank_Screenshot.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className="projects-title-text">Projects</h2>
        <div className=" projects-container">
          <br />
          <Carousel className="projects-carousel">
            <Carousel.Item className="">
              <img
                className="d-block w-100 projects-carousel-img"
                src={elaidanPic}
                alt="First slide"
              />
              <Carousel.Caption className="projects-carousel-caption">
                <h3>Elaidan</h3>
                <p>Rythym-based Jumper Game</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="">
              <img
                className="d-block w-100 projects-carousel-img"
                src={billifyPic}
                alt="Second slide"
              />

              <Carousel.Caption className="projects-carousel-caption">
                <h3>Billify</h3>
                <p>Bill and Expense Tracking App</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="">
              <img
                className="d-block w-100 projects-carousel-img"
                src={midiBankPic}
                alt="Third slide"
              />

              <Carousel.Caption className="projects-carousel-caption">
                <h3>MIDIBank</h3>
                <p>Music / MIDI Collaboration and Remixing</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Projects;
