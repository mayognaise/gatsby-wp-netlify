import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post/Post';
import React from 'react';
import { graphql } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface WordpressPost {
  excerpt: string;
  title: string;
  slug: string;
  featured_media: {
    source_url: string;
  };
}

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        image: string;
        keywords: string;
        url: string;
      };
    };
    allWordpressPost: {
      nodes: WordpressPost[];
    };
  };
}

export default (props: Props) => {
  return (
    <PrimaryLayout>
      <Row xs={1} md={2}>
        {props.data.allWordpressPost.nodes.map((node) => (
          <Col key={node.slug}>
            <Post
              title={node.title}
              image={node.featured_media.source_url}
              excerpt={node.excerpt}
              slug={node.slug}
            />
          </Col>
        ))}
      </Row>
    </PrimaryLayout>
  );
};

export const query = graphql`
  query {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`;
