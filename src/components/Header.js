// src/components/Header.js

import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Meu Shop.com</div>
      <div className="icons">
        <button className="add-product">Adicionar Produto</button>
        <div className="cart-icon">🛒</div>
      </div>
      <p className="marketing-phrase">As melhores ofertas para você!</p>
    </header>
  );
};

export default Header;
