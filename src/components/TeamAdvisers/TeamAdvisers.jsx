import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamMember = ({ name, imageSrc }) => (
  <div className="bg-[#1C1C1C] rounded-lg p-6 text-white w-[480px] h-[200px] mx-2 flex flex-col justify-between">
    <div>
      <p className="text-xs text-gray-400 line-clamp-3 mb-4">
        T2E Trading 은 코인 거래차트에 대한 교육, 트레이더들의 노하우나
        투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육
        상품입니다.
      </p>
    </div>
    <div className="flex items-center">
      <img src={imageSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-xs text-gray-400">Gil Dong Hong</p>
      </div>
    </div>
  </div>
);

const TeamAdvisers = () => {
  return (
    <div className="bg-black text-white w-[1920px] h-[1080px]">
      <div className="relative h-full flex flex-col items-center justify-center">
        <h1 className="text-left text-white text-[64px] font-normal leading-tight mb-12 ml-[800px]">
          Team & Advisers for
          <br />
          DONQ NFT Nodes
        </h1>

        <div className="flex justify-center mb-20 mr-[1500px] mt-28">
          <button className="p-2 bg-[#1C1C1C] rounded-full mr-2">
            <ChevronLeft size={24} />
          </button>
          <button className="p-2 bg-[#1C1C1C] rounded-full">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center overflow-x-auto pb-8">
          <div className="mt-10">
            {" "}
            {/* 1st member: 10px up */}
            <TeamMember
              name="홍길동"
              imageSrc="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
            />
          </div>
          <div className="mt-30">
            {" "}
            {/* 2nd member: 30px down */}
            <TeamMember
              name="홍길동"
              imageSrc="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
            />
          </div>
          <div className="mt-20">
            {" "}
            {/* 3rd member: 20px up */}
            <TeamMember
              name="홍길동"
              imageSrc="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
            />
          </div>
          <div className="mt-25">
            {" "}
            {/* 4th member: 40px down */}
            <TeamMember
              name="홍길동"
              imageSrc="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAdvisers;
