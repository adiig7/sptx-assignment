import React from 'react'
import Image from 'next/image'
import Avalanche from "./../assets/avalanche.png"
import DownArrow from "./../assets/down_arrow.png"
import Wallet from "./../assets/wallet.png"

const WalletDetails = () => {
    return (
      <div className="flex flex-row w-full justify-between">
        <div className="w-fit bg-[#353945] rounded-xl h-14 m-4 flex flex-row justify-between items-center">
          <Image
            src={Avalanche}
            width={40}
            height={20}
            className="p-1"
            alt="Avalanche"
          />
          <span className="text-white font-medium text-[18px] tracking-wider mr-4 ml-2">
            Avalanche
          </span>
          <Image
            src={DownArrow}
            width={15}
            height={15}
            className="mr-4"
            alt="Down arrow"
          />
        </div>

        <div className="w-fit bg-transparent rounded-xl border-[#3772FF] border-2 h-14 m-4 flex flex-row justify-between items-center">
          <Image
            src={Wallet}
            width={40}
            height={20}
            className="p-1 ml-2 mr-2"
            alt="Wallet"
          />
          <span className="text-white font-bold text-[18px] tracking-widest p-2 mx-2">
            0XF6...1353
          </span>
          <Image
            src={DownArrow}
            width={15}
            height={15}
            className="mr-4 ml-2"
            alt="Down arrow"
          />
        </div>
      </div>
    );
}

export default WalletDetails