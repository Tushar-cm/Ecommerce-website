import React from 'react';

const Checkout = () => (
  <div className="checkout">
    <h2>Checkout</h2>
    <form>
      <div>
        <label>Full Name</label>
        <input type="text" required />
      </div>
      <div>
        <label>Address</label>
        <input type="text" required />
      </div>
      <div>
        <label>Credit Card</label>
        <input type="text" required />
      </div>
      <button type="submit">Place Order</button>
    </form>
  </div>
);

export default Checkout;
