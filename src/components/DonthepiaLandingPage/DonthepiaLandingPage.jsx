/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import imgBottom01 from "../../assets/images/img-bottom-01.png";
import imgBottom02 from "../../assets/images/img-bottom-02.png";
import imgBottom03 from "../../assets/images/img-bottom-03.png";
import icCircleX from "../../assets/icons/ic-circle-x.png";
import icFacebook from "../../assets/icons/ic-circle-facebook.png";
import icInstagram from "../../assets/icons/ic-circle-instagram.png";
import icYoutube from "../../assets/icons/ic-circle-youtube.png";

const DonthepiaLandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#232323] text-white relative w-full">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[129px] font-bold mb-4 text-center">
          DONTHEPIA
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-8 text-center">
          더 많은 혜택을 받고 싶다면 DONTHEPIA 커뮤니티에 가입하세요.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-4 sm:px-6 py-2 rounded-full font-bold">
            NFT 구매하기 →
          </button>
          <button className="bg-red-600 text-black px-4 sm:px-6 py-2 rounded-full font-bold">
            NFT 구매하기 →
          </button>
        </div>
      </main>

      {/* Image 1: hidden on smaller screens, visible on md and up */}
      <img
        src={imgBottom01}
        alt="Image 1"
        className="hidden md:block absolute top-0 left-[50px] sm:left-[100px] md:left-[200px] w-[150px] sm:w-[200px] md:w-[253px] h-[150px] sm:h-[200px] md:h-[253px]"
      />

      {/* Image 2: hidden on smaller screens, visible on md and up */}
      <img
        src={imgBottom02}
        alt="Image 2"
        className="hidden md:block absolute top-[400px] sm:top-[500px] left-0 w-[300px] sm:w-[400px] md:w-[461px] h-[200px] sm:h-[250px] md:h-[259px] object-cover"
        style={{
          clipPath: "inset(0 50% 0 0)", // Cắt nửa phải của ảnh
        }}
      />

      {/* Image 3: hidden on smaller screens, visible on md and up */}
      <img
        src={imgBottom03}
        alt="Image 3"
        className="hidden md:block absolute top-[300px] sm:top-[400px] right-10 sm:right-20 md:right-40 w-[200px] sm:w-[250px] md:w-[348px] h-auto"
      />

      <footer className="w-full p-8">
        <div className="flex flex-col md:flex-row justify-between items-end text-center">
          <div className="text-sm">
            <p>COPYRIGHT 2024. DONTHEPIA INC. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="text-sm mt-4 md:mt-0">
            <p>MAIL@DONTHEPIA.COM</p>
          </div>

          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icCircleX} alt="Twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icFacebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icInstagram} alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icYoutube} alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonthepiaLandingPage;
