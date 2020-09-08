import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../components/layout";
import "@browniebroke/gatsby-image-gallery/dist/style.css";
import Hero from "../components/hero";

class BlogPostTemplate extends React.Component {
  render() {
    const social = get(this.props, "data.contentfulSocial");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${social.name} | ${siteTitle}`} />
        <Hero title={social.name} subtitle={social.provider} />
        <div class="container">
          <div class="columns container is-centered">
            <div class="column is-one-third">
              <div class="card-image" style={{ maxWidth: "400px" }}>
                <Img
                  aspectRatio="1"
                  fluid={social.coverImage.fluid}
                  alt="Placeholder image"
                />
              </div>
            </div>
            <div class="column is-one-third">
              <h2>Coming soon</h2>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query bySlug($slug: String!) {
    contentfulSocial(slug: { eq: $slug }) {
      name
      shortDescription
      coverImage {
        fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: CROP) {
          ...GatsbyContentfulFluid
        }
      }
      minParticipants
      maxParticipants
      provider
      slug
    }
  }
`;
