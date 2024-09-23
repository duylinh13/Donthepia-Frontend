// EcoSystemSection.jsx
import React from "react";
import ecoSystemBox from "../../assets/images/img-eco-system-box.png";

const EcoSystemSection = () => {
  return (
    <div className="w-[1920px] h-[1080px]   px-[48px] py-[140px] bg-black">
      {/* Your content here */}
      <h1 className="text-white text-[48px] md:text-[64px] mb-4">
        What is an <br /> Eco-System DONQ?
      </h1>
      <div className="w-full max-w-[571px] mt-[39px] mr-[19px] mb-[102px]">
        <p className="font-pretendard text-[16px] md:text-[20px] leading-[1.6] text-[#a1a1a1]">
          DONQ는 NFT와 T2E Trading, P2E Game을 결합하여 어떠한 거래에 대해서도
          중앙 기관이나 제3자에 의한 허가가 필요없는 DAO 조직을 형성하여
          유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고 확장할 수 있도록
          합니다.
        </p>
      </div>

      <div className="items-center">
        <div className="w-[1002px] h-[63px] mt-[102px] mr-[259px] mb-[39px] ml-[409px]">
          <h1 className="font-poppins text-[80px] leading-[1] text-[#232323] text-center">
            What does DAO stand for
          </h1>
        </div>

        {/* Insert the new section here */}
        <div className="bg-[#000] flex justify-center border-t border-b border-gray-400 px-6 py-4 relative">
          <span className="What-is-T2E w-[485px] h-[62px] mx-[43px] my-[23px] font-poppins text-[80px] leading-[1] text-center text-[#fff]">
            What is T2E?
          </span>
          <span className="What-is-T2E w-[485px] h-[62px] mx-[43px] my-[23px] font-poppins text-[80px] leading-[1] text-center text-[#fff]">
            What is T2E?
          </span>
          <span className="What-is-T2E w-[485px] h-[62px] mx-[43px] my-[23px] font-poppins text-[80px] leading-[1] text-center text-[#fff]">
            What is T2E?
          </span>

          {/* Add the image overlaid here */}
          <img
            src={ecoSystemBox}
            alt="Eco System Box"
            className="absolute w-auto object-contain top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="w-[1002px] h-[63px] mt-[70px] mr-[259px] mb-[39px] ml-[409px]">
          <h1 className="font-poppins text-[80px] leading-[1] text-[#232323] text-center">
            Know about P2E
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EcoSystemSection;
