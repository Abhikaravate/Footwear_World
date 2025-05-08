// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing JSON data

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/footwearDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB error:'));
db.once('open', () => console.log('✅ Connected to MongoDB'));

// Define Cart schema
const cartSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  rating: String,
  availability: String,
  description: String,
  sizes: [String],
  image: String,
});

const Cart = mongoose.model('Cart', cartSchema);

// Add to cart API
app.post('/api/cart', async (req, res) => {
  try {
    const newCartItem = new Cart(req.body);
    await newCartItem.save();
    res.status(201).json({ message: 'Item added to cart successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add to cart', details: err });
  }
});

// Get all cart items
app.get('/api/cart', async (req, res) => {
    try {
      const cartItems = await Cart.find();
      res.json(cartItems);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch cart items' });
    }
  });

  //delete
  app.delete('/api/cart/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Cart.findByIdAndDelete(id);
      res.json({ message: 'Item deleted from cart' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete item' });
    }
  });
    

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
