import React from "react";
import Image from "next/image";
import SectionHeader from "../SectionHeaders";

const ReadJournalSection = () => {
  return (
    <>
      {" "}
      <SectionHeader
        title="Read Journal"
        desc="Latest trends and inspirations in fashion design."
      />
      <section className="flex items-center justify-between max-w-[1400px] h-[527px] w-full mx-auto flex-wrap -mt-6 border-b mb-[3%] ">
        <div className="w-[437px] h-[410px] flex flex-col gap-6">
          <div className="relative group overflow-hidden">
            <Image
              className="group-hover:scale-110 transition-transform duration-300 cursor-pointer"
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/3.jpg?v=1711695248&width=720"
              alt=""
              width={437}
              height={283}
            />
            <div className="bg-black w-fit text-white py-0.5 px-2 font-semibold text-sm absolute top-3 left-5">
              <p className="uppercase">ACCESSORIES</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start gap-2 text-[15px]">
              <p className="text-[#222222] font-sans">
                <span>POST BY</span> <span>ALUKAS SHOPIFY</span>
                <span>-</span>{" "}
                <span className="text-[#555555]">MAR 06 2024</span>
              </p>
              <h1 className="text-[26px] font-medium">
                {" "}
                Selective Styles Help your look
              </h1>
            </div>
            <div className="font-[15px]  w-fit cursor-pointer pt-5 overflow-hidden group">
              <button className="relative uppercase">
                Continue Reading
                <span className="block h-[2px] bg-[#222222] transition-all duration-300 group-hover:animate-slide"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[437px] h-[410px] flex flex-col gap-6">
          <div className="relative group overflow-hidden">
            <Image
              className="group-hover:scale-110 transition-transform duration-300 cursor-pointer"
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/2.jpg?v=1711695314&width=720"
              alt=""
              width={437}
              height={283}
            />
            <div className="bg-black w-fit text-white py-0.5 px-2 font-semibold text-sm absolute top-3 left-5">
              <p className="uppercase">ACCESSORIES</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start gap-2 text-[15px]">
              <p className="text-[#222222] font-sans">
                <span>POST BY</span> <span>ALUKAS SHOPIFY</span>
                <span>-</span>{" "}
                <span className="text-[#555555]">MAR 06 2024</span>
              </p>
              <h1 className="text-[26px] font-medium">
                {" "}
                Selective Styles Help your look
              </h1>
            </div>
            <div className="font-[15px]  w-fit cursor-pointer pt-5 overflow-hidden group">
              <button className="relative uppercase">
                Continue Reading
                <span className="block h-[2px] bg-[#222222] transition-all duration-300 group-hover:animate-slide"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[437px] h-[410px] flex flex-col gap-6">
          <div className="relative group overflow-hidden">
            <Image
              className="group-hover:scale-110 transition-transform duration-300 cursor-pointer"
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/1.jpg?v=1711695328&width=720"
              alt=""
              width={437}
              height={283}
            />
            <div className="bg-black w-fit text-white py-0.5 px-2 font-semibold text-sm absolute top-3 left-5">
              <p className="uppercase">ACCESSORIES</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start gap-2 text-[15px]">
              <p className="text-[#222222] font-sans">
                <span>POST BY</span> <span>ALUKAS SHOPIFY</span>
                <span>-</span>{" "}
                <span className="text-[#555555]">MAR 06 2024</span>
              </p>
              <h1 className="text-[26px] font-medium">
                {" "}
                Selective Styles Help your look
              </h1>
            </div>
            <div className="font-[15px]  w-fit cursor-pointer pt-5 overflow-hidden group">
              <button className="relative uppercase">
                Continue Reading
                <span className="block h-[2px] bg-[#222222] transition-all duration-300 group-hover:animate-slide"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadJournalSection;
