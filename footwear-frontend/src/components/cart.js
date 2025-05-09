import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    fetch('http://localhost:5000/api/cart')
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error("Failed to fetch cart items:", err));
  };

  const handleRemove = (id) => {
    fetch(`http://localhost:5000/api/cart/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        alert("Item removed from cart");
        fetchCartItems(); // Refresh cart list
      })
      .catch((err) => console.error("Error deleting item:", err));
  };

  const handlePayment = () => {
    alert("Payment processing (placeholder)");
  };

  return (
    <div style={cartContainerStyle}>
      <h2 style={headingStyle}>🛒 Your Cart</h2>

      {cart.length > 0 ? (
        <ul style={listStyle}>
          {cart.map((product) => (
            <li key={product._id} style={cardStyle}>
              <div>
                <img src={product.image} alt={product.name} style={imageStyle} />
                <h4 style={productNameStyle}>{product.name}</h4>
                <p style={productDetailStyle}>Price: {product.price}</p>
                <p style={productDetailStyle}>Category: {product.category}</p>
              </div>

              <div style={buttonContainerStyle}>
                <button onClick={handlePayment} style={buttonStyleGreen}>
                  Pay Now
                </button>
                <button onClick={() => handleRemove(product._id)} style={buttonStyleRed}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={emptyStyle}>Your cart is empty.</p>
      )}
    </div>
  );
};

// 🔧 Inline CSS Styles
const cartContainerStyle = {
  minHeight: '100vh',
  padding: '40px',
  backgroundColor: 'rgb(255, 255, 255)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headingStyle = {
  fontSize: '32px',
  color: 'rgb(22, 21, 21)',
  marginBottom: '30px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  width: '100%',
  maxWidth: '900px',
};

const cardStyle = {
  marginBottom: '25px',
  padding: '20px',
  backgroundColor:  'rgb(240, 237, 237)',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.90)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};


const imageStyle = {
  width: '150px',
  borderRadius: '8px',
  marginBottom: '10px',
};

const productNameStyle = {
  margin: '10px 0 5px 0',
  color: '#444',
};

const productDetailStyle = {
  margin: '4px 0',
  color: '#666',
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const buttonStyleGreen = {
  padding: '10px 20px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
};

const buttonStyleRed = {
  padding: '10px 20px',
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
};

const emptyStyle = {
  fontSize: '20px',
  color: '#555',
};

export default Cart;

