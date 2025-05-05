import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const sliderImages = [
    "https://s3images.coroflot.com/user_files/individual_files/original_494449_LngVoXEJTXlVmBD0BVeVbLJwZ.jpg",
    "https://i.pinimg.com/736x/15/d0/52/15d0522e82e9c350cf09c4cdb18bf97b.jpg",
    "https://m.media-amazon.com/images/I/51TBibrWZdL._SY695_.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

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
    </div>
  );
};

export default Home;
