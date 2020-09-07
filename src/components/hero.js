import React from "react";
import Img from "gatsby-image";
import lightHero from "../assets/images/photo-1545529468-42764ef8c85f.jpeg";
import styles from "./hero.module.css";

export default ({ data }) => (
  <div className={styles.hero}>
    <img className={styles.heroImage} alt="hero-image" src={lightHero} />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>
        Social experiences for distributed teams
      </h3>
      {/* <p className={styles.heroTitle}>{data.title}</p> */}
      {/* <p>{data.shortBio.shortBio}</p> */}
    </div>
  </div>
);
