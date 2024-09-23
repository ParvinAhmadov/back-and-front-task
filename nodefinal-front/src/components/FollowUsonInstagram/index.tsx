import React from "react";
import { FaInstagram } from "react-icons/fa";
import SectionHeader from "../SectionHeaders";

const FollowUsSection = () => {
  return (
    <>
      <SectionHeader title=" Follow Us on Instagram" desc="@bersky" />

      <section className="flex items-center justify-between max-w-[1400px] h-[335px] w-full mx-auto flex-wrap -mt-8">
        <div className="relative w-[212px] h-[212px] overflow-hidden group">
          <a href="https://www.instagram.com/p/C5CjrYqJWWn/">
            <img
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i1.jpg?v=1711684513"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="border border-white bg-white p-4 rounded-full">
                <FaInstagram className="text-black text-[20px]" />
              </div>
            </div>
          </a>
        </div>
        <div className="relative w-[212px] h-[212px] overflow-hidden group">
          <a href="https://www.instagram.com/p/C5CjrYqJWWn/">
            <img
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i2.jpg?v=1711684491"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="border border-white bg-white p-4 rounded-full">
                <FaInstagram className="text-black text-[20px]" />
              </div>
            </div>
          </a>
        </div>
        <div className="relative w-[212px] h-[212px] overflow-hidden group">
          <a href="https://www.instagram.com/p/C5CjrYqJWWn/">
            <img
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i3.jpg?v=1711684606"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="border border-white bg-white p-4 rounded-full">
                <FaInstagram className="text-black text-[20px]" />
              </div>
            </div>
          </a>
        </div>
        <div className="relative w-[212px] h-[212px] overflow-hidden group">
          <a href="https://www.instagram.com/p/C5CjrYqJWWn/">
            <img
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i4.jpg?v=1711684578"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="border border-white bg-white p-4 rounded-full">
                <FaInstagram className="text-black text-[20px]" />
              </div>
            </div>
          </a>
        </div>
        <div className="relative w-[212px] h-[212px] overflow-hidden group">
          <a href="https://www.instagram.com/p/C5CjrYqJWWn/">
            <img
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i5.jpg?v=1712894690"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="border border-white bg-white p-4 rounded-full">
                <FaInstagram className="text-black text-[20px]" />
              </div>
            </div>
          </a>
        </div>
        <div className="relative w-[212px] h-[212px] overflow-hidden group">
          <a href="https://www.instagram.com/p/C5CjrYqJWWn/">
            <img
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i6.jpg?v=1711684593"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="border border-white bg-white p-4 rounded-full">
                <FaInstagram className="text-black text-[20px]" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default FollowUsSection;
