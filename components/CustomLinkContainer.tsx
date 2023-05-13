import React from 'react'
import WalletDetails from './WalletDetails';
import CustomLinkInput from "./CustomLinkInput"

const CustomLinkContainer = () => {
  return (
      <div className='fixed bg-black h-screen col-end-8 col-span-1 p-4 right-0 w-[15%]'>
      <WalletDetails />
      <CustomLinkInput />
      </div>
  )
}

export default CustomLinkContainer;