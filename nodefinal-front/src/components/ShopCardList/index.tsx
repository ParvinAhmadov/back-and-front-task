import React from "react";
import { Card } from "@/types/types";
import Image from "next/image";
import { IoHeartOutline, IoSearchOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";

interface CardListProps {
  cards: Card[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => {
        const imageUrl = `http://localhost:3001${card.image}`;
        const image2Url = card.image2
          ? `http://localhost:3001${card.image2}`
          : null;

        return (
          <div key={card._id} className="group m-4 relative cursor-pointer">
            <div className="overflow-hidden relative w-[237px] h-[237px] mb-4">
              <Image
                width={337}
                height={337}
                alt={card.title}
                src={imageUrl}
                className="object-cover transition duration-500"
              />
              {image2Url && (
                <Image
                  width={237}
                  height={237}
                  alt={`${card.title}`}
                  src={image2Url}
                  className="object-cover  transition duration-500 group-hover:opacity-0 absolute top-0"
                />
              )}
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

            <div className="flex justify-center flex-col items-center">
              <p className="text-[18px]">{card.title}</p>

              <button className="h-[28px] group/item overflow-hidden mt-2">
                <div className="text-[18px] group-hover:-translate-y-[28px] transition duration-300">
                  <p>${card.price}</p>
                  <div className="w-fit cursor-pointer overflow-hidden">
                    <a className="text-lg relative uppercase">
                      ADD TO CARD
                      <span className="block h-[2px] w-full bg-gray-400 transition-all duration-300 group-hover/item:translate-x-full"></span>
                      <span className="absolute bottom-0 left-0 block h-[2px] w-full bg-black transition-all duration-300 transform -translate-x-full group-hover/item:translate-x-0"></span>
                    </a>
                  </div>
                </div>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
