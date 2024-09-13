import React, { useState } from "react";
import "./Header.css"; // Nhập file CSS cho phần responsive
import logoDonthepia from "../../assets/images/logo-donthepia.png"; // Nhập logo hình ảnh
import languageIcon from "../../assets/icons/ic-language.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Biểu tượng toggle

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-12 py-6 lg:py-10 bg-black">
      <div className="flex items-center mb-4 lg:mb-0">
        {/* Logo */}
        <img
          src={logoDonthepia}
          srcSet={`${logoDonthepia} 1x, ../../assets/images/logo-donthepia@2x.png 2x, ../../assets/images/logo-donthepia@3x.png 3x`}
          alt="Logo Donthepia"
          className="w-[150px] lg:w-[211px] h-auto object-contain"
        />
      </div>

      {/* Nút toggle menu trên màn hình nhỏ */}
      <button
        className="lg:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Menu */}
      <nav
        className={`menu ${
          isMenuOpen ? "menu-visible" : "menu-hidden"
        } lg:flex lg:items-center lg:space-x-16 font-sans text-[15.5px] font-normal leading-[1.94]`}
      >
        <a href="page3" className="text-white uppercase">
          DONQUIXOTE
        </a>
        <a href="page3" className="text-white uppercase">
          About
        </a>
        <a href="page3" className="text-white uppercase">
          Donquixote NFT
        </a>
        <a href="page3" className="text-white uppercase">
          Ecosystem
        </a>
        <a href="page3" className="text-white uppercase">
          Token
        </a>
        <a href="page3" className="text-white uppercase">
          Roadmap
        </a>
        <a href="page3" className="text-white uppercase">
          Team & Partners
        </a>
        <a href="page3" className="text-white uppercase">
          FAQ
        </a>
      </nav>

      {/* Icon ngôn ngữ và nút NFT 구매 */}
      <div className="flex items-center space-x-4 lg:space-x-6">
        {/* Icon ngôn ngữ */}
        <img
          src={languageIcon}
          alt="Language"
          className="w-6 h-6 object-contain"
        />

        {/* Nút NFT 구매 */}
        <button className="w-[100px] lg:w-[125px] h-[40px] lg:h-[48px] bg-[#f1302f] text-black rounded-full px-4 lg:px-6 font-bold">
          NFT 구매
        </button>
      </div>
    </header>
  );
};
