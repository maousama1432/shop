// src/components/Main.js

import React, { useEffect, useState } from 'react';
import './styles/Main.css';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main className="main">
      {products.map(product => (
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
          <p>Preço: ${product.price}</p>
          <p>{product.description}</p>
          <p>Categoria: {product.category}</p>
          <img src={product.image} alt={product.title} />
          <p>Avaliações: {product.rating.count}</p>
        </div>
      ))}
    </main>
  );
};

export default Main;
