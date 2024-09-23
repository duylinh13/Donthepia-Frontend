import React from "react";
import imgMap from "../../assets/images/img-map.png"; // Import the background image
import icCircleX from "../../assets/icons/ic-circle-x.png"; // Import the icon
import icFacebook from "../../assets/icons/ic-circle-facebook.png"; // Import the Facebook icon
import icInstagram from "../../assets/icons/ic-circle-instagram.png"; // Import the Instagram icon
import icYoutube from "../../assets/icons/ic-circle-youtube.png"; // Import the YouTube icon

const CommunitySection = () => {
  return (
    <section
      className="relative w-full min-h-screen sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imgMap})`, // Use the imported image as background
      }}
    >
      {/* Main Text Section */}
      <div className="container mx-auto h-full flex items-center justify-center pt-20 px-4 lg:px-8">
        <div className="text-center lg:w-[750px] text-white mix-blend-hard-light">
          <h1 className="font-poppins text-[32px] md:text-[48px] lg:text-[64px] font-normal leading-[1.25]">
            Join the community to get even more benefits.
          </h1>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute right-0 top-[30%] flex flex-col space-y-4 mr-4 md:mr-12 pointer-events-none">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto"
        >
          <img
            src={icCircleX}
            alt="Twitter"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto"
        >
          <img
            src={icFacebook}
            alt="Facebook"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto"
        >
          <img
            src={icInstagram}
            alt="Instagram"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto"
        >
          <img
            src={icYoutube}
            alt="YouTube"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </a>
      </div>

      {/* Countdown Images at the Bottom Left */}
      <div className="absolute bottom-0 left-0 mb-8 ml-8 flex space-x-6 flex-wrap md:flex-nowrap">
        <img
          src={require("../../assets/images/img-count-days.png")}
          alt="Days Countdown"
          className="w-24 md:w-32 mb-4 md:mb-0"
        />
        <img
          src={require("../../assets/images/img-count-hours.png")}
          alt="Hours Countdown"
          className="w-24 md:w-32 mb-4 md:mb-0"
        />
        <img
          src={require("../../assets/images/img-count-minutes.png")}
          alt="Minutes Countdown"
          className="w-24 md:w-32 mb-4 md:mb-0"
        />
      </div>

      {/* Data Section at the Bottom Right */}
      <div className="absolute bottom-0 right-0 mb-10 mr-4 md:mr-12 w-full md:w-[676px] h-[83px] bg-white rounded-[41.5px] p-4 md:p-[23px_62px_23px_56px] flex flex-col md:flex-row justify-between items-center">
        {/* Each vertical text section */}
        <div className="flex flex-col items-center">
          <span className="text-[14px] md:text-[16px] text-black">
            NFT Nodes
          </span>
          <span className="text-[14px] md:text-[16px] text-black">
            0000.000
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[14px] md:text-[16px] text-black">
            Total burned
          </span>
          <span className="text-[14px] md:text-[16px] text-black">
            0000.000
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[14px] md:text-[16px] text-black">
            DONP Price
          </span>
          <span className="text-[14px] md:text-[16px] text-black">
            0000.000
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[14px] md:text-[16px] text-black">
            DONP Holders
          </span>
          <span className="text-[14px] md:text-[16px] text-black">
            0000.000
          </span>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
