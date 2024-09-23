import React from "react";

const BigCardSection = () => {
  return (
    <section className="flex items-center justify-between max-w-[1400px] w-full mx-auto flex-wrap mt-10 mb-16">
      <div className="relative group overflow-hidden cursor-pointer w-[670px] h-[405px]">
        <picture>
          <img
            className=" w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_4.jpg?v=1710149492"
            alt=""
          />
        </picture>
        <div className="absolute top-[20%] left-[10%] w-[150px] h-[135px] text-[#222222]">
          <div>
            <h2 className="text-[27px] leading-tight whitespace-pre-line">
              New Bangles Collection
            </h2>
          </div>
          <p className="text-[18px] w-[590px] text-[#555555] mt-2">
            Catch the highlight in the roof{" "}
          </p>

          <div className="font-[15px]  w-fit cursor-pointer pt-5 overflow-hidden group">
            <button className="relative uppercase">
              SHOP NOW
              <span className="block h-[2px] bg-[#222222] transition-all duration-300 group-hover:animate-slide"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative group overflow-hidden cursor-pointer w-[670px] h-[405px]">
        <picture>
          <img
            className=" w-full object-cover transition-transform duration-300 group-hover:scale-110 "
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_5.jpg?v=1710149492"
            alt=""
          />
        </picture>
        <div className="absolute top-[20%] left-[10%] w-[150px] h-[135px] text-[#222222]">
          <div>
            <h2 className="text-[27px] leading-tight whitespace-pre-line">
              Culture of Ring Design
            </h2>
          </div>
          <p className="text-[18px] w-[590px] text-[#555555] mt-2">
            Pasha de Cartier Collection.{" "}
          </p>

          <div className="font-[15px]  w-fit cursor-pointer pt-5 overflow-hidden group">
            <button className="relative uppercase">
              SHOP NOW
              <span className="block h-[2px] bg-[#222222] transition-all duration-300 group-hover:animate-slide"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigCardSection;
