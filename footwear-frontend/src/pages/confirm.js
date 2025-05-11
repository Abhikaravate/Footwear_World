import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';  // Correct import for QRCodeCanvas

const Confirm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;  // Get the product from the previous page

  // If no order data is found, show an error message
  if (!product) {
    return <p style={styles.errorText}>⚠️ No order found. Please go back to the order page.</p>;
  }

  // Handle the payment action
  const handlePayment = () => {
    // Simulate payment success
    alert('Payment successful! Your order has been placed.');
    navigate('/');  // Redirect to thank you page or order summary
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>✅ Order Confirmed</h2>
        <div style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <div style={styles.productDetails}>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDetail}>Price: ₹{product.price}</p>
            <p style={styles.productDetail}>Category: {product.category}</p>
            <p style={styles.productDetail}>Size: {product.size}</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div style={styles.paymentMethods}>
          <h3 style={styles.paymentHeading}>Choose Payment Method</h3>
          
          {/* QR Code */}
          <div style={styles.paymentOption}>
            <QRCodeCanvas value={`https://payment-link.com?orderId=${product.id}`} size={128} />
            <p style={styles.paymentText}>Scan to Pay via QR</p>
          </div>

          {/* Credit Card Payment */}
          <div style={styles.paymentOption}>
            <button onClick={handlePayment} style={styles.paymentButton}>💳 Pay with Credit Card</button>
            <p style={styles.paymentText}>Secure Credit Card Payment</p>
          </div>

          {/* UPI Payment */}
          <div style={styles.paymentOption}>
            <button onClick={handlePayment} style={styles.paymentButton}>📱 Pay with UPI</button>
            <p style={styles.paymentText}>Pay via UPI (PhonePe, Google Pay, etc.)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f7fa',
  },
  container: {
    width: '100%',
    maxWidth: '900px',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
  },
  image: {
    width: '200px',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover',
    marginRight: '20px',
  },
  productDetails: {
    maxWidth: '400px',
    textAlign: 'left',
  },
  productName: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  productDetail: {
    fontSize: '16px',
    color: '#666',
    margin: '5px 0',
  },
  paymentMethods: {
    marginTop: '30px',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
  },
  paymentHeading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  paymentOption: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  paymentButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '18px',
    padding: '12px 40px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  paymentText: {
    marginTop: '8px',
    fontSize: '16px',
    color: '#555',
  },
  errorText: {
    padding: '40px',
    textAlign: 'center',
    color: '#a00',
    fontSize: '18px',
  },
};

export default Confirm;
