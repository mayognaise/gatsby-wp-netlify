import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO';
import React from 'react';
import { graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        image: string;
        date: string;
        keywords?: string;
      };
    };
  };
}

const PostLayout = (props: Props) => {
  const {
    html,
    frontmatter: { title, image, date, keywords },
  } = props.data.markdownRemark;
  return (
    <div>
      <SEO title={title} description={html} image={image} keywords={keywords} />
      <Header />
      <main className="pt-5">
        <Container>
          <Image src={image} fluid alt={title} />
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <p>
            <small>{date}</small>
          </p>
          {keywords && (
            <p>
              <small>{keywords}</small>
            </p>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default PostLayout;

export const query = graphql`
  query MarkdownReparkPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        date
        keywords
      }
    }
  }
`;
