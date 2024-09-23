import React from "react";
import imgAbout01 from "../../assets/images/img-about-01.png";
import imgAbout02 from "../../assets/images/img-about-02.png";

const MainSection = () => {
  return (
    <section className="main-section flex flex-col lg:flex-row items-start py-10 bg-black w-full max-w-[1920px] mx-auto">
      {/* Text Block */}
      <div className="text-block flex-1 lg:mr-12 mb-10 lg:mb-0 pt-10 md:pt-20 pb-10 md:pb-14 px-6 lg:px-20 text-center lg:text-left">
        <h1 className="text-[28px] md:text-[40px] lg:text-[56px] font-normal text-white leading-tight mb-6 lg:mb-8">
          A digital adventure with
          <br />
          Donthepia, The beginning
          <br />
          of a decentralized art
          <br />
          That connects the world.
        </h1>
        <p className="w-full max-w-[431px] mx-auto lg:mx-0 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-[#a1a1a1]">
          돈키호테 유토피아에 오신 것을 환영합니다. 옛날 옛적, 돈키호테 유토피아
          세계에 전염병이 발생하며 모든 곳이 중앙집권식으로 오염되고 말았습니다.
          이 오염된 세계에서 우리는 새로운 모험을 시작합니다. 돈키호테는
          크루즈를 타고 세계 데이터의 바다를 항해합니다. 이 여정을 통해 분산화된
          친구, 돈통 유저 서버노드를 모아 최후의 보물섬으로 떠나는 것, 이는
          돈키호테의 여정이자 우리의 목표입니다.
        </p>
      </div>

      {/* Image Block (hidden on smaller screens) */}
      <div className="image-block hidden lg:flex flex-col lg:flex-row items-center justify-center flex-1 gap-8 lg:gap-12 px-6 lg:px-20">
        <div className="flex justify-center">
          <img
            src={imgAbout01}
            className="w-full max-w-[300px] lg:max-w-[400px] h-auto object-cover"
            alt="Concept art 01"
          />
        </div>

        <div className="flex justify-center lg:-ml-6">
          <img
            src={imgAbout02}
            className="w-full max-w-[300px] lg:max-w-[400px] h-auto object-cover"
            alt="Concept art 02"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
