import { SectionHeaderProps } from "@/types/types";
import React from "react";

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center text-[40px] mb-[5px]">
      <h1>{title}</h1>
      <p className="text-[20px] text-[#555555]">{desc}</p>
    </div>
  );
};

export default SectionHeader;
