import React, { Component } from "react";
import { Container } from "react-bootstrap";
class About extends Component {
  state = {};
  render() {
    return (
      <a id="about">
        <div className="container about-container">
          <Container>
            <h2 className="about-title-text"> About Me </h2>
            <p>I love computers and technology</p>
            <p>
              Coding was always fun for me. It has been a passion of mine for as
              long as I can remember. Recently, I was given the opportunity to
              finally follow my dream and make a career out of it. This page is
              just the beggining. Currently working on several projects and
              expanding my knowledge daily.{" "}
            </p>
            <br />
            <p>Skills:</p>
            <ul id="skills-container">
              {" "}
              <li id="skills-item">HTML</li>
              <li id="skills-item">CSS</li>
              <li id="skills-item">JavaScript</li>
              <li id="skills-item">React</li>
              <li id="skills-item">Express</li>
              <li id="skills-item">MongoDB</li>
              <li id="skills-item">C++</li>
              <li id="skills-item">Java</li>
            </ul>
            <p />
          </Container>
        </div>
      </a>
    );
  }
}

export default About;
