import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const gotohome = () => {
    navigate('/'); // Redirect to /payment
  };

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
          background-color: rgb(241, 91, 65);
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          color: #0f1111;
        }

        .nav-search:hover {
          border: 2px solid rgb(231, 159, 16);
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

        .nav-button {
          padding: 8px 16px;
          background-color:rgb(0, 0, 0);
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        .nav-button:hover {
          background-color:rgb(0, 0, 0);
        }

        .nav-cart, .nav-signin, .nav-return {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav-cart i, .nav-signin i, .nav-return i {
          font-size: 1.5rem;
        }

        .nav-cart span, .nav-signin p, .nav-return p {
          margin-top: 5px;
        }

        .nav-cart, .nav-return, .nav-signin {
          color: white;
        }

      `}</style>

      <header>
        <div className="navbar">
          <div className="nav-logo">
            <div className="logo"></div>
          </div>

          <div className="nav-address border">
            
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <button onClick={gotohome} className="nav-button">Home</button>
            </div>
          </div>

          <div className="nav-search">
            <input type="text" placeholder="Search PUMA" className="search-input" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="nav-signin border">
            
            <button className="nav-button" onClick={() => navigate('/login')}>Login</button>
          </div>

         

          <div className="nav-cart border">
            
            <button className="nav-button" onClick={() => navigate('/cart')}>  <i className="fa-solid fa-cart-shopping"></i> Cart</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
