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
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "5%",
            width: "100%",
          }}
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
