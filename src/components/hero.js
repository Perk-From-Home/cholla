import React, { Children } from "react";
import Img from "gatsby-image";
import lightHero from "../assets/images/photo-1545529468-42764ef8c85f.jpeg";
import styles from "./hero.module.css";
// import Button from "../components/Button";
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
