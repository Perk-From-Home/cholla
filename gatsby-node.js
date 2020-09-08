const { createFilePath } = require(`gatsby-source-filesystem`);

const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.js");

    resolve(
      graphql(
        `
          query rootQuery {
            allContentfulSocial(sort: { fields: [createdAt], order: DESC }) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const socials = result.data.allContentfulSocial.edges;
        socials.forEach((social) => {
          createPage({
            path: `/experiences/${social.node.slug}`,
            component: blogPost,
            context: {
              slug: social.node.slug,
            },
          });
        });
      })
    );
  });
};
