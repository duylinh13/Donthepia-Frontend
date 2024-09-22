// src/pages/MainDark2/MainDark2.jsx
import React from "react";
import { Header } from "../components/Header/Header";
import ImageSection from "../components/ImageSection/ImageSection";
import MainSection from "../components/MainSection/MainSection";
import CommunitySection from "../components/CommunitySection/CommunitySection";
import AboutSection from "../../src/components/AboutSection/AboutSection";
import EcoSystemSection from "../components/EcoSystemSection/EcoSystemSection";
import FreeCharactersSection from "../../src/components/FreeCharactersSection/FreeCharactersSection";
import TokenInformationSection from "../components/TokenInformationSection/TokenInformationSection";

const MainDark2 = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <ImageSection />
      <MainSection />
      <CommunitySection />
      <AboutSection />
      <EcoSystemSection />
      <FreeCharactersSection />
      <TokenInformationSection />
    </div>
  );
};

export default MainDark2;
