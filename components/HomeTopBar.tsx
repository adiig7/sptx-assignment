import React from 'react'
import Wallet from "./../assets/wallet.png";
import Image from "next/image";

const HomeTopBar = () => {
  return (
    <div className="w-full justify-between flex flex-row">
      <div className="w-fit">
        <span className="text-white font-semibold text-[24px] px-2 hover:cursor-pointer">
          Section
        </span>
        <div className="border-b-4 border-[#3772FF] ml-1 mt-1"></div>
      </div>

      <div className="w-52 bg-[#191B20] rounded-xl h-14 flex flex-row justify-between items-center hover:cursor-pointer">
        <Image
          src={Wallet}
          width={40}
          height={15}
          className="p-2"
          alt="Wallet"
        />
        <span className="text-white px-1 font-semibold">0.2 $XYZ</span>
        <div className="bg-[#A3E3FF] rounded-md text-[#3772FF] px-2 font-bold mr-2">
          Tier 1
        </div>
      </div>
    </div>
  );
}

export default HomeTopBar