import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import gitubIcon from "../media/github_icon.svg";
import linkedInIcon from "../media/linkedin_icon.svg";

class Main extends Component {
  state = {};
  render() {
    return (
      <a id="home">
        <div className="container main-container">
          <Container>
            <h2> Christian Cardelle </h2>
            <p>Web Developer</p>
            <a href="https://github.com/ccardelle">
              <img className="social-icons" src={gitubIcon} alt="" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/ccardelle/">
              <img className="social-icons" src={linkedInIcon} alt="" />
            </a>
          </Container>
        </div>
      </a>
    );
  }
}

export default Main;
