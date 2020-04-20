import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
}

export const query = graphql`
  query DefaultSiteMetadata {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        defaultKeywords: keywords
        url
      }
    }
  }
`;

const SEO = ({ title, description, keywords, image }: Props) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription, defaultImage, defaultKeywords, url },
      },
    }) => (
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="image"
          content={image || `${/http/.test(defaultImage) ? '' : url}${defaultImage}`}
        />
        <meta name="description" content={description || defaultDescription} />
        <meta name="robots" content="index,follow" />
        {keywords && <meta name="keywords" content={keywords || defaultKeywords} />}
        <title>{title || defaultTitle}</title>
      </Helmet>
    )}
  />
);

export default SEO;
