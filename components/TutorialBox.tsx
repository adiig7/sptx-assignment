import React from 'react'
import Cross from "./../assets/cross.png";
import BitCoinContainer from "./../assets/bitcoin_container.png";
import Image from "next/image";
const TutorialBox = () => {
  return (
      <div className="bg-[#ABE8FF] p-4 rounded-lg mt-6 relative">
        <p className="font-semibold text-xl tracking-widest	">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex justify-between">
          <div>
            <button className="bg-white px-6 py-[6px] rounded-lg mt-6 font-semibold">
              Tutorial
            </button>
          </div>
              <Image
                src={BitCoinContainer}
                width={100}
                height={100}
                alt="Bitcoin container"
                className="overflow-visible"
              />
          </div>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 -top-2 -right-2 hover:cursor-pointer">
              <Image
                  src={Cross}
                  width={50}
                  height={50}
                  alt="close"
              />
          </div>
      </div>
  );
}

export default TutorialBox