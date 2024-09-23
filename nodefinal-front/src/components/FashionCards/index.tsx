import React from "react";

const FashionCards = () => {
  return (
    <section className="flex items-center justify-between max-w-[1400px] w-full mx-auto flex-wrap mt-10 mb-16">
    
        <div className="relative group overflow-hidden cursor-pointer w-[436px]">
          <picture>
            <img
              className="transition-transform duration-300 group-hover:scale-105 "
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_1.webp?v=1712128482"
              alt=""
            />
          </picture>
          <div className="absolute top-[20%] left-[10%] w-[150px] h-[135px] text-white">
            <p className="text-[16px] mb-1">2024 FASHION</p>
            <div>
              <h2 className="text-[25px]">Just Launched Desk The Hals</h2>
            </div>
            <div className="font-[15px] w-fit cursor-pointer pt-5 overflow-hidden group">
              <button className="relative uppercase">
                SHOP NOW
                <span className="block h-[2px] bg-white transition-all duration-300 group-hover:animate-slide"></span>
              </button>
            </div>
          </div>
              </div>
              <div className="relative group overflow-hidden cursor-pointer">
          <picture>
            <img
              className="transition-transform duration-300 group-hover:scale-105 "
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_1.webp?v=1712128482"
              alt=""
            />
          </picture>
          <div className="absolute top-[20%] left-[10%] w-[150px] h-[135px] text-white">
            <p className="text-[16px] mb-1">2024 FASHION</p>
            <div>
              <h2 className="text-[25px]">Just Launched Desk The Hals</h2>
            </div>
            <div className="font-[15px]  w-fit cursor-pointer pt-5 overflow-hidden group">
              <button className="relative uppercase">
                SHOP NOW
                <span className="block h-[2px] bg-white transition-all duration-300 group-hover:animate-slide"></span>
              </button>
            </div>
          </div>
              </div>
              <div className="relative group overflow-hidden cursor-pointer">
          <picture>
            <img
              className="transition-transform duration-300 group-hover:scale-105 "
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_1.webp?v=1712128482"
              alt=""
            />
          </picture>
          <div className="absolute top-[20%] left-[10%] w-[150px] h-[135px] text-white">
            <p className="text-[16px] mb-1">2024 FASHION</p>
            <div>
              <h2 className="text-[25px]">Just Launched Desk The Hals</h2>
            </div>
            <div className="font-[15px]  w-fit cursor-pointer pt-5 overflow-hidden group">
              <button className="relative uppercase">
                SHOP NOW
                <span className="block h-[2px] bg-white transition-all duration-300 group-hover:animate-slide"></span>
              </button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FashionCards;
