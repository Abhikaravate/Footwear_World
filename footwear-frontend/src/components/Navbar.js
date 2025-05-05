



//   <nav className="navbar">
//     <h2>👟 Footwear Shop</h2>
//     <ul>
//       <li><Link to="">Home</Link></li>
//       <li><Link to="/ShoeDetail" element>Products</Link></li>
//       <li><Link to="/cart">Cart</Link></li>
//       <li><Link to="/login">Login</Link></li>
//     </ul>
//   </nav>
// );


import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import HomePage from '../pages/home';
import Home1 from '../pages/home1';
import Slider2 from './slider1';

const Navbar = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .navbar {
          height: 60px;
          background-color: black;
          color: white;
          display: flex;
          align-items: center;
          padding: 35px;
          justify-content: space-evenly;
        }

        .nav-logo {
          height: 60px;
          width: 100px;
        }

        .logo {
          background-image: url('https://images.seeklogo.com/logo-png/11/2/puma-logo-png_seeklogo-113791.png');
          background-size: cover;
          background-position: center;
          height: 50px;
          width: 100%;
        }

        .nav-search {
          display: flex;
          justify-content: space-evenly;
          background-color: bisque;
          width: 620px;
          height: 40px;
          border-radius: 25px;
        }

        .search-input {
          border: none;
          outline: none;
          padding: 8px;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;  
          width: 100%;
          font-size: 1rem;
        }

        .search-icon {
          width: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          background-color:rgb(241, 91, 65);
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          color: #0f1111;
        }

        .nav-search:hover {
          border: 2px solid rgb(231, 159, 16);
        }

        .search-select {
          background-color: #f3f3f3;
          width: 50px;
          text-align: center;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
          border: none;
        }

        .border {
          border: 1px solid transparent; 
          padding: 5px; 
          transition: border-color 0.3s;
        }

        .border:hover {
          height: auto;
          width: auto;
          border-radius: 20px;
          border-color: rgb(244, 78, 45);
          background-color: #eeb926; 
          color: white;
        }
       
      `}</style>

      <header>
        <div className="navbar">
          <div className="nav-logo">
            <div className="logo"></div>
          </div>

          &nbsp;&nbsp;

          <div className="nav-address border">
            <p className="address-first">Deliver To</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="address-second">HOME</p>
            </div>
          </div>

          <div className="nav-search">
            <input type="text" placeholder="Search PUMA" className="search-input" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="nav-signin border">
            <p><i className="fa-regular fa-circle-user"></i> <span>Hello,</span></p>
            <p className="nav-second">Login</p>
          </div>

          <div className="nav-return border">
            <p><span>Returns</span></p>
            <p className="nav-second">& Orders</p>
          </div>

          <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i>
            <span><Link target="_blank" to="/ShoeDetail">Cart</Link></span>
          </div>
        </div>
      </header>
      <HomePage />
      
      <Home1 />
      <Slider2 />
      <Footer />

    </>
  );
};

export default Navbar;
