import React from 'react';

const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Shopping Cart</h2>
    {cartItems.map(item => (
      <div key={item.id} className="cart-item">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
      </div>
    ))}
  </div>
);

export default Cart;
