import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

interface Props {
  pageResources: {
    json: {
      pageContext: {
        title: string;
        html: string;
        image: string;
        date: string;
        keywords: string;
      };
    };
  };
}

const PostLayout = (props: Props) => {
  const { title, html, image, date, keywords } = props.pageResources.json.pageContext;
  return (
    <div>
      <SEO title={title} description={html} image={image} keywords={keywords} />
      <Header />
      <main className="pt-5">
        <Container>
          <Image src={image} fluid />
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <p>
            <small>{date}</small>
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default PostLayout;
