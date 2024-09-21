import React from "react";
import DONQNFTNodes from "../components/DONQNFTNodes/DONQNFTNodes";
import TeamAndAdvisers from "../components/TeamAdvisers/TeamAdvisers";
import GallerySection from "../components/GallerySection/GallerySection";

const MainDark002 = () => {
  return (
    <div className="bg-black text-white min-h-screen ">
      <DONQNFTNodes />
      <TeamAndAdvisers />
      <GallerySection />
    </div>
  );
};

export default MainDark002;
