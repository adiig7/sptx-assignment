import React from "react";
import CustomLink from "./../assets/custom_link.png"
import Image from "next/image";

const Rewards = () => {
  return (
    <div className="bg-[#191B20] mt-4 p-4 rounded-[24px] text-white flex justify-between">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold p-4">Your Rewards</h2>
        <h1 className="text-3xl font-bold mb-4 p-4">$ 0.26231428</h1>
        <div className="flex flex-row gap-3 p-4 mb-4">
          <button className="bg-gray-700 rounded-2xl font-bold px-4 py-2 text-[16px] text-md">
            $40 AVAX
          </button>
          <button className="bg-gray-700 rounded-2xl font-bold px-4 py-2 text-[16px]  text-md">
            $10 BNB
          </button>
          <button className="bg-gray-700 rounded-2xl font-bold px-4 py-2 text-[16px]  text-md">
            $210 BTC
          </button>
        </div>
      </div>
      <div className="self-center p-4">
        <button
          type="button"
          className="text-white text-xl px-6 py-2.5 text-center gap-3 rounded-[10px] bg-blue-500
                   hover:bg-blue-400 focus:ring-4 focus:ring-blue-300
           focus:outline-none font-medium rounded-lg inline-flex items-center"
        >
          <Image src={CustomLink} width={20} height={20} alt="Custom Link" />
          Custom link
        </button>
      </div>
    </div>
  );
};

export default Rewards;
