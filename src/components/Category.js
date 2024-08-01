import React from 'react';
import ProductList from './ProductList';

const Category = ({ products }) => (
  <div className="category">
    <ProductList products={products} />
  </div>
);

export default Category;
