import React, { useState } from "react";
import logoDonthepia from "../../assets/images/logo-donthepia.png";
import languageIcon from "../../assets/icons/ic-language.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-6">
        {/* Logo Section */}
        <div>
          <img
            className="w-[150px] cursor-pointer" // Adjust width for smaller screens
            src={logoDonthepia}
            alt="Logo Donthepia"
          />
        </div>

        {/* Menu Links */}
        <div
          className={`nav-links duration-500 md:static absolute bg-black md:min-h-fit min-h-[60vh] left-0 ${
            isMenuOpen ? "top-[9%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-4 text-white">
            {[
              "DONQUIXOTE",
              "About",
              "Donquixote NFT",
              "Ecosystem",
              "Token",
              "Roadmap",
              "Team & Partners",
              "FAQ",
            ].map((item) => (
              <li key={item}>
                <a
                  className="hover:text-gray-500 text-white uppercase"
                  href={`#${item}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Language and Button */}
        <div className="flex items-center gap-4">
          <img
            src={languageIcon}
            alt="Language"
            className="w-6 h-6 object-contain"
          />
          <button className="bg-[#f1302f] text-black px-4 py-2 rounded-full hover:bg-[#d42b29] text-xs md:text-base">
            NFT 구매
          </button>
          <button
            className="md:hidden text-3xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
