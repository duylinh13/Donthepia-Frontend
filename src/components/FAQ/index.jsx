import React from "react";

const FAQ = () => {
  return (
    <div className="container h-[1000px] relative">
      {/* Left-side heading */}
      <div className="flex justify-between ">
        <div>
          <h1 className="text-white text-[64px] mb-4 pt-20 pl-20 ">
            If you have questions,
            <br />
            see our FAQ
          </h1>
        </div>
      </div>

      {/* Right-side list */}
      <div className="absolute top-0 right-[-250px] pt-[350px]">
        <ul className="space-y-6">
          {Array.from({ length: 8 }, (_, index) => (
            <li
              key={index}
              className="flex flex-col justify-between items-start"
            >
              {/* Number */}
              <div className="flex justify-between items-center w-full">
                <span className="text-white text-[24px] ml-[800px]">{`0${
                  index + 1
                }`}</span>
                {/* Korean text */}
                <span className="text-white text-[24px] ml-8">
                  NFT는 뭔가요? 이것은 어떻게 사용하나요?
                </span>
                {/* Plus or Red X */}
                {index === 0 ? (
                  <span className="text-red-600 text-[24px] ml-[150px]">X</span>
                ) : (
                  <span className="text-white text-[24px] ml-[150px]">+</span>
                )}
              </div>

              {/* Additional text for 01 */}
              {index === 0 && (
                <span className="text-white text-[16px] mt-2 ml-[940px]">
                  FAQ에 대한 답변이 들어갑니다. NFT는 홈페이지 메인에서 NFT 구매
                  버튼을 통해 구매할 수 있습니다.
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
