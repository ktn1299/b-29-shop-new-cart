import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Shopping Cart</h1>
      <Link to="/add-product" className="btn btn-primary m-2">Add Product</Link>
      <Link to="/view-product" className="btn btn-secondary m-2">View Product</Link>
      <Link to="/cart" className="btn btn-success m-2">Go to Cart</Link>
    </div>
  );
};

export default Homepage;
