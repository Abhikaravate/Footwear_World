import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
    
     <h2>Your Cart</h2>
     
      {cart.length > 0  ? (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <h4>{product.name}</h4>
              <p>Price: {product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

