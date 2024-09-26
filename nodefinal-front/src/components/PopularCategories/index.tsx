import React from "react";
import SectionHeader from "../SectionHeaders";

const categories = [
  {
    id: 1,
    title: "NECKLACES",
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t1.jpg?v=1710145653&width=330",
  },
  {
    id: 2,
    title: "BRACELETS",
    imageUrl:
      " https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t3.jpg?v=1710145652",
  },
  {
    id: 3,
    title: "EARRINGS",
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t4.jpg?v=1710145652",
  },
  {
    id: 4,
    title: "RINGS",
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t2.jpg?v=1710145652",
  },
  {
    id: 5,
    title: "CHARM & DANGLES",
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t5.jpg?v=1710145652",
  },
  {
    id: 6,
    title: "GIFT IDEAS",
    imageUrl:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t6.jpg?v=1710145652",
  },
];

const PopularCategories = () => {
  return (
    <>
      <SectionHeader title="Popular Categories" desc="" />
      <section className="flex items-center justify-between max-w-[1400px] w-full mx-auto flex-wrap mt-10 mb-16">
        {categories.map(({ id, title, imageUrl }) => (
          <div
            key={id}
            className="w-[204px] h-[228px] flex flex-col items-center gap-4 group"
          >
            <picture className="rounded-full overflow-hidden">
              <img
                className="rounded-full h-[180px] w-[180px] group-hover:scale-105 transition-transform duration-300 object-cover"
                src={imageUrl}
                alt={title}
              />
            </picture>
            <div className="flex items-center justify-center mt-2 relative uppercase overflow-hidden group">
              <h2 className="z-10">{title}</h2>
              <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default PopularCategories;
