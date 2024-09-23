import React from "react";
import pieChartImage from "../../assets/images/img-token-info.png"; // Adjust the path if necessary

const TokenInformationSection = () => {
  return (
    <section className="bg-black text-white py-16 px-8 h-auto">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <h2 className="font-poppins text-[32px] md:text-[64px] font-normal leading-[1.25] text-center text-white mb-[40px]">
          DONQ Token Information
        </h2>

        {/* Information Table */}
        <div className="mb-12 w-full overflow-x-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[20px] text-center border-b border-gray-600 pb-4 text-lg">
            <div>
              <p className="text-gray-400 text-[14px]">TOKEN INFORMATION</p>
              <p className="font-semibold">NODE</p>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">TOKEN SYMBOL</p>
              <p className="font-semibold">NODE</p>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">BLOCKCHAIN</p>
              <p className="font-semibold">BNB CHAIN</p>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">TOTAL SUPPLY</p>
              <p className="font-semibold">1,000,000,000</p>
            </div>
          </div>
        </div>

        {/* Content: Pie chart and token distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[40px]">
          {/* Left Side: Pie Chart Image */}
          <div className="flex justify-center">
            <img
              src={pieChartImage}
              alt="DONQ Token Distribution"
              className="w-[80%] max-w-[537px] h-auto object-contain"
            />
          </div>

          {/* Right Side: Distribution Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-lg gap-8 mt-4">
            <div className="space-y-8 mb-5">
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[36px] md:text-[48px] mb-2">
                  400,000,000
                </span>
                <span>Eco-System (40%)</span>
              </div>
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[36px] md:text-[48px] mb-2">
                  200,000,000
                </span>
                <span>Marketing (20%)</span>
              </div>
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[36px] md:text-[48px] mb-2">
                  100,000,000
                </span>
                <span>Circulation (10%)</span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[36px] md:text-[48px] mb-2">
                  100,000,000
                </span>
                <span>Company Reserves (10%)</span>
              </div>
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[36px] md:text-[48px] mb-2">
                  100,000,000
                </span>
                <span>Team / Advisor (10%)</span>
              </div>
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[36px] md:text-[48px] mb-2">
                  100,000,000
                </span>
                <span>Contributor (10%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInformationSection;
