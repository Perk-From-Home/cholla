import React, { Children } from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import Link from "gatsby-image";

const FeaturedSocials = ({ socials }) => (
  <div className="columns row">
    {socials.map(({ node }) => {
      return (
        <div className="column">
          <ArticlePreview perk={node} />
        </div>
      );
    })}
  </div>
);

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const socials = get(this, "props.data.allContentfulSocial.edges");
    console.log(socials);
    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <Hero
            title="Social experiences for distributed teams"
            subtitle="Book amazing team-building events which your employees can enjoy from"
          >
            <button class="button is-primary mt-5 has-text-weight-semibold">
              Join the club
            </button>
          </Hero>
          <div className="wrapper">
            <h2 className="section-headline">Featured experiences</h2>
            <FeaturedSocials socials={socials} />
          </div>
          <div className="wrapper">
            <h2 className="section-headline">Why Cholla?</h2>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulSocial(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
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
        }
      }
    }
  }
`;
