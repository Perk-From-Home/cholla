import React, { Children } from "react";
import styles from "./hero.module.css";
import "../pages/mystyles.scss";

const Hero = ({ title, subtitle, ...props }) => (
  <div className={styles.hero}>
    <div className={styles.heroImage}>
      <h1 className={styles.heroHeadline} class="is-size-2">
        {title}
      </h1>
      <p class="is-size-4">{subtitle}</p>
      {props.children}
    </div>
  </div>
);

export default Hero;
