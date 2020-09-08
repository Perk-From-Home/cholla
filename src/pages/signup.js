import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import addToMailchimp from "gatsby-plugin-mailchimp";
import "../pages/mystyles.scss";

class MyGatsbyComponent extends React.Component {
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // 1. via `.then`

  constructor(props) {
    super(props);
    this.state = { email: "", message: "", response: "" };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
      .then((data) => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data);
        this.setState({ message: data.msg });
        this.setState({ response: data.response });
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      });
  };

  render() {
    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", paddingTop: "50px" }}>
        <form class="form" onSubmit={this._handleSubmit}>
          <div class="field">
            <input
              class="input is-primary"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <div
              class={
                this.state.response === "success"
                  ? "has-text-success"
                  : "has-text-danger"
              }
            >
              <p dangerouslySetInnerHTML={{ __html: this.state.message }} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

class SignUp extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <Hero
            title="We're currently in closed beta phase"
            subtitle="If you'd like to 
          join the waiting list, please leave us your email and we'll get back to you
          as soon as possible."
          >
            <MyGatsbyComponent />
          </Hero>
        </div>
      </Layout>
    );
  }
}

export default SignUp;
