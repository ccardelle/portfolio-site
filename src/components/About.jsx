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
            <ul>
              {" "}
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>C++</li>
              <li>Java</li>
            </ul>
            <p />
          </Container>
        </div>
      </a>
    );
  }
}

export default About;
