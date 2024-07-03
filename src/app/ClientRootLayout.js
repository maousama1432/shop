"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/components/styles/globals.css';

export default function ClientRootLayout({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <html lang="en">
      <body>
        <Header cartItemCount={cart.length} />
        {React.cloneElement(children, { cart, setCart })}
        <Footer />
      </body>
    </html>
  );
}
