import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <nav role="navigation" className={styles.navigation}>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Browse</Link>
      </li>
    </ul>
  </nav>
);
