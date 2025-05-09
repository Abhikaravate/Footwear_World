import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../components/productsData"; // Make sure the path is correct
import { useNavigate } from 'react-router-dom';

const ProductView = () => {
  const navigate = useNavigate();

  const { brand, productId } = useParams();  // Getting brand and productId from URL params
  const product = productsData[brand]?.[productId];  // Fetching product from data based on the params

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for current image index


  const handleAddToCart = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: product.name,
          price: product.price,
          category: product.category,
          rating: product.rating,
          availability: product.availability,
          description: product.description,
          sizes: product.sizes,
          image: product.images[0], // You can send only one image or all
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('✅ Added to cart!');
      } else {
        console.error(data);
        alert('❌ Failed to add to cart.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error adding to cart.');
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [product]);

  if (!product) {
    return <div style={styles.notFound}>Product not found.</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        {/* Image Carousel */}
        <div style={styles.imageWrapper}>
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.name} ${currentImageIndex + 1}`}
            style={styles.productImage}
          />
        </div>

        {/* Dots for navigation */}
        <div style={styles.dotsContainer}>
          {product.images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={currentImageIndex === index ? styles.activeDot : styles.inactiveDot}
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div style={styles.detailsContainer}>
        <h2 style={styles.productName}>{product.name}</h2>
        <p><span style={styles.boldText}>Price:</span> {product.price}</p>
        <p><span style={styles.boldText}>Category:</span> {product.category}</p>
        <p><span style={styles.boldText}>Rating:</span> ⭐ {product.rating}</p>
        <p><span style={styles.boldText}>Availability:</span> {product.availability}</p>
        <p><span style={styles.boldText}>Description:</span> {product.description}</p>
        <p>
          <span style={styles.boldText}>Available Sizes:</span>{" "}
          {product.sizes.join(", ")}
        </p>
        <p> <button onClick={handleAddToCart}>
      add to cart 
    </button></p>
      </div>
    </div>
  );
};

// Styles
const styles = {
  
  container: {
    display: "flex",
    maxWidth: "1200px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "30px",
  },
  imageSection: {
    flex: 1,
    marginRight: "20px",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "auto",
    overflow: "hidden",
    borderRadius: "12px",
  },
  productImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "12px",
    transition: "transform 0.3s ease",
  },
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  activeDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#333",
    margin: "0 5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  inactiveDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    margin: "0 5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  detailsContainer: {
    flex: 1,
    color: "#555",
    fontSize: "1rem",
    lineHeight: "1.6",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  productName: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    textAlign: "left",
  },
  boldText: {
    fontWeight: "bold",
    color: "#333",
  },
  notFound: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "1.5rem",
    color: "#888",
  },
};

export default ProductView;