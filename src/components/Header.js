import React from 'react';
import './styles/Header.css';

const Header = ({ cartItemCount }) => {
  return (
    <header className="header">
      <div className="logo">Meu Shop.com</div>
      <div className="icons">
        <div className="cart-icon">
          🛒 <span>{cartItemCount}</span>
        </div>
      </div>
      <p className="marketing-phrase">As melhores ofertas para você!</p>
    </header>
  );
};

export default Header;
