import React from 'react';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  { id: 1, name: "Nike Air Max", price: 120, image: "/images/shoe1.jpg" },
  { id: 2, name: "Adidas Ultraboost", price: 110, image: "/images/shoe2.jpg" },
];

const HomePage = () => (
  <div>
    <header className="hero">
      <h1>Step Into Style</h1>
      <p>Best footwear collection for Men, Women & Kids</p>
    </header>
    
    <section className="featured">
      <h2>Featured Footwear</h2>
      <div className="product-grid">
        {sampleProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  </div>
);

export default HomePage;
