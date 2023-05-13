import React from 'react'
import WalletDetails from './WalletDetails';
import CustomLinkInput from "./CustomLinkInput"

const CustomLinkContainer = () => {
  return (
      <div className='fixed bg-black h-screen col-end-13 col-span-2 p-4 right-0'>
      <WalletDetails />
      <CustomLinkInput />
      </div>
  )
}

export default CustomLinkContainer;