import React, { useState, useEffect, useRef } from "react";
import { useNavigate , Link } from "react-router-dom";
import productsData from "../components/productsData"
import "./home1.css";

const Home = () => {
  const sliderImages = [
    
    "https://i.pinimg.com/736x/15/d0/52/15d0522e82e9c350cf09c4cdb18bf97b.jpg",
    "footwear-frontend/src/pictures/image.png",
    "https://m.media-amazon.com/images/I/51TBibrWZdL._SY695_.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);   
  const navigate = useNavigate();
  const showImage = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 500);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % sliderImages.length;
    showImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    showImage(newIndex);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextImage, 5000);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  const pauseSlider = () => clearInterval(intervalRef.current);
  const resumeSlider = () => {
    intervalRef.current = setInterval(nextImage, 5000);
  };

  const styles = {
    heroSection: {
      position: "relative",
      textAlign: "center",
      maxWidth: "100%",
       margin: "auto",
      height: "400px"
    },
    sliderBtn: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "white",
      border: "none",
      fontSize: "2rem",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      zIndex: 2,
    },
    leftBtn: {
      left: "10px",
      top:"200px"
    },
    rightBtn: {
      right: "10px",
      top:"200px"
    },
    image: {
      width: "100%",
      height: "80%",
      opacity: fade ? 1 : 0,
      transition: "opacity 0.5s ease-in-out",
    },
    home: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    },
    header: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '40px',
    },
    brandTitle: {
      fontSize: '2rem',
      color: '#444',
      marginBottom: '20px',
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    productCard: {
      position: 'relative',
      overflow: 'hidden',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    productImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    productInfo: {
      padding: '15px',
      textAlign: 'left',
      color: '#555',
    },
    productName: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    productPrice: {
      fontSize: '1rem',
      color: '#333',
    }
 };
  return (
    <div style={styles.heroSection}>
      <button style={{ ...styles.sliderBtn, ...styles.leftBtn }} onClick={prevImage}>
        &#10094;
      </button>
      <img
        src={sliderImages[currentIndex]}
        alt="Puma shoe model"
        style={styles.image}
        onMouseOver={pauseSlider}
        onMouseOut={resumeSlider}
      />
      <button style={{ ...styles.sliderBtn, ...styles.rightBtn }} onClick={nextImage}>
        &#10095;
      </button>
      
      <div style={styles.home}>
      <h1 style={styles.header}>Featured Products</h1>
      {Object.entries(productsData).map(([brand, products]) => (
        <div key={brand}>
          <h2 style={styles.brandTitle}>{brand}</h2>
          <div style={styles.productGrid}>
            {products.slice(0, 8).map((product, index) => (
              <Link
                to={`/product/${brand}/${index}`}
                key={`${brand}-${index}`}
                style={{ ...styles.productCard, textDecoration: 'none' }}
              >
                {/* Use the first image from the product's images array */}
                <img
                  src={product.images[0]}  // Get the first image in the array
                  alt={product.name}
                  style={styles.productImage}
                />
                <div style={styles.productInfo}>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.productPrice}>{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
