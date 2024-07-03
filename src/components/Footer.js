import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
      <p className="creation-date">Empresa criada em 01/01/2024</p>
      <div className="footer-logo">Meu Shop.com</div>
    </footer>
  );
};

export default Footer;
