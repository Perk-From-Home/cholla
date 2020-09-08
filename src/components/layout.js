import React from "react";
import Container from "./container";
import Navigation from "./navigation";
import { Header } from "./Header";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <div
          class="columns is-vcentered is-centered"
          style={{ justifyContent: "space-between" }}
        >
          <Header />
          <Navigation />
        </div>
        {children}
      </Container>
    );
  }
}

export default Template;
