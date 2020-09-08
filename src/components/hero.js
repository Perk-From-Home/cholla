import React, { Children } from "react";
import styles from "./hero.module.css";
import "../pages/mystyles.scss";

const Hero = ({ title, subtitle, ...props }) => (
  <div className={styles.hero}>
    <div className={styles.heroImage}>
      <h3 className={styles.heroHeadline}>{title}</h3>
      <p class="is-size-4">{subtitle}</p>
      {props.children}
    </div>
  </div>
);

export default Hero;
