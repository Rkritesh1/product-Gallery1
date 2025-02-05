import React, { useState } from "react";
import "../styles/styles.css";

const images = [
  { id: 1, category: "Nature", src: "/images/nature1.jpg" },
  { id: 2, category: "Nature", src: "/images/nature2.jpg" },
  { id: 3, category: "Technology", src: "/images/tech1.jpg" },
  { id: 4, category: "Technology", src: "/images/tech2.jpg" },
  { id: 5, category: "Art", src: "/images/art1.jpg" },
  { id: 6, category: "Art", src: "/images/art2.jpg" },
];

const categories = ["All", "Nature", "Technology", "Art"];

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div>
      <div className="buttons">
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="gallery">
        {filteredImages.map((image) => (
          <img key={image.id} src={image.src} alt={image.category} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
