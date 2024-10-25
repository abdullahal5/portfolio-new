"use client";
import Navbar from "@/components/home/Navbar";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ProjectsC from "@/components/home/ProjectsC";
import GoToTop from "@/components/home/GoToTop";
import Footer from "@/components/home/Footer";
import { useGetAllProjectsQuery } from "@/redux/features/projects/projectsApi";

const Projects = () => {
  const { data: projects, isFetching } = useGetAllProjectsQuery(undefined);
  const [input, setInput] = useState("");

  const getInputText = (e) => {
    setInput(e.target.value);
  };

  const matchedProject = projects?.data?.filter((item) =>
    item?.title?.toLowerCase()?.includes(input?.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="lg:block md:block hidden">
        <GoToTop />
      </div>
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
            All Projects {input.length > 0 ? matchedProject?.length : ""}
          </span>
          <div className="relative">
            <input
              onChange={getInputText}
              value={input}
              placeholder="Search By Title"
              type="text"
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
          <div>
            {isFetching && projects?.data?.length <= 0 ? (
              <p>loading...</p>
            ) : matchedProject?.length > 0 ? (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
                {matchedProject?.map((item) => (
                  <ProjectsC
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    sub={item.sub}
                  />
                ))}
              </div>
            ) : (
              <p className="text-4xl font-bold text-center h-[50vh] flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                No projects found matching <br /> {input && `${input}`}.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
