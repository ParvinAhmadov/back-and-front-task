import React from "react";
import { LiaHomeSolid } from "react-icons/lia";

const FindShopsSection = () => {
  return (
    <section className="max-w-[1400px] h-[102px] w-full mx-auto bg-[#F9EBF9] flex items-center justify-center mb-[80px] ">
      <div className=" flex items-center justify-center gap-2 ">
        <div className="text-[30px]">
          <LiaHomeSolid />
        </div>
        <div className="text-[28px] flex items-center gap-4 ">
          Find Shops Near You
          <a className="text-[18px] border-2 border-black py-[5px] px-[30px] hover:bg-black hover:text-white transition ease-in-out duration-300 cursor-pointer">
            {" "}
            Find Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindShopsSection;
