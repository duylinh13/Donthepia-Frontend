// src/components/ImageSection/ImageSection.jsx
import React from "react";
import "./ImageSection.css"; // Import file CSS riêng cho ImageSection

const ImageSection = () => {
  return (
    <section className="image-section">
      <img src="your-image-url.jpg" alt="Description" className="image" />
    </section>
  );
};

export default ImageSection;
