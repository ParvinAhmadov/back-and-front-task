import { AutumnCollectionSectionProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { IoHeartOutline, IoSearchOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";

const AutumnCollectionSection: React.FC<AutumnCollectionSectionProps> = ({
  Autbrand,
  Auttitle,
  Autprice,
  AutimageUrl1,
  AutimageUrl2,
}) => {
  return (
    <div className="group">
      <div className="overflow-hidden relative">
        <div className="relative w-[320px] h-[320px]">
          <Image
            width={320}
            height={320}
            alt={Auttitle}
            src={AutimageUrl1}
            className="object-cover group-hover:scale-110 transition duration-500"
          />
          <Image
            width={320}
            height={320}
            alt={Auttitle}
            src={AutimageUrl2}
            className="object-cover group-hover:scale-110 transition duration-500 group-hover:opacity-0 absolute top-0"
          />
        </div>

        <div className="absolute flex flex-col gap-2 top-2 right-0 opacity-0 group-hover:opacity-100 transition duration-500 z-[1] group-hover:-translate-x-[10px]">
          <button className="bg-white text-xl w-[38px] h-[40px] rounded-full flex items-center justify-center transition duration-500 hover:bg-black hover:text-white">
            <IoHeartOutline />
          </button>
          <button className="bg-white text-xl w-[38px] h-[40px] rounded-full flex items-center justify-center transition duration-500 hover:bg-black hover:text-white">
            <SlRefresh />
          </button>
          <button className="bg-white text-2xl w-[38px] h-[40px] rounded-full flex items-center justify-center transition duration-500 hover:bg-black hover:text-white">
            <IoSearchOutline />
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center">
        <p className="text-[14px] uppercase text-gray-400">{Autbrand}</p>
        <p className="text-[18px]">{Auttitle}</p>

        <button className="h-[28px] group/item overflow-hidden mt-2">
          <div className="text-[18px] group-hover:-translate-y-[28px] transition duration-300">
            <p>{Autprice}</p>
            <div className="w-fit cursor-pointer overflow-hidden ">
              <a className="text-lg relative uppercase">
                Shop Now
                <span className="block h-[2px] w-full bg-gray-400 transition-all duration-300 group-hover/item:translate-x-full"></span>
                <span className="absolute bottom-0 left-0 block h-[2px] w-full bg-black transition-all duration-300 transform -translate-x-full group-hover/item:translate-x-0"></span>
              </a>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
export default AutumnCollectionSection;
