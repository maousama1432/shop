"use client";

import React, { useEffect, useState } from 'react';
import './styles/Main.css';

const Main = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <main className="main">
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            <p>Preço: ${product.price}</p>
            <p>{product.description}</p>
            <p>Categoria: {product.category}</p>
            <img src={product.image} alt={product.title} />
            <p>Avaliações: {product.rating.count}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>

    </main>
  );
};

export default Main;
