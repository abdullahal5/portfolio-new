"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import ProjectsC from "@/components/ProjectsC";
import GoToTop from "@/components/GoToTop";

const Projects = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getInputText = (e) => {
    setInput(e.target.value);
  };

  const fetchData = async () => {
    axios.get("/project.json").then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

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
            All Projects {input.length > 0 ? "(4 project)" : ""}
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
          <div className="">
            {loading && data.length <= 0 ? (
              <p>loading...</p>
            ) : (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
                {data.map((item) => (
                  <ProjectsC
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    sub={item.sub}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
