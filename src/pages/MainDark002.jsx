import React from "react";
import DONQNFTNodes from "../components/DONQNFTNodes/DONQNFTNodes";
import TeamAndAdvisers from "../components/TeamAdvisers/TeamAdvisers";
import GallerySection from "../components/GallerySection/GallerySection";
import FAQ from "../components/FAQ/index";
import DonthepiaLandingPage from "../components/DonthepiaLandingPage/DonthepiaLandingPage";

const MainDark002 = () => {
  return (
    <div className="bg-black text-white min-h-screen ">
      <DONQNFTNodes />
      <TeamAndAdvisers />
      <GallerySection />
      <FAQ />
      <DonthepiaLandingPage />
    </div>
  );
};

export default MainDark002;
