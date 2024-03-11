import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkillLevel from "./SkillLevel";
import { useEffect, useState } from "react";

const SkillCard = ({ item }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="border dark:border-neutral-800 group lg:w-[330px] md:w-[330px] w-[300px] h-36 dark:bg-black bg-white rounded-lg py-3 text-zinc-700 shadow-md dark:text-zinc-300">
      <div className="flex">
        <div className="w-[30%] flex flex-col justify-center items-center">
          {loading ? (
            <Skeleton width="80px" height="80px" circle />
          ) : (
            <Image
              src={item.image}
              className="w-20 rounded-full group-hover:scale-110 duration-300 transition-all ease-in-out"
              width={150}
              height={100}
              loading="lazy"
              alt="image"
            />
          )}
          <span className="mx-auto pt-1">
            {loading ? <Skeleton width="70px" count={1} /> : "Progress"}
          </span>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-3">
            {loading ? <Skeleton width="130px" count={1} /> : item.name}
          </h1>
          <span className="bg-gray-200 dark:border dark:border-neutral-800 dark:bg-black rounded-lg px-2 py-1">
            {loading ? <Skeleton width="80px" count={1} /> : item.tag}
          </span>
          <div className={`${loading ? "pt-6" : "pt-7"}`}>
            {loading ? (
              <Skeleton width="100px" count={1} />
            ) : (
              <SkillLevel percentage={item.progress} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
