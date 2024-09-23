"use client";
import React, { useEffect, useState } from "react";
import { TfiAngleUp } from "react-icons/tfi";

const UpButton: React.FC = () => {
  const [showUpButton, setShowUpButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrollPercentage);

      setShowUpButton(scrollTop > 300);
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showUpButton ? (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 right-6 w-[50px] h-[50px] bg-white text-xl flex items-center justify-center rounded-full shadow-md transition"
    >
      <TfiAngleUp className="absolute text-black" />
      <div
        className="bg-black w-full h-full rounded-full flex items-center justify-center"
        style={{
          clipPath: `inset(${100 - scrollProgress}% 0 0 0)`,
        }}
      >
        <TfiAngleUp className="absolute text-white" />
      </div>
    </button>
  ) : null;
};

export default UpButton;
