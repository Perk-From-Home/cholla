import React from "react";
import logo from "../assets/images/logo.png";

const Logo = () => <img src={logo} alt={logo} style={{ maxHeight: "200px" }} />;

export const Header = () => (
  <div
    style={{
      textAlign: "center",
      display: "flex",
      alignSelf: "flex-start",
    }}
  >
    <Logo />
  </div>
);
