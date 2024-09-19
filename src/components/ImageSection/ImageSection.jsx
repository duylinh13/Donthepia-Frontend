import React from "react";
import heroImage from "../../assets/images/00-img.png";

export default function ImageSection() {
  const handleImageError = () => {
    console.error("Hình ảnh không thể tải.");
  };

  return (
    <div className="image-container flex justify-center items-center">
      <img
        src={heroImage}
        alt="HeroImage"
        onError={handleImageError}
        loading="lazy"
        className="w-full h-auto max-w-[1920px]"
      />
    </div>
  );
}
