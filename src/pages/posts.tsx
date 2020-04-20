import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post/Post';
import React from 'react';
import { graphql } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface MarkdownRemark {
  node: {
    frontmatter: {
      title: string;
      date: string;
      image: string;
      keywords: string;
    };
    excerpt: string;
    html: string;
    fields: {
      slug: string;
    };
  };
}

interface Props {
  data: {
    allMarkdownRemark: {
      edges: MarkdownRemark[];
    };
  };
}

export default (props: Props) => {
  return (
    <PrimaryLayout>
      <Row xs={1} md={2}>
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <Col key={node.frontmatter.title}>
            <Post
              title={node.frontmatter.title}
              image={node.frontmatter.image}
              excerpt={node.excerpt}
              slug={node.fields.slug}
            />
          </Col>
        ))}
      </Row>
    </PrimaryLayout>
  );
};

export const query = graphql`
  query AllPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            keywords
            image
          }
          excerpt
          html
          fields {
            slug
          }
        }
      }
    }
  }
`;
