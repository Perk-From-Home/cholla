import React from "react";
import { Link } from "gatsby";

import "../pages/mystyles.scss";
import Img from "gatsby-image";

export default ({ social }) => {
  return (
    //TODO: link this to an individual, per-s
    <Link to={`/signup`}>
      <div
        class="card"
        style={{ maxWidth: "300px", margin: "0 auto", marginBottom: "3vh" }}
      >
        <div class="card-image">
          <Img
            aspectRatio="1"
            fluid={social.coverImage.fluid}
            alt="Placeholder image"
          />
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{social.name}</p>
              <p class="subtitle is-6 has-text-primary-dark">
                with {social.supplier.name}
              </p>
            </div>
          </div>
          <div class="content" style={{ minHeight: "3em" }}>
            {social.shortDescription}
          </div>
          <div class="content">
            <p class="has-text-weight-light">
              {social.minParticipants} - {social.maxParticipants} people{" "}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
