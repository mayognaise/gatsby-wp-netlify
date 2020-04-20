import footerStyles from './Footer.module.scss';
import React from 'react';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="container">
        <span className="text-muted">Copyright Gatsby Bootstrap Project</span>
      </div>
    </footer>
  );
};

export default Footer;
