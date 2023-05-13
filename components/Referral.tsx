import React from 'react'
import ReferralImage from "./../assets/referral_image.png"
import Copy from "./../assets/copy.png"
import Image from 'next/image'
// import api from "./../utils/api.tet"

const Referral = () => {

    return (
      <div
        className="bg-[#191B20] m-6 rounded-[16px] text-white p-8"
      >
        <div className="flex flex-row gap-3 items-center">
          <Image
            src={ReferralImage}
            width={30}
            height={25}
            alt="Referral Image"
          />
          <span className="text-2xl font-bold">
            12.5%
            <span className="text-2xl font-semibold"> of fee</span>
          </span>
        </div>
        <p className="text-[#808191] font-semibold mt-4 mb-4 text-xl tracking-widest">
          Your Referral link for xyz
        </p>
        <div className="bg-[#242731] mt-2 rounded-[8px] p-4">
          <div className="flex justify-between gap-8">
            <p className="font-bold text-xl">https://unityexchange.design</p>
            <Image src={Copy} alt="" />
          </div>
        </div>
      </div>
    );
    
}

export default Referral