"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
const ProjectDetails = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const router = useRouter();

  const fetchData = () => {
    try {
      axios.get("/project.json").then((res) => {
        const singleData = res?.data?.find(
          (item) => item?.title === params?.title
        );
        setData(singleData);
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <p className="flex items-center justify-center h-[100vh]">
            Loading...
          </p>
        ) : (
          <div>
            <div className="lg:pb-36 md:pb-36 ">
              <Navbar />
            </div>
            <div>
              <div className="relative">
                <Image
                  src={data?.coverImage}
                  width={1000}
                  className="mx-auto object-cover w-full h-96 object-center rounded-t-lg"
                  height={100}
                  loading="lazy"
                  decoding="async"
                  alt="Coverimage"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] to-[100%] via-white via-[45%] dark:from-neutral-950 opacity-80 dark:opacity-70 dark:to-[100%] dark:via-neutral-900 dark:via-[45%] dark:bg-gradient-to-t rounded-t-lg"></div>
                <div className="absolute top-2/3 left-0 right-0 text-center">
                  <h2 className="text-4xl font-bold text-zinc-700 dark:text-zinc-300">
                    {data?.title}
                  </h2>
                  <p className="text-md pt-3 font-semibold text-zinc-700 dark:text-zinc-300 flex items-center justify-center ">
                    {data?.tag?.map((item, index) => (
                      <React.Fragment key={item}>
                        <span>{item}</span>
                        {index !== data?.tag?.length - 1 && (
                          <span className="px-1">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
              <div className="mt-10 border dark:border-neutral-800 w-full lg:h-80 md:h-80 h-auto rounded-lg p-4">
                <div className="flex lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center lg:justify-between md:justify-between justify-center gap-x-5 w-[100%] lg:gap-0 md:gap-0 gap-10">
                  <div className="lg:w-[50%] md:w-[50%] w-auto text-zinc-700 dark:text-zinc-300">
                    <h1 className="text-3xl font-bold">Features</h1>
                    <div className="space-y-2 mt-5">
                      {data?.features?.map((item) => (
                        <ol className="pl-10 " key={Math.random()}>
                          <li className="list-disc text-lg ">{item}</li>
                        </ol>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-zinc-700 dark:text-zinc-300">
                      Technologies
                    </h1>
                    <div className="flex-wrap flex gap-3 mt-5">
                      {data?.technologies?.map((item) => (
                        <h1
                          key={Math.random()}
                          className="text-sm border dark:border-neutral-800 dark:text-zinc-300 text-zinc-700 rounded-full p-2"
                        >
                          {item}
                        </h1>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex lg:flex-row md:flex-row flex-col items-center lg:justify-between md:justify-between justify-center lg:gap-0 md:gap-0 gap-3">
                <button
                  onClick={handleGoBack}
                  className="p-3 hover:bg-white rounded-full border  dark:border-violet-500 dark:hover:bg-neutral-800 border-violet-500"
                >
                  <IoArrowBack className="text-violet-600 dark:text-violet-500" />
                </button>
                <div className="flex items-center">
                  <a
                    target="_blank"
                    href={data?.githubLink}
                    rel="noopener noreferrer"
                    className="rounded-l-full border border-violet-500 p-3 flex items-center gap-2 text-xl text-zinc-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-neutral-800"
                  >
                    <IoCodeSlashOutline className="inline" /> <span>Code</span>
                  </a>
                  <a
                    href={data?.LiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-r-full border-t border-b border-r border-violet-500 p-3 flex items-center gap-2 text-xl text-zinc-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-neutral-800"
                  >
                    <FaExternalLinkAlt className="inline" fontSize={"15px"} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectDetails;
