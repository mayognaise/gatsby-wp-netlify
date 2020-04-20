import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO';
import React, { ReactNode } from 'react';
import Container from 'react-bootstrap/Container';

interface Props {
  children: ReactNode;
}

const PrimaryLayout = ({ children }: Props) => {
  return (
    <div>
      <SEO />
      <Header />
      <main className="pt-5">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
