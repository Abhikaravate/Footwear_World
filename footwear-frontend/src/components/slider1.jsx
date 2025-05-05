import React, { useState, useEffect } from "react";

const images = [
  "footwear-frontend/src/pictures/20.jpg",
  "images/puma10.jpg",
  "images/30.jpg",
  "images/puma 40.jpg",
  "images/puma 50.jpg",
];

function Slider2() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade-in
      }, 500); // Delay matches transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    hero: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      fontFamily: "'Montserrat', sans-serif",
    },
    heroImg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
      zIndex: -1,
      transition: "opacity 0.5s ease-in-out",
      opacity: fade ? 1 : 0,
    },
    heroContent: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#fff",
      textAlign: "center",
      zIndex: 1,
      padding: "0 20px",
    },
    heroTitle: {
      fontSize: "48px",
      marginBottom: "20px",
    },
    heroParagraph: {
      fontSize: "18px",
      maxWidth: "600px",
      margin: "0 auto 30px",
    },
    heroButton: {
      padding: "10px 30px",
      backgroundColor: "#f00",
      border: "none",
      color: "#fff",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    // Responsive styles via media query
    '@media (max-width: 768px)': {
      heroTitle: {
        fontSize: "32px",
      },
      heroParagraph: {
        fontSize: "16px",
      },
      heroButton: {
        padding: "8px 20px",
      },
    },
  };

  return (
    <section style={styles.hero}>
      <img
        src={images[currentImage]}
        alt="PUMA Hero"
        style={styles.heroImg}
      />
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Be Forever Faster</h1>
        <p style={styles.heroParagraph}>
          Experience innovation and style in motion. Shop the latest from PUMA
          today.
        </p>
        <button
          style={styles.heroButton}
          onClick={() => window.location.href = "#products"}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c00")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f00")}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Slider2;
