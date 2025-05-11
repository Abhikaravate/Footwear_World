import React, { useState } from 'react';
import axios from 'axios';
 import { navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const navigate=useNavigate;
    try {
      await axios.post('http://localhost:5000/api/login', formData);

   navigate('/');
      // Optionally redirect using: navigate('/dashboard')
    } catch (err) {
      alert('Login failed!');   
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <img
          src="https://template.canva.com/EAGJl0vxbKU/1/0/1600w-1njR_0ecQu4.jpg"
          alt="Logo"
          style={styles.logo}
        />
        <h2 style={styles.title}>Login to Your Account</h2>
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f2f4f7',
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
  },
  logo: {
    width: '120px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    width: '100%',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
    transition: 'background 0.3s',
  },
};

export default Login;
