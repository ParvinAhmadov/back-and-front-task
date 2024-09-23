"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/scss";
import { BiSolidCommentDetail } from "react-icons/bi";
import SectionHeader from "../SectionHeaders";

const CustumerReviewSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const reviews = [
    {
      title: "Alukas is my favourite store",
      review:
        "Great products and designs and such great quality, they always wash up well no matter how many times I wash them.",
      rating: 5,
      name: "- Donald Duclk -",
    },
    {
      title: "Amazing Jewelry!",
      review:
        "The necklace I bought was amazing. My wife loved it. The delivery was fast, and the customer service was great.",
      rating: 4,
      name: "Alice Johnson",
    },
    {
      title: "Beautiful Bracelet",
      review:
        "Beautiful bracelet, but the clasp was a bit loose. Overall, I'm happy with the purchase.",
      rating: 4,
      name: "Emily Clark",
    },
    {
      title: "Stunning Ring",
      review:
        "This ring is stunning! The craftsmanship is excellent, and it arrived in perfect condition.",
      rating: 5,
      name: "Michael Lee",
    },
  ];

  const handlePrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="relative w-full mt-10 mb-16 h-[584px] flex justify-center items-center">
      <picture>
      <img
        src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_bg_testi.jpg?v=1711954099"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      </picture>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1440px] h-[455px]">
        <SectionHeader title=" Customer Review" desc="" />

        <div className="flex justify-center max-w-[1380px]">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={10}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            className="w-full mt-5"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                <div className="bg-white bg-opacity-90 shadow-lg p-6 text-center relative w-[447px] h-[290px]">
                  <div className="flex justify-start mb-4">
                    <BiSolidCommentDetail className="w-[40px] h-[40px] text-black " />
                  </div>

                  <h3 className="font-semibold flex justify-start text-[18px] mb-2">
                    {review.title}
                  </h3>

                  <p className="text-[18px] text-gray-600 mb-4 text-left">
                    {review.review}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="text-orange-500 text-[18px] flex items-center"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-black text-[18px]">
                      {review.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-[#222222] opacity-0 hover:opacity-100 transition-opacity duration-300"
        type="button"
      >
        <BsChevronLeft size={40} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-[#222222] opacity-0 hover:opacity-100 transition-opacity duration-300"
        type="button"
      >
        <BsChevronRight size={40} />
      </button>
    </section>
  );
};

export default CustumerReviewSection;
