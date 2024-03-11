"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Projects = () => {
  const [input, setInput] = useState("");
  //   console.log(input);

  const getInputText = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="lg:pt-32 md:pt-32 pt-5 lg:mx-10 md:mx-10 mx-5">
        <h1 className="text-4xl font-bold text-zinc-600 dark:text-zinc-300">
          Things I&apos;ve built that prove my skills and capacity regarding the
          technologies I mentioned.
        </h1>
        <h1 className="text-sm py-3 text-zinc-600 dark:text-zinc-300">
          I&apos;ve worked on a few personal projects over the years, but these
          are the ones that I want to showcase in my portfolio. You can check
          out the codebase and live site.
        </h1>
        <div className="py-10 flex lg:flex-row md:flex-row flex-col items-center lg:justify-between md:justify-between justify-center lg:gap-0 md:gap-0 gap-10">
          <span className="text-violet-500 text-xl font-semibold border rounded-full px-5 py-3 border-violet-500 dark:bg-black bg-white">
            All Projects {input.length > 0 ? "(4 project)" : ""}
          </span>
          <div className="relative">
            <input
              onChange={getInputText}
              value={input}
              type="text"
              placeholder="Search Project"
              className="dark:bg-black rounded-full border-violet-500 dark:text-zinc-300 text-zinc-600 border outline-none bg-white py-3 pl-5 pr-10"
            />
            {input?.length > 0 ? (
              <RxCross2
                onClick={() => setInput("")}
                className="absolute right-4 top-4 text-zinc-600 dark:text-zinc-300 hover:bg-500 cursor-pointer"
              />
            ) : (
              <FaSearch className="absolute top-4 right-4 text-zinc-600 dark:text-zinc-300" />
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
            <div className="border lg:w-[500px] md:w-[500px] w-[300px] bg-[url('https://i.ibb.co/Z1yyQvG/download-1.jpg')] lg:h-[300px] md:h-[300] h-52 duration-300 transform hover:scale-105 rounded-lg relative dark:border-neutral-800 cursor-pointer">
              <div className="bg-gradient-to-b from-white from-[0%] via-neutral-900 via-[75%] to-neutral-950 to-[100%] h-full opacity-60 rounded-lg">
                <div className="flex items-end justify-start">
                  <div className="absolute bottom-5 left-5">
                    <h1 className="text-[45px] font-bold bg-gradient-to-r from-white from-[100%] to-white to-[100%] bg-clip-text text-transparent">
                      EchoScript
                    </h1>
                    <p className="text-lg font-bold bg-gradient-to-r from-white from-[100%] to-white to-[100%] bg-clip-text text-transparent">
                      Portfolio website
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border lg:w-[500px] md:w-[500px] w-[300px] bg-[url('https://i.ibb.co/9t5Mk8r/images.jpg')] lg:h-[300px] md:h-[300] h-52 duration-300 transform hover:scale-105 rounded-lg relative dark:border-neutral-800 cursor-pointer">
              <div className="bg-gradient-to-b from-white from-[0%] via-neutral-900 via-[75%] to-neutral-950 to-[100%] h-full opacity-60 rounded-lg">
                <div className="flex items-end justify-start">
                  <div className="absolute bottom-5 left-5">
                    <h1 className="text-[45px] font-bold bg-gradient-to-r from-white from-[100%] to-white to-[100%] bg-clip-text text-transparent">
                      Ecommerce
                    </h1>
                    <p className="text-lg font-bold bg-gradient-to-r from-white from-[100%] to-white to-[100%] bg-clip-text text-transparent">
                      ecommerce website
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border lg:w-[500px] md:w-[500px] w-[300px] bg-[url('https://i.ibb.co/Cw9JSqV/download-2.jpg')] lg:h-[300px] md:h-[300] h-52 duration-300 transform hover:scale-105 rounded-lg relative dark:border-neutral-800 cursor-pointer">
              <div className="bg-gradient-to-b from-white from-[0%] via-neutral-900 via-[75%] to-neutral-950 to-[100%] h-full opacity-60 rounded-lg">
                <div className="flex items-end justify-start">
                  <div className="absolute bottom-5 left-5">
                    <h1 className="text-[45px] font-bold bg-gradient-to-r from-white from-[100%] to-white to-[100%] bg-clip-text text-transparent">
                      Dashboard
                    </h1>
                    <p className="text-lg font-bold bg-gradient-to-r from-white from-[100%] to-white to-[100%] bg-clip-text text-transparent">
                      website
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border lg:w-[500px] md:w-[500px] w-[300px] bg-[url('https://i.ibb.co/yV2w448/images-1.jpg')] lg:h-[300px] md:h-[300] h-52 duration-300 transform hover:scale-105 rounded-lg relative dark:border-neutral-800 cursor-pointer">
              <div className=" bg-gradient-to-b from-white from-[0%] via-neutral-900 via-[75%] to-neutral-950 to-[100%] h-full opacity-60 rounded-lg">
                <div className="flex items-end justify-start">
                  <div className="absolute bottom-5 left-5">
                    <h1 className="text-[45px] font-bold bg-gradient-to-r from-white from-[100%] to-white to-[100%] bg-clip-text text-transparent">
                      NextJs project
                    </h1>
                    <p className="text-lg font-bold bg-gradient-to-r from-white from-[100%] to-white to-[100%] bg-clip-text text-transparent">
                      website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
