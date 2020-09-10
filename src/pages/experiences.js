import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

const FeaturedSocials = ({ socials }) => (
  <div className="columns row">
    {socials.map(({ node }) => {
      return (
        <div className="column">
          <ArticlePreview social={node} />
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
          <Hero title="All Experiences"></Hero>
          <FeaturedSocials socials={socials} />
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query ExperiencesQuery {
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
          supplier {
	    name
	  }
          slug
        }
      }
    }
  }
`;
