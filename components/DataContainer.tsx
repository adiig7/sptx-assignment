'use client'
import React from 'react'
import Image from 'next/image';
import BTC from "./../assets/btc.png"
import fetch from 'isomorphic-fetch'; // or 'node-fetch' if you prefer

const DataContainer = () => {
  async function getData() {
    const res = await fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    const result = data.data;
    console.log(data);
    
    return data;
  }
  return (
    <div className="mt-2 flex-col mb-4">
      <div className="flex gap-8">
        <div className="w-fit">
          <span className="text-white font-semibold text-[24px] px-2 tracking-wider hover:cursor-pointer">
            First Tab
          </span>
          <div className="border-b-4 border-[#3772FF] ml-1 mt-1 "></div>
        </div>

        <div className="w-fit" onClick={getData}>
          <span className="text-white font-semibold text-[24px] px-2 tracking-wider hover:cursor-pointer">
            Second Tab
          </span>
        </div>
      </div>

      <div>
        <div className="overflow-x-auto shadow-md mt-4 sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs bg-[#191B20]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ASSET
                </th>
                <th scope="col" className="px-6 py-3">
                  AMOUNT
                </th>
                <th scope="col" className="px-6 py-3">
                  USER ACCOUNT
                </th>
                <th scope="col" className="px-6 py-3">
                  REFERRAL EARNING
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#24273166] text-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white flex gap-2 text-center"
                >
                  <Image src={BTC} height={20} width={30} alt="" />
                  <div className="flex-col">
                    <p className="text-left">Bitcoin</p>
                    <div className="flex gap-2">
                      <p className="text-xs text-gray-400">Put</p>
                      {/* <Image src={AVAX} alt="" /> */}
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4 flex-col">
                  <p>0.0000 BNB</p>
                  <p className="text-xs text-gray-400">Expired</p>
                </td>
                <td className="px-6 py-4">0xFbE..0f58A7D</td>
                <td className="px-6 py-4 flex-col">
                  <p>0.000.BNB</p>
                  <p className="text-xs text-gray-400 cursor-pointer">
                    View on BSC Scan
                  </p>
                </td>
              </tr>
              <tr className="bg-[#24273166] text-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white flex gap-2 text-center"
                >
                  <Image src={BTC} height={20} width={30} alt="" />
                  <div className="flex-col">
                    <p className="text-left">Bitcoin</p>
                    <div className="flex gap-2">
                      <p className="text-xs text-gray-400">Put</p>
                      {/* <Image src={AVAX} alt="" /> */}
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4 flex-col">
                  <p>0.0000 BNB</p>
                  <p className="text-xs text-gray-400">Expired</p>
                </td>
                <td className="px-6 py-4">0xFbE..0f58A7D</td>
                <td className="px-6 py-4 flex-col">
                  <p>0.000.BNB</p>
                  <p className="text-xs text-gray-400 cursor-pointer">
                    View on BSC Scan
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataContainer