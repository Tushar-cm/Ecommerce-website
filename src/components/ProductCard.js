import React from 'react';
import { useCart } from '../contexts/CartContext'; // Adjust the import path as needed
import './ProductCard.css'; // Ensure you import the CSS file

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
