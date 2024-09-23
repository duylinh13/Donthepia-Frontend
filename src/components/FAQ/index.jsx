import React from "react";

const FAQ = () => {
  return (
    <div className="container relative h-[1000px] w-full lg:w-[1920px]">
      {/* Left-side heading */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] mb-4 pt-10 md:pt-20 pl-4 md:pl-10 lg:pl-20">
            If you have questions,
            <br />
            see our FAQ
          </h1>
        </div>
      </div>

      {/* Right-side list */}
      <div className="absolute top-0 right-0 lg:right-[-250px] pt-[200px] sm:pt-[250px] md:pt-[300px] lg:pt-[350px] px-4 sm:px-8 lg:px-0">
        <ul className="space-y-4 sm:space-y-6">
          {Array.from({ length: 8 }, (_, index) => (
            <li
              key={index}
              className="flex flex-col justify-between items-start"
            >
              {/* Number */}
              <div className="flex justify-between items-center w-full">
                <span className="text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] ml-[150px] sm:ml-[200px] md:ml-[700px] lg:ml-[800px]">
                  {`0${index + 1}`}
                </span>
                {/* Korean text */}
                <span className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] ml-4 sm:ml-6 lg:ml-8">
                  NFT는 뭔가요? 이것은 어떻게 사용하나요?
                </span>
                {/* Plus or Red X */}
                {index === 0 ? (
                  <span className="text-red-600 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] ml-[20px] sm:ml-[50px] lg:ml-[150px]">
                    X
                  </span>
                ) : (
                  <span className="text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] ml-[20px] sm:ml-[50px] lg:ml-[150px]">
                    +
                  </span>
                )}
              </div>

              {/* Additional text for 01 */}
              {index === 0 && (
                <span className="text-white text-[12px] sm:text-[14px] md:text-[16px] mt-2 ml-[150px] sm:ml-[200px] md:ml-[900px] lg:ml-[940px]">
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
