import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import innertext from 'innertext';

interface Props {
  pageResources?: {
    json: {
      pageContext: {
        title: string;
        excerpt: string;
        image: string;
        content: string;
        date: string;
      };
    };
  };
}

const BlogLayout = (props: Props) => {
  if (!props.pageResources) {
    return null;
  }
  const { title, image, content, date, excerpt } = props.pageResources.json.pageContext;
  return (
    <div>
      <SEO title={innertext(title)} description={innertext(excerpt)} image={image} />
      <Header />
      <main className="pt-5">
        <Container>
          <Image src={image} fluid />
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
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
