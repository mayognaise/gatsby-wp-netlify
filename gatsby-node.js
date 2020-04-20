/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/layouts/BlogLayout.tsx`);
  const postTemplate = path.resolve(`src/layouts/PostLayout.tsx`);

  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query {
        allWordpressPost {
          nodes {
            slug
            title
            excerpt
            content
            date
            featured_media {
              source_url
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                keywords
                image
              }
              html
            }
          }
        }
      }
    `,
    { limit: 1000 },
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    // Create blog pages.
    result.data.allWordpressPost.nodes.forEach((node) => {
      createPage({
        // Path for this page — required
        path: node.slug,
        component: blogTemplate,
        context: {
          slug: node.slug,
          title: node.title,
          excerpt: node.excerpt,
          content: node.content,
          date: node.date,
          image: node.featured_media.source_url,
        },
      });
    });
    // Create post pages.
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `${edge.node.fields.slug}`,
        component: postTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
          title: edge.node.frontmatter.title,
          image: edge.node.frontmatter.image,
          keywords: edge.node.frontmatter.keywords,
          date: edge.node.frontmatter.date,
          html: edge.node.html,
        },
      });
    });
  });
};
