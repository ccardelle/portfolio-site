import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import elaidanPic from "../media/Elaidan_Screenshot.png";
import billifyPic from "../media/Billify_Screenshot.png";
import midiBankPic from "../media/MidiBank_Screenshot.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <a id="proj">
        <div>
          <div className=" projects-container">
            <h2 className="projects-title-text">Recent Projects</h2>
            <br />
            <Carousel className="projects-carousel">
              <Carousel.Item className="">
                <a href="https://ccardelle.github.io/elaidan_game_project/">
                  <img
                    className="d-block w-100 projects-carousel-img"
                    src={elaidanPic}
                    alt="Elaidan Screenshot"
                  />
                </a>
                <Carousel.Caption className="projects-carousel-caption">
                  <h3>Elaidan</h3>
                  <p>Rythym-based Jumper Game</p>
                  <p>HTML, CSS, JavaScript, PhaserJS</p>
                  {/* <a href="https://ccardelle.github.io/elaidan_game_project/">
                    <p>https://ccardelle.github.io/elaidan_game_project</p>
                  </a> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="">
                <a href="https://billify-app.herokuapp.com/">
                  {" "}
                  <img
                    className="d-block w-100 projects-carousel-img"
                    src={billifyPic}
                    alt="Billify Screenshot"
                  />{" "}
                </a>

                <Carousel.Caption className="projects-carousel-caption">
                  <h3>Billify</h3>
                  <p>Bill and Expense Tracking App</p>
                  <p>HTML, CSS, JavaScript, HandleBars, MongoDB</p>
                  {/* <a href="https://billify-app.herokuapp.com/">
                    <p>https://billify-app.herokuapp.com</p>
                  </a> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="">
                <a href="https://midibank.herokuapp.com/">
                  <img
                    className="d-block w-100 projects-carousel-img"
                    src={midiBankPic}
                    alt="MIDIBank Screenshot"
                  />
                </a>

                <Carousel.Caption className="projects-carousel-caption">
                  <h3>MIDIBank</h3>
                  <p>Music / MIDI Collaboration and Remixing</p>
                  <p>HTML, CSS, JavaScript, React.js, MongoDB, Amazon AWS</p>
                  {/* <a href="https://midibank.herokuapp.com/">
                    <p>https://midibank.herokuapp.com</p>
                  </a> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </a>
    );
  }
}

export default Projects;
