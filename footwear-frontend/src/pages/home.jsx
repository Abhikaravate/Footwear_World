import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import productsData from "../components/productsData";
import "./home1.css";

const Home = () => {
  const sliderImages = [
    "https://template.canva.com/EAEvi_nhSkQ/2/0/1600w-n0sR_lS9M7c.jpg",
   "https://template.canva.com/EADaiCCaXfQ/1/0/1600w-RJs5QIdSeL4.jpg",
   
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
    }, 300);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % sliderImages.length;
    showImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    showImage(newIndex);
  };

  const startSlider = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextImage, 5000);
  };

  const pauseSlider = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startSlider();
    return () => clearInterval(intervalRef.current);
  }, []);

  const styles = {
    heroSection: {
      position: "relative",
      textAlign: "center",
      maxWidth: "100%",
      margin: "auto",
      height: "800px"
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
    leftBtn: { left: "10px" },
    rightBtn: { right: "10px" },
    image: {
      width: "100%",
      height: "80%",
      objectFit: "cover",
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
      textDecoration: 'none',
      color: 'inherit',
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
        alt="slider"
        style={styles.image}
        onMouseOver={pauseSlider}
        onMouseOut={startSlider}
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
                  style={styles.productCard}
                >
                  <img
                    src={product.images[0]}
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
