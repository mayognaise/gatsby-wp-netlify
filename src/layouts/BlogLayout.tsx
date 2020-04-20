import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO';
import React from 'react';
import { graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import innertext from 'innertext';

interface Props {
  data: {
    wordpressPost: {
      title: string;
      excerpt: string;
      content: string;
      date: string;
      featured_media: {
        source_url: string;
      };
    };
  };
}

const BlogLayout = (props: Props) => {
  const {
    title,
    featured_media: { source_url: image },
    content,
    date,
    excerpt,
  } = props.data.wordpressPost;
  return (
    <div>
      <SEO title={innertext(title)} description={innertext(excerpt)} image={image} />
      <Header />
      <main className="pt-5">
        <Container>
          <Image src={image} fluid alt={title} />
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: content.replace(/alt=""/g, 'alt="wp-image"') }} />
          <p>
            <small>{date}</small>
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default BlogLayout;

export const query = graphql`
  query WPPost($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      content
      title
      date
      excerpt
      featured_media {
        source_url
      }
    }
  }
`;
