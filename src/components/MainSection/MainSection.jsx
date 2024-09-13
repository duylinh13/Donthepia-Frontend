import React from "react";
import imgAbout01 from "../../assets/images/img-about-01.png";
import imgAbout02 from "../../assets/images/img-about-02.png";
import "./MainSection.css";

const MainSection = () => {
  return (
    <section className="main-section flex flex-col lg:flex-row items-start py-10 bg-black  ">
      {/* Text Block */}
      <div className="text-block flex-1 lg:mr-12 mb-10 lg:mb-0 pt-[128px] pb-[91px] flex flex-col items-center lg:items-center">
        <h1 className="text-[64px] font-normal text-white leading-[1.25] mb-8 text-center lg:text-left">
          A digital adventure with
          <br />
          Donthepia, The beginning
          <br />
          of a decentralized art
          <br />
          That connects the world.
        </h1>
        <span className="w-[431px] h-[413px] text-[20px] font-normal leading-[1.6] text-left text-[#a1a1a1] overflow-hidden">
          돈키호테 유토피아에 오신 것을 환영합니다. 옛날 옛적, 돈키호테 유토피아
          세계에 전염병이 발생하며 모든 곳이 중앙집권식으로 오염되고 말았습니다.
          이 오염된 세계에서 우리는 새로운 모험을 시작합니다. 돈키호테는
          크루즈를 타고 세계 데이터의 바다를 항해합니다. 이 여정을 통해 분산화된
          친구, 돈통 유저 서버노드를 모아 최후의 보물섬으로 떠나는 것, 이는
          돈키호테의 여정이자 우리의 목표입니다. 이를 통해 블록체인의 탈중앙화의
          의미를 다시 찾아가려 합니다. 돈키호테와 함께 새로운 세계를 세우고,
          미래의 예술과 기술을 효과적으로 활용해보세요. 언제든 글로벌 DONQ
          NFT노드 구성에 합류할 수 있습니다. 지금 함께하시겠습니까?
        </span>
      </div>

      {/* Image Block */}
      <div className="image-block flex flex-col lg:flex-row items-center justify-center flex-1 relative gap-24 pt-[290px] pb-[90px]">
        <div className="flex flex-col justify-center relative mt-[154px]">
          <img
            src={imgAbout01}
            className="w-[386px] h-[396px] object-cover"
            alt="Detailed view of Donthepia's concept art 02"
          />
        </div>

        <div className="flex flex-col justify-center relative lg:-ml-[51px]">
          <img
            src={imgAbout02}
            className="w-full max-w-[386px] h-auto"
            alt="Detailed view of Donthepia's concept art 01"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
