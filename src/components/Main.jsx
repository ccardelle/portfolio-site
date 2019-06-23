import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="container main-container">
        <Container>
          <h2> Main</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget faucibus quam. Morbi cursus auctor nulla, vel viverra urna
            elementum nec. Sed pellentesque iaculis metus, vitae tincidunt velit
            porttitor non. Aliquam lobortis eu dui eget ornare. Nam ac aliquam
            sapien, vel eleifend quam. Proin vitae volutpat eros. Vivamus elit
            quam, fermentum ut velit id, tempus ullamcorper tortor. Nunc elit
            est, dictum in felis a, fermentum volutpat mi. Sed interdum
            facilisis neque, quis cursus elit pulvinar in. Suspendisse vitae
            metus eu libero sollicitudin varius. Proin molestie lorem mi, ac
            lobortis quam vehicula nec. Nullam rhoncus rutrum nisi in mollis.
            Nulla a ipsum ullamcorper, viverra urna accumsan, maximus magna.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus mi elit, efficitur eu sem placerat,
            venenatis maximus orci. Integer luctus velit finibus tempus
            ullamcorper.
          </p>
        </Container>
      </div>
    );
  }
}

export default Main;
