"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ImagesSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      src: "https://demo-alukas.myshopify.com/cdn/shop/files/alk_s3.jpg?v=1710139620&width=2400",
      title: "A Minimalistic\nDesign Masculine",
      subtitle: "Awesome products for the dynamic urban lifestyle",
      buttonText: "Shop Now",
    },
    {
      src: "https://demo-alukas.myshopify.com/cdn/shop/files/save_web_slide1_resize.jpg?v=1711681053&width=1800",
      title: "Introducing The\nLost Day Collection",
      subtitle: "Ring, Occasion Pieces, Pandora & more collection",
      buttonText: "Shop Now",
    },
    {
      src: "https://demo-alukas.myshopify.com/cdn/shop/files/alk_s2.jpg?v=1710139621&width=1800",
      title: "New S/S 2024\nAmazing collections",
      subtitle: "A symbol of love and a modern take on gold.",
      buttonText: "Shop Now",
    },
  ];

  const handlePrevious = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden group">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          className="w-full h-full object-cover"
          src={slides[currentIndex].src}
          alt="Slide Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }}
        />
      </AnimatePresence>

      <div className="absolute top-[28%] left-[9%] w-[685px] h-[450px]">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-[50px] text-[#222222] leading-tight whitespace-pre-line">
            {slides[currentIndex].title}
          </h2>
        </motion.div>

        <motion.div
          key={currentIndex + "-subtitle"}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-[24px] text-[#555555] mt-2">
            {slides[currentIndex].subtitle}
          </p>
        </motion.div>

        <motion.div
          key={currentIndex + "-button"}
          className="mt-[45px] inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <button className="py-[10px] px-[45px] border-2 text-[#222222] border-[#222222] text-[18px] hover:bg-[#222222] hover:text-white transition-colors duration-300">
            {slides[currentIndex].buttonText}
          </button>
        </motion.div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-[#222222] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        type="button"
      >
        <BsChevronLeft size={40} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-[#222222] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        type="button"
      >
        <BsChevronRight size={40} />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === idx
                ? "border border-black bg-black"
                : "border border-black"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImagesSwiper;
