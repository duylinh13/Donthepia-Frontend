import React from "react";
import heroImage from "../../assets/images/00-img.png";
import "./ImageSection.css";

export default function ImageSection() {
  const handleImageError = () => {
    console.error("Hình ảnh không thể tải.");
  };

  return (
    <div className="image-container">
      <img
        src={heroImage}
        alt="HeroImage"
        onError={handleImageError}
        loading="lazy" // Cải thiện hiệu suất tải trang
      />
    </div>
  );
}
