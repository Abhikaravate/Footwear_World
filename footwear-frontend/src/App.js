import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/home';
import ShoeDetail from './pages/ShoeDetail';
import Footer from './components/Footer';
import Home1 from './pages/home1';
import Slider2 from './components/slider1';
import ProductView from './components/ProductCard';
import ProductList from './components/productlist';
import Cart from './components/cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import React, { useState,useEffect } from 'react';

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Use useEffect to update localStorage whenever the cart changes
  useEffect(() => {
    if (cart.length > 0 && cart.length<1) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);   return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Home1/>} />
        <Route path="/ShoeDetail" element={<ShoeDetail />} /> 
        <Route path="/product/:brand/:productId" element={<ProductView />} />
        <Route path="/footer" element={<Footer />} />  
        <Route path="/Slider2" element={<Slider2/>} />
        <Route path="/products" element={<ProductList cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />




      </Routes>
    </Router>
  );
}

export default App;
