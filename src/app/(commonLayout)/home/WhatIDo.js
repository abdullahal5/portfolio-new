import SectionTitle from "@/components/home/SectionTitle";
import { BiMobileVibration } from "react-icons/bi";
import { FaBug } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

const WhatIDo = () => {
  return (
    <div className="mx-5">
      <SectionTitle title={"What I Do?"} />
      <div className="flex md:flex-row lg:flex-row flex-col items-center gap-2 py-10">
        <div className="lg:w-96 md:w-96 w-[350px] h-48 rounded-lg border justify-between pr-3 dark:bg-black dark:border-neutral-800 flex bg-white dark:text-zinc-300 text-zinc-600 group">
          <div className="w-[30%]">
            <BiMobileVibration
              size={"6rem"}
              className="text-gray-200 pt-3 pl-3 group-hover:scale-110 duration-300 transition-all ease-in-out dark:text-zinc-400"
            />
          </div>
          <div className="text-right flex items-center justify-center">
            <div>
              <p className="font-bold text-xl mt-2 ml-1 pb-2">
                Responsive Design
              </p>
              <p className="">
                I make responsive design for mobile, laptop, and computer
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-96 md:w-96 w-[350px] h-48 rounded-lg border justify-between pr-3 dark:bg-black dark:border-neutral-800 flex bg-white dark:text-zinc-300 text-zinc-600 group p-3">
          <div className="w-[30%]">
            <FaBug
              size={"5rem"}
              className="text-gray-200  rotate-45 pt-3 pl-3 group-hover:scale-110 duration-300 transition-all ease-in-out dark:text-zinc-400"
            />
          </div>
          <div className="text-right flex items-center justify-center">
            <div>
              <p className="font-bold text-xl mt-2 ml-1 pb-2">Bug Fix</p>
              <p className="">When I get error I try to fix that</p>
            </div>
          </div>
        </div>
        <div className="lg:w-96 md:w-96 w-[350px] h-48 rounded-lg border justify-between pr-3 dark:bg-black dark:border-neutral-800 flex bg-white dark:text-zinc-300 text-zinc-600 group p-3">
          <div className="w-[30%]">
            <MdOutlineFeaturedPlayList
              size={"5rem"}
              className="text-gray-200 rotate-45 pt-3 pl-3 group-hover:scale-110 duration-300 transition-all ease-in-out dark:text-zinc-400"
            />
          </div>
          <div className="text-right flex items-center justify-center">
            <div>
              <p className="font-bold text-xl mt-2 ml-1 pb-2">Unique Feature</p>
              <p className="">Every time I try to make unique feature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
