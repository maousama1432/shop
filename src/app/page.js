import React from 'react';
import Main from '@/components/Main';

export default function Home({ cart, setCart }) {
  return (
    <Main cart={cart} setCart={setCart} />
  );
}
