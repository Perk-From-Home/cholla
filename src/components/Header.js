import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "gatsby";

const Logo = () => (
  <Link to="/">
    {" "}
    <img src={logo} alt={logo} style={{ maxHeight: "200px" }} />
  </Link>
);

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
