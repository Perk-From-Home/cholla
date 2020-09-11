import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import { graphql, Link } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

const CarouselUI = ({ children }) => <div>{children}</div>;
const Carousel = makeCarousel(CarouselUI);

const FeaturedSocials = ({ socials }) => (
  <div style={{ position: "relative" }}>
    <Carousel defaultWait={4000} maxTurns={1000}>
      {socials.map(({ node }) => {
        return (
          <Slide left>
            <ArticlePreview social={node} />
          </Slide>
        );
      })}
    </Carousel>
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
            subtitle="Book amazing team-building events your employees can enjoy from their own homes"
          >
            <Link to="/signup">
              <button class="button is-primary is-large mt-5 has-text-weight-semibold">
                Join the club
              </button>
            </Link>
          </Hero>
          <div
            className="wrapper"
            style={{
              width: "calc(100% - 10vmin)",
              margin: "0 auto",
              padding: "5vmin 0",
            }}
          >
            <h2
              className="section-headline"
              style={{
                borderBottom: " 1px solid #ddd",
                padding: "0 0 0.4em 0",
                margin: "0 0 5vmin 0",
              }}
              class="is-size-3 pb-5"
            >
              Featured experiences
            </h2>
            <FeaturedSocials socials={socials} />
          </div>
          {/* <div className="wrapper">
            <h2 className="section-headline">Why Cholla?</h2>
          </div> */}
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
            fluid(maxWidth: 6000, maxHeight: 6000, resizingBehavior: CROP) {
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
