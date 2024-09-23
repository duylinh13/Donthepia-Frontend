import React from "react";

const FreeCharactersSection = () => {
  return (
    <div className="w-full h-auto lg:h-[1080px] px-4 sm:px-10 lg:px-[202px] py-10 lg:py-[160px] bg-black relative">
      <div className="flex flex-wrap items-center">
        {/* Free Characters Title */}
        <div className="w-full lg:w-[76px] h-[76px] mb-6 lg:mb-[35px] mr-4 lg:mr-[22px] flex items-center">
          <span className="text-[40px] sm:text-[60px] lg:text-[100px] font-normal leading-none tracking-[-1px] lg:tracking-[-2px] text-[#f1302f]">
            Free Characters
          </span>
        </div>

        {/* Description Text */}
        <div className="w-full lg:w-[420px] h-auto mb-6 lg:mb-[78px] lg:ml-[900px] flex items-center">
          <span className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal leading-[1.6] text-[#fff]">
            DONQ NFT NODE 보유자는 DonThePia (Donquixote The Utopia) 생태계에서
            생성되는 다양한 NFT 캐릭터들을 무상으로 받을 수 있습니다. 보유한
            NFT의 가치가 상승하면, NFT 거래소를 통해서 거래를 할 수 있습니다.
          </span>
        </div>

        {/* Interest Farming Section */}
        <div className="w-full lg:w-[754px] h-auto mb-6 lg:mb-[19px] mr-4 lg:mr-[26px] ml-0 lg:ml-[3px] flex items-center">
          <span className="text-[40px] sm:text-[60px] lg:text-[100px] font-normal leading-none tracking-[-1px] lg:tracking-[-2px] text-[#fff]">
            Interest farming
          </span>
        </div>

        {/* Platform Section */}
        <div className="w-full lg:w-[396px] h-auto mb-6 lg:mb-[41px] mr-0 lg:mr-[384px] ml-0 lg:ml-[3px] flex items-center">
          <span className="text-[40px] sm:text-[60px] lg:text-[100px] font-normal leading-none tracking-[-1px] lg:tracking-[-2px] text-[#fff]">
            Platform
          </span>
        </div>

        {/* Governance Section */}
        <div className="w-full lg:w-[589px] h-auto mb-10 lg:mb-[337px] mr-0 lg:mr-[194px] flex items-center">
          <span className="text-[40px] sm:text-[60px] lg:text-[100px] font-normal leading-none tracking-[-1px] lg:tracking-[-2px] text-[#fff]">
            Governance
          </span>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-4 right-4 lg:bottom-[40px] lg:right-[40px] mb-4 lg:mb-[100px]">
        <span className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal leading-[1.6] text-[#a1a1a1] mr-8 lg:mr-[318px]">
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
