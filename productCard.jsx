import React from "react";
import "../styles/styles.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
};

export default ProductCard;
