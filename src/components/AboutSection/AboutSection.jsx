import React from "react";
import bgImage from "../../assets/images/bg-donq-nft-nodes.png";
import smallImage from "../../assets/images/img-donq-nft-nodes.png"; // Ảnh nhỏ bạn muốn thêm chính giữa

const AboutSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-start items-end mt-10">
        <div className="mr-24">
          {/* Đoạn text đầu tiên */}
          <div>
            <h1 className="text-[48px] font-normal leading-[1.25] tracking-normal text-left text-white">
              About the antipathy of <br /> DONQ NFT Nodes
            </h1>
          </div>

          {/* Đoạn text thứ hai */}
          <div className="w-full max-w-[660px] text-[16px] md:text-[20px] font-normal leading-[1.6] tracking-normal text-left text-[#a1a1a1]">
            <p className="text-white">
              DONQ NFT Node는 20번의 반감기가 있습니다. <br />
              반감기에는 DONQ NFT NODE가 100ea ~ 500ea 생성될 때마다 DONQ가
              자동소각됩니다. <br />
              탈중앙화 방식으로 DONQ 코인 가격은 시장 유동성에 의해서 자유롭게
              결정됩니다.
            </p>
          </div>
        </div>

        {/* Ảnh nhỏ chính giữa */}
        <div className="absolute inset-0 flex justify-center items-center mt-[280px]">
          <img
            src={smallImage}
            alt="Small DONQ NFT Node"
            className="w-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
