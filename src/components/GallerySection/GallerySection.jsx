import React from "react";
import logoPartner01 from "../../assets/images/logo-partner-01.png";
import logoPartner02 from "../../assets/images/logo-partner-02.png";
import logoPartner03 from "../../assets/images/logo-partner-03.png";
import logoPartner04 from "../../assets/images/logo-partner-04.png";
import logoPartner05 from "../../assets/images/logo-partner-05.png";
import logoPartner06 from "../../assets/images/logo-partner-06.png";
import logoPartner07 from "../../assets/images/logo-partner-07.png";

const GallerySection = () => {
  const images = [
    logoPartner01,
    logoPartner02,
    logoPartner03,
    logoPartner04,
    logoPartner05,
    logoPartner06,
    logoPartner07,
    logoPartner02,
  ];

  return (
    <div className="bg-black w-[1920px] h-[800px] py-[190px] px-0">
      <div className="flex justify-start mx-auto">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Partner logo ${index + 1}`}
            className="w-[194px] h-[108px]"
            style={{
              marginRight: index < images.length - 1 ? "40px" : "0", // Khoảng cách 40px giữa các ảnh
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
