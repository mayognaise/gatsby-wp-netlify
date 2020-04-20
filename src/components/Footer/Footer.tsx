import footerStyles from './Footer.module.scss';
import React from 'react';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="container">
        <span className="text-dark">Copyright Gatsby Bootstrap Project</span>
      </div>
    </footer>
  );
};

export default Footer;
