import React from "react";
import loadmap from "../../assets/images/img-loadmap.png";

const DONQNFTNodes = () => {
  return (
    <div className="container">
      <div className="flex justify-content-between">
        <div>
          <h1 className="text-white text-[64px] mb-4 pt-20 pl-20">
            Roadmap for <br />
            DONQ NFT Nodes
          </h1>
          <div className="w-[571px] h-[115px] mt-[39px] mr-[19px] mb-[102px] pl-20">
            <p className="font-pretendard text-[20px] leading-[1.6] text-[#a1a1a1]">
              DONQ는 NFT와 T2E Trading , P2E Game을 결합하여 어떠한 거래에
              대해서도 중앙 기관이나 제3자에 의한 허가가 필요 없는 DAO 조직을
              형성하여 유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고
              확장할 수 있도록 합니다.
            </p>
          </div>
        </div>
        <img
          src={loadmap}
          className="w-full h-[748px] object-cover"
          alt="map"
          style={{ margin: "77px 0 0 441px" }}
        />
      </div>
    </div>
  );
};

export default DONQNFTNodes;
