import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import CustomLink from "./../assets/custom_link.png"
import Cancel from "./../assets/cancel.png"
import LeftArrow from "./../assets/left_arrow.png"
import fetch from 'isomorphic-fetch'; // or 'node-fetch' if you prefer

const CustomLinkInput = () => {
async function getData() {
  const res = await fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log(data)
  return data;
}

    return (
      <div className="flex flex-col">
        <div className="m-4 p-4 flex flex-row">
          <Image src={LeftArrow} width={15} height={15} alt="Left arrow" />
          <p className="text-white text-2xl ml-8">Custom Link</p>
        </div>
        <span className="text-white text-2xl tracking-normal text-[20px] font-semibold p-4 ml-8">
          https://testnet.xyz.xyz/trade?ref=
        </span>
        <input
          type="text"
          className="w-108 bg-[#242731] h-16 mx-8 rounded-[12px] p-8 mt-2"
          placeholder="ENTER"
        />
        <div className="flex flex-row mx-8 mt-8 items-center justify-center gap-6">
          <button
            type="button"
            onClick={getData}
            className="text-white text-xl px-6 py-2.5 text-center gap-3 rounded-[10px] bg-blue-500
                   hover:bg-blue-400 focus:ring-4 focus:ring-blue-300
           focus:outline-none font-medium rounded-lg inline-flex items-center"
          >
            <Image src={CustomLink} width={20} height={20} alt="Custom Link" />
            Custom link
          </button>

          <button
            type="button"
            className="text-white text-xl px-6 py-2.5 text-center gap-3 rounded-[10px] bg-transparent border-2 border-[#242731] 
                       rounded-[12px] hover:cursor-pointer focus:ring-4 focus:ring-blue-300 px-4 
           focus:outline-none font-medium rounded-lg inline-flex items-center"
          >
            <Image src={Cancel} width={20} height={20} alt="Cancel" />
            Cancel
          </button>
        </div>
        {/* <p>{props.ninjas}</p> */}
      </div>
    );
}

export default CustomLinkInput