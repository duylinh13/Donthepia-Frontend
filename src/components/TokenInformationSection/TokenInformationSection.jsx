import React from "react";
import pieChartImage from "../../assets/images/img-token-info.png"; // Adjust the path if necessary

const TokenInformationSection = () => {
  return (
    <section className="bg-black text-white py-16 px-8 h-[1080px] w-[1920px]">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <h2 className="font-poppins text-[64px] font-normal leading-[1.25] text-center text-white mb-[79px]">
          DONQ Token Information
        </h2>

        {/* Information Table */}
        <div className="mb-12 w-[1516px] -ml-20">
          <div className="grid grid-cols-4 gap-[200px] text-center border-b border-gray-600 pb-4 text-lg text-[16px] border-t pt-4">
            <div>
              <p className="text-gray-400 text-[16px]">TAKEN INFORMATION</p>
              <p className="font-semibold">NODE</p>
            </div>
            <div>
              <p className="text-gray-400">TAKEN SYMBOL</p>
              <p className="font-semibold">NODE</p>
            </div>
            <div>
              <p className="text-gray-400">BLOCKCHAIN</p>
              <p className="font-semibold">BNB CHAIN</p>
            </div>
            <div>
              <p className="text-gray-400">TOTAL SUPPLY</p>
              <p className="font-semibold">1,000,000,000</p>
            </div>
          </div>
        </div>

        {/* Content: Pie chart and token distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-[92px]">
          {/* Left Side: Pie Chart Image */}
          <div className="flex justify-center lg:justify-end items-center">
            <img
              src={pieChartImage}
              alt="DONQ Token Distribution"
              className="w-[537px] h-[461px] object-contain"
            />
          </div>

          {/* Right Side: Distribution Data */}
          <div className="grid grid-cols-2 text-lg gap-20 mt-20">
            <div className="space-y-20 mb-5">
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[48px] mb-4">400,000,000</span>
                <span>Eco-System (40%)</span>
              </div>
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[48px] mb-4">200,000,000</span>
                <span>Marketing (20%)</span>
              </div>
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[48px] mb-4">100,000,000</span>
                <span>Circulation (10%)</span>
              </div>
            </div>
            <div className="space-y-20">
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[48px] mb-4">100,000,000</span>
                <span>Company Reserves (10%)</span>
              </div>
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[48px] mb-4">100,000,000</span>
                <span>Team / Advisor (10%)</span>
              </div>
              <div className="flex flex-col items-end text-[16px]">
                <span className="text-[48px] mb-4">100,000,000</span>
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
