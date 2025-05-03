import React, { useEffect, useState } from 'react';
import './ShoeDetail.css';

const ShoeDetail = () => {
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShoe({
        id: 1,
        name: "Nike Air Zoom Pegasus",
        price: 4999,
        description: "High-performance running shoes with Zoom Air cushioning.",
        imageUrl: "https://static.nike.com/a/images/t_prod/w_960,c_limit,f_auto/4be18ac2-88f7-412f-89ee-223384f06ed0/nike-air-zoom-pegasus-38-review.jpg"
      });
    }, 500);
  }, []);

  const addToCart = () => {
    alert(`Added ${shoe.name} to cart`);
  };

  if (!shoe) return <div>Loading...</div>;

  return (
    <div className="shoe-detail-container">
      <div className="shoe-image">
        <img src={shoe.imageUrl} alt={shoe.name} />
      </div>
      <div className="shoe-info">
        <h2>{shoe.name}</h2>
        <p className="price">₹{shoe.price}</p>
        <p className="desc">{shoe.description}</p>

        <label>Size:
          <select className="size-select">
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>

        <button className="add-btn" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ShoeDetail;
