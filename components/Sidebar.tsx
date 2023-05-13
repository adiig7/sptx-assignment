import React from 'react'
import Image from 'next/image';
import Logo from "./../assets/logo.png"
import Category from "./../assets/category.png"
import Path from "./../assets/path.png"
import Section2 from "./../assets/section2.png"
import Section3 from "./../assets/section3.png";
import Section4 from "./../assets/section4.png";
import Section5 from "./../assets/section5.png";
import Section6 from "./../assets/section6.png";
import Section7 from "./../assets/section7.png";
import Section8 from "./../assets/section8.png";
import Documentation from "./../assets/documentation.png";
import Language from "./../assets/language.png"
import ClosingIcon from "./../assets/closing_icon.png"
import Moon from "./../assets/moon.png"

const Sidebar = () => {
  return (
    <div className="fixed col-start-1 col-span-2 bg-black overflow-hidden">
      <aside
        id="logo-sidebar"
        className="top-0 left-0 z-40 mb-16 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-7 py-4 overflow-y-auto bg-black border-r border-gray-700">
          <div className="flex items-center pl-2.5 mb-5">
            <Image
              src={Logo}
              className="h-6 mr-3 sm:h-7"
              width={30}
              height={30}
              alt="Logo"
            />
            <div className="justify-between flex flex-row w-full">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Name
              </span>
              <Image
                className="ml-20"
                src={ClosingIcon}
                width={50}
                height={50}
                alt="Menu"
              />
            </div>
          </div>

          <ul className="space-y-2 font-medium">
            <li>
              <div className="flex items-center p-2 text-[#808191] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image src={Category} alt="Category" width={20} height={20} />
                <span className="ml-5 text-[20px]">Home</span>
              </div>
            </li>

            <li>
              <div className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image src={Path} alt="Path" width={20} height={20} />
                <span className="flex-1 ml-5 text-[20px] whitespace-nowrap">
                  Section 1
                </span>
              </div>
            </li>

            <li>
              <div className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image src={Section2} alt="Section2" width={20} height={20} />
                <span className="flex-1 ml-5 text-[20px] whitespace-nowrap">
                  Section 2
                </span>
              </div>
            </li>

            <li>
              <div className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image src={Section3} alt="Section3" width={20} height={20} />
                <span className="flex-1 ml-5 text-[20px] whitespace-nowrap">
                  Section 3
                </span>
              </div>
            </li>

            <li>
              <div className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image src={Section4} alt="Section4" width={20} height={20} />
                <span className="flex-1 ml-5 text-[20px] whitespace-nowrap">
                  Section 4
                </span>
              </div>
            </li>

            <li>
              <div className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image src={Section5} alt="Section5" width={20} height={20} />
                <span className="flex-1 ml-5 text-[20px] whitespace-nowrap">
                  Section 5
                </span>
              </div>
            </li>

            <li>
              <div className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image src={Section6} alt="Section6" width={20} height={20} />
                <span className="flex-1 ml-5 text-[20px] whitespace-nowrap">
                  Section 6
                </span>
              </div>
            </li>

            <li>
              <div className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image src={Section7} alt="Section7" width={20} height={20} />
                <span className="flex-1 ml-5 text-[20px] whitespace-nowrap">
                  Section 7
                </span>
              </div>
            </li>

            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 bg-[#353945]">
              <Image src={Section8} alt="Section8" width={20} height={20} />
              <span className="flex-1 ml-5 text-[20px] whitespace-nowrap">
                Section 8
              </span>
            </li>

            <li>
              <div className="flex items-center p-2 rounded-lg text-[#808191] hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image
                  src={Documentation}
                  alt="Documentation"
                  width={20}
                  height={20}
                />
                <span className="flex-1 ml-5 text-[20px] whitespace-nowrap">
                  Documentation
                </span>
              </div>
            </li>
          </ul>

          <div className="absolute bottom-0 left-0 flex-col mb-6 ml-1">
            <div className="flex gap-2 mb-4 w-full justify-center">
              <button className="bg-[#353945] text-white font-semibold rounded-xl p-[8px] w-28 h-10 items-center justify-center text-m flex gap-[6px]">
                <Image src={Logo} width={20} height={20} alt="Logo" />
                $0.90
              </button>
              <button className="bg-[#A3E3FF] rounded-xl text-[#3772FF] w-28 h-10 font-bold items-center justify-center text-m">
                Buy $XYZ
              </button>
            </div>
            <div className="flex gap-2 mt-8 ml-1">
              <div>
                <Image
                  src={Language}
                  alt="Language"
                  width={30}
                  height={30}
                  className="mt-1 gap-2"
                />
              </div>
              <div className=" flex flex-row p-2 bg-[#353945] rounded-full w-24 items-center justify-between">
                <Image
                  src={Moon}
                  alt="Moon"
                  width={25}
                  height={20}
                  className="cursor-pointer"
                />
                <div className="cursor-pointer bg-[#3772FF] w-6 rounded-full h-6" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar