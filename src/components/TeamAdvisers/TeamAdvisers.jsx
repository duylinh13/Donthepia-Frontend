import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamMember = ({ name, role, imageSrc }) => (
  <div className="bg-gray-800 rounded-lg p-4 text-white mb-4 md:mb-0">
    <img src={imageSrc} alt={name} className="w-12 h-12 rounded-full mb-2" />
    <h3 className="font-bold">{name}</h3>
    <p className="text-sm text-gray-400">{role}</p>
  </div>
);

const TeamAdvisers = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Team & Advisers for DONQ NFT Nodes
        </h1>

        <div className="flex justify-end mb-4">
          <button className="p-2 bg-gray-800 rounded-full mr-2">
            <ChevronLeft size={24} />
          </button>
          <button className="p-2 bg-gray-800 rounded-full">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <TeamMember
            name="홍길동"
            role="CEO & Founder"
            imageSrc="/api/placeholder/48/48"
          />
          <TeamMember
            name="홍길동"
            role="CTO"
            imageSrc="/api/placeholder/48/48"
          />
          <TeamMember
            name="홍길동"
            role="CFO"
            imageSrc="/api/placeholder/48/48"
          />
          <TeamMember
            name="홍길동"
            role="CMO"
            imageSrc="/api/placeholder/48/48"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamAdvisers;
