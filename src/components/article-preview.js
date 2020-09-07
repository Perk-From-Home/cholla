import React from "react";
import { Link } from "gatsby";

import "../pages/mystyles.scss";
import Img from "gatsby-image";

export default ({ perk }) => {
  return (
    <Link to={`/experiences/${perk.slug}`}>
      <div class="card" style={{ maxWidth: "300px", margin: "0 auto" }}>
        <div class="card-image">
          <Img
            aspectRatio="1"
            fluid={perk.coverImage.fluid}
            alt="Placeholder image"
          />
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{perk.name}</p>
              <p class="subtitle is-6 has-text-primary-dark">{perk.provider}</p>
            </div>
          </div>
          <div class="content" style={{ minHeight: "3em" }}>
            {perk.shortDescription}
          </div>
          <div class="content">
            <p class="has-text-weight-light">
              {perk.minParticipants} - {perk.maxParticipants} people{" "}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
