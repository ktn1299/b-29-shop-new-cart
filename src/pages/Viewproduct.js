import React from 'react';


const ViewProduct = ({ products }) => {




   products = [
    { id: 1, name: 'laptop', price: 100, description: 'lenovo', image: 'https://via.placeholder.com/200?text=Product+1' },
    { id: 2, name: 'Product 2', price: 150, description: 'This is product 2', image: 'https://via.placeholder.com/200?text=Product+2' },
    { id: 3, name: 'Product 3', price: 200, description: 'This is product 3', image: 'https://via.placeholder.com/200?text=Product+3' },
    { id: 4, name: 'Product 4', price: 250, description: 'This is product 4', image: 'https://via.placeholder.com/200?text=Product+4' },
    { id: 5, name: 'Product 5', price: 300, description: 'This is product 5', image: 'https://via.placeholder.com/200?text=Product+5' },
    { id: 6, name: 'Product 6', price: 350, description: 'This is product 6', image: 'https://via.placeholder.com/200?text=Product+6' },
    { id: 7, name: 'Product 7', price: 400, description: 'This is product 7', image: 'https://via.placeholder.com/200?text=Product+7' },
    { id: 8, name: 'Product 8', price: 450, description: 'This is product 8', image: 'https://via.placeholder.com/200?text=Product+8' },
    { id: 9, name: 'Product 9', price: 500, description: 'This is product 9', image: 'https://via.placeholder.com/200?text=Product+9' },
    { id: 10, name: 'Product 10', price: 550, description: 'This is product 10', image: 'https://via.placeholder.com/200?text=Product+10' },
  ];
  










  return (
    <div className="container">
      
      <h2>View Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewProduct;
