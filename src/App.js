import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
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

      <Projects />
    </div>
  );
}

export default App;
