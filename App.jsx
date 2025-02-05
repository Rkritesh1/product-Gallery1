import React from "react";
import ProductList from "./components/productlist";
import CountdownTimer from "./components/CountdownTimer";
import ImageGallery from "./components/ImageGallery";

const App = () => {
  return (
    <div className="container">
      <h1>Shoping Product & Gallery</h1>
      <ProductList />
      <CountdownTimer targetDate="2025-12-31T23:59:59" />
      <ImageGallery />
    </div>
  );
};

export default App;
