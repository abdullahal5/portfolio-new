"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className={`fixed bottom-5 right-5 ${
          isVisible ? "block" : "hidden"
        } border border-zinc-600 h-10 w-10 text-center flex items-center justify-center rounded-full z-50 dark:border-zinc-300`}
        onClick={scrollToTop}
      >
        <FaArrowUp
          fontSize={"1rem"}
          className="text-zinc-500 dark:text-zinc-300"
        />
      </button>
    </div>
  );
};

export default GoToTop;
