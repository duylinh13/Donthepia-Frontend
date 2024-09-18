// FreeCharactersSection.jsx
import React from "react";

const FreeCharactersSection = () => {
  return (
    <div className="w-[1920px] h-[1080px] px-[202px] py-[160px] bg-black relative">
      <div className="flex flex-wrap items-center">
        {/* Existing Sections */}
        <div className="w-[76px] h-[76px] mb-[35px] mr-[22px] flex items-center">
          <span className="text-[100px] font-normal leading-[1] tracking-[-2px] text-[#f1302f]">
            Free Characters
          </span>
        </div>
        <div className="w-[420px] h-[147px] mb-[78px] ml-[900px] flex items-center">
          <span className="text-[20px] font-normal leading-[1.6] text-[#fff]">
            DONQ NFT NODE 보유자는 DonThePia (Donquixote The Utopia) 생태계에서
            생성되는 다양한 NFT 캐릭터들을 무상으로 받을 수 있습니다. 보유한
            NFT의 가치가 상승하면, NFT 거래소를 통해서 거래를 할 수 있습니다.
          </span>
        </div>
        <div className="w-[754px] h-[104px] mb-[19px] mr-[26px] ml-[3px] flex items-center">
          <span className="text-[100px] font-normal leading-[1] tracking-[-2px] text-[#fff]">
            Interest farming
          </span>
        </div>
        <div className="w-[396px] h-[79px] mb-[41px] mr-[384px] ml-[3px] flex items-center">
          <span className="text-[100px] font-normal leading-[1] tracking-[-2px] text-[#fff]">
            Platform
          </span>
        </div>
        <div className="w-[589px] h-[72px] mb-[337px] mr-[194px] flex items-center">
          <span className="text-[100px] font-normal leading-[1] tracking-[-2px] text-[#fff]">
            Governance
          </span>
        </div>
      </div>
      <div className="absolute bottom-[40px] right-[40px] mb-[100px]">
        <span className="text-[20px] font-normal leading-[1.6] text-[#a1a1a1] mr-[318px] ">
          DONQ NFT Nodes Holder
          <span className="text-style-1" style={{ letterSpacing: "-8px" }}>
            ’
          </span>
          s Benefits
        </span>
      </div>
    </div>
  );
};

export default FreeCharactersSection;
