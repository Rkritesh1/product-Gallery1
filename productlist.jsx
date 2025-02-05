import React from "react";
import ProductCard from "./productCard";

const products = [
  { id: 1, name: "Smartphone", price: 499.99, image: "/images/Phone.jpg" },
  { id: 2, name: "Laptop", price: 999.99, image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: 199.99, image: "/images/watch.jpg" },
  { id: 4, name: "Headphones", price: 149.99, image: "/images/headphones.jpeg" },
  { id: 5, name: "Camera", price: 599.99, image: "/images/camera.jpg" },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
