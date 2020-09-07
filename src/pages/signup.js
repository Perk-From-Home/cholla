import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

class SignUp extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <Hero />
          <div className="wrapper">
            <h2 className="section-headline">Featured experiences</h2>
          </div>
          <div className="wrapper">
            <h2 className="section-headline">Why Cholla?</h2>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SignUp;
