import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

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
          background-color: black;
          color: white;
          display: flex;
          align-items: center;
          padding: 0 40px;
          height: 70px;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
        }

        .logo {
          background-image: url('https://template.canva.com/EAGJl0vxbKU/1/0/1600w-1njR_0ecQu4.jpg');
          background-size: cover;
          background-position: center;
          height: 50px;
          width: 100px;
        }

        .nav-items {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .nav-button {
          background-color: transparent;
          color: white;
          {/* border: 1px solid white; */}
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .nav-button:hover {
          background-color: #eaeded ;
          color: black;
          {/* border-color: #eeb926; */}
        }

        .nav-cart, .nav-signin {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .fa-cart-shopping, .fa-circle-user {
          font-size: 1.2rem;
        }

        .btn {
          width: 80px;
        }
      `}</style>

      <header>
        <nav className="navbar">
          <div className="nav-logo">
            <div className="logo"></div>
          </div>

          <div className="nav-items">
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/products" className="nav-button">Products</Link>

            <div className="nav-signin">
              <i className="fa-regular fa-circle-user"></i>
              <Link to="/login" className="nav-button">Login</Link>
              <Link to="/signup" className="nav-button">Signup</Link>
            </div>

            <div className="nav-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <Link to="/cart" className="nav-button">Cart</Link>
            </div>
          </div>
        </nav>
      </header>

    </>

  );
};

export default Navbar;
