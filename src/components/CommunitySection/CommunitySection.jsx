import React from "react";
import imgMap from "../../assets/images/img-map.png"; // Import the background image

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
        <div className="w-[676px] h-[83px] bg-white rounded-[41.5px] p-[23px_62px_23px_56px] flex justify-between">
          {/* Each section with vertical text */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-[16px] text-custom-dark ">NFT Nodes</span>
            <span className="text-[16px] text-black">0000.000</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[16px] text-custom-dark ">Total burned</span>
            <span className="text-[16px] text-black">0000.000</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[16px] text-custom-dark ">DONP Price</span>
            <span className="text-[16px] text-black">0000.000</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[16px] text-custom-dark ">DONP Holders</span>
            <span className="text-[16px] text-black">0000.000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
