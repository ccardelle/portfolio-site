import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar className="page-navbar" expand="lg">
        <Navbar.Brand href="#home">Cardelle</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Main</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Main />

      <Projects />

      <About />
    </div>
  );
}

export default App;
