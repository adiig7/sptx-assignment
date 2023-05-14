import React from 'react'
import WalletDetails from './WalletDetails';
import CustomLinkInput from "./CustomLinkInput"

const CustomLinkContainer = () => {
  return (
      <div className='fixed bg-black h-screen p-4 right-0 max-w-sm'>
      <WalletDetails />
      <CustomLinkInput />
      </div>
  )
}

export default CustomLinkContainer;