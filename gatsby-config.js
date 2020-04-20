/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Bootstrap Project',
    description: 'hello!',
    keywords: 'food, nala',
    image: 'https://placekitten.com/1200/630',
    url: 'http://nala.com/',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'practice.codingsrc.com',
        protocol: 'http',
        hostingWPCOM: false,
      },
    },
  ],
};
