import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <div class="column is-6">
    <nav role="navigation" className={styles.navigation}>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/signup/">Experiences</Link>
        </li>
        <Link to="/signup" class="has-text-primary-dark">
          Sign Up
        </Link>
      </ul>
    </nav>
  </div>
);
