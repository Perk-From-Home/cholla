import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

const Logo = () => (
  <Link to="/">
    <div className={styles.logo} class="column is-6">
      <div style={{ textAlign: "center" }}>
        <img
          src={logo}
          alt={logo}
          style={{
            maxHeight: "200px",
            margin: "30px",
            float: "center",
          }}
        />
      </div>
    </div>
  </Link>
);

export const Header = () => <Logo />;
