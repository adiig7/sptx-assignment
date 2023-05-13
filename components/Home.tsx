import React from 'react'
import Rewards from './Rewards';
import Referral from './Referral';
import TutorialBox from './TutorialBox';
import DataContainer from './DataContainer';
import HomeTopBar from './HomeTopBar';

const Center = () => {
  return (
    <div className=" bg-black col-start-2 col-span-4 p-8 border-r border-gray-700">
      <HomeTopBar />
      <TutorialBox />
      <Rewards />
      <div className="flex justify-between">
        <Referral />
        <Referral />
      </div>
      <DataContainer />
    </div>
  );
}

export default Center