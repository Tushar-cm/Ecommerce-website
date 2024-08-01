import React from 'react';
import Checkout from '../components/Checkout';
import { useCart } from '../contexts/CartContext';

const CheckoutPage = () => {
  const { getTotalAmount } = useCart();

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <h2>Total Amount: ${getTotalAmount().toFixed(2)}</h2>
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
