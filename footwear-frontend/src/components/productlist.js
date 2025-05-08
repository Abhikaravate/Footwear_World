import React from 'react';
import productsData from './productsData'; // Assuming the productsData is in the same folder
import { useNavigate } from 'react-router-dom';
const ProductList = ({ cart, setCart }) => {
  // Function to handle adding products to the cart
  const navigate = useNavigate();
// Function to handle adding products to the cart
const addToCart = (product) => {
  setCart([...cart, product]);
  navigate('/cart');
};

  return (
    <div className="product-list">
      <h1>Products</h1>

      {Object.keys(productsData).map((brand) => (
        <div key={brand} className="brand-section">
          <h2>{brand}</h2>
          <div className="products">
            {productsData[brand].map((product) => (
              <div key={product.name} className="product">
                <img src={product.images[0]} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
                <p>Rating: {product.rating} ⭐</p>
                <p>Availability: {product.availability}</p>
                {/* Add to Cart Button */}
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Cart cart={cart} />
    </div>
  );
};

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
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

export default ProductList;
