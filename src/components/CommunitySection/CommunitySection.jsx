import React from "react";
import imgMap from "../../assets/images/img-map.png"; // Import the background image
import icCircleX from "../../assets/icons/ic-circle-x.png"; // Import the icon
import icFacebook from "../../assets/icons/ic-circle-facebook.png"; // Import the Facebook icon
import icInstagram from "../../assets/icons/ic-circle-instagram.png"; // Import the Instagram icon
import icYoutube from "../../assets/icons/ic-circle-youtube.png"; // Import the YouTube icon

const CommunitySection = () => {
  return (
    <section
      className="relative bg-no-repeat bg-cover w-full h-screen"
      style={{
        backgroundImage: `url(${imgMap})`, // Use the imported image here
      }}
    >
      <div className="container mx-auto h-full flex items-start justify-center pt-[89px]">
        <div className="text-white mix-blend-hard-light max-w-screen-xl w-[750px]">
          <span className="block text-center font-poppins text-[64px] font-normal leading-[1.25] text-white">
            Join the community to get even more benefits.
          </span>
        </div>
      </div>

      {/* Centered icons in the middle of the large image */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none mr-12">
        {/* Render 4 icons vertically aligned */}
        <div className="flex flex-col space-y-4 pointer-events-auto">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icCircleX}
              alt="Twitter"
              className="w-auto h-auto"
              style={{ width: "auto", height: "auto" }} // Ensure icon size remains unchanged
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icFacebook}
              alt="Facebook"
              className="w-auto h-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icInstagram}
              alt="Instagram"
              className="w-auto h-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icYoutube}
              alt="YouTube"
              className="w-auto h-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </a>
        </div>
      </div>

      {/* Image gallery at the bottom-left corner */}
      <div className="absolute bottom-0 left-0 mb-8 ml-8">
        <div className="flex space-x-[40px]">
          <img
            src={require("../../assets/images/img-count-days.png")}
            alt="Days"
            className="w-[150px] h-auto"
          />
          <img
            src={require("../../assets/images/img-count-hours.png")}
            alt="Hours"
            className="w-[150px] h-auto"
          />
          <img
            src={require("../../assets/images/img-count-minutes.png")}
            alt="Minutes"
            className="w-[150px] h-auto"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 mb-10 mr-12">
        <div className="w-[676px] h-[83px] bg-white rounded-[41.5px] p-[23px_62px_23px_56px] flex justify-between relative">
          {/* Each section with vertical text */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-[16px] text-custom-dark">NFT Nodes</span>
            <span className="text-[16px] text-black">0000.000</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[16px] text-custom-dark">Total burned</span>
            <span className="text-[16px] text-black">0000.000</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[16px] text-custom-dark">DONP Price</span>
            <span className="text-[16px] text-black">0000.000</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[16px] text-custom-dark">DONP Holders</span>
            <span className="text-[16px] text-black">0000.000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
