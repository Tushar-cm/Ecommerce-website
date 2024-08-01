import React from 'react';
import { useCart } from '../contexts/CartContext';
import './CartPage.css'; // Ensure this file includes the updated styles

const CartPage = () => {
  const { cartItems, getTotalAmount } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total Amount: ${getTotalAmount().toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
