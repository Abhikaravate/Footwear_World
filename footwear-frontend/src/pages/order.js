import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Order = () => {
  const { state } = useLocation();  // Access passed product from the previous page
  const navigate = useNavigate();
  const product = state?.product;   // Check if product exists
  const [selectedSize, setSelectedSize] = useState('');

  // Handle case where no product is found
  if (!product) {
    return <p style={styles.errorText}>⚠️ No product found. Please go back to cart.</p>;
  }

  // Confirm Order Handler
  const handleConfirmOrder = () => {
    if (!selectedSize) {
      alert('Please select a size before placing the order.');
      return;
    }

    const orderData = {
      ...product,
      size: selectedSize, // Add selected size to the order data
    };

    // Here, we simulate the order without sending it to the backend
    // Simply navigate to the confirmation page with the order data
    navigate('/confirm', { state: { product: orderData } });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🧾 Order Summary</h2>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <div>
          <h3 style={styles.productName}>{product.name}</h3>
          <p style={styles.productDetail}>Price: ₹{product.price}</p>
          <p style={styles.productDetail}>Category: {product.category}</p>

          {/* Size Selection */}
          <label style={styles.label}>
            Select Size:
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              style={styles.select}
            >
              <option value="">-- Choose Size --</option>
              {product.sizes.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </label>

          {/* Confirm Order Button */}
          <button onClick={handleConfirmOrder} style={styles.button}>
            ✅ Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    color: '#333',
    marginBottom: '30px',
  },
  card: {
    display: 'flex',
    gap: '30px',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
  },
  image: {
    width: '200px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  productName: {
    fontSize: '22px',
    margin: '0 0 10px 0',
    color: '#222',
  },
  productDetail: {
    fontSize: '16px',
    margin: '5px 0',
    color: '#555',
  },
  label: {
    display: 'block',
    marginTop: '20px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
  },
  select: {
    marginLeft: '10px',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '15px',
    marginTop: '8px',
  },
  button: {
    marginTop: '25px',
    padding: '10px 30px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  errorText: {
    padding: '40px',
    textAlign: 'center',
    color: '#a00',
    fontSize: '18px',
  },
};

export default Order;
