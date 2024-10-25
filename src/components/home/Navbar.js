"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import { IoMdTrophy } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");

  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/blogs",
      name: "Blogs",
    },
    // {
    //   path: "/achievements",
    //   name: "Achievements",
    // },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleSwitchThemes = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="fixed z-50 backdrop-blur-md backdrop:filter bg-zinc-50 dark:bg-neutral-900 dark:bg-transparent dark:bg-opacity-80 bg-opacity-60 lg:w-[1100px] md:w-[1100px] border-2 bg-transparent py-4 rounded-r-full border-gray-200 rounded-l-full mt-10 mx-auto w-full lg:block md:block hidden dark:border-violet-500/10 dark:backdrop-filter dark:border-2">
        <div className="gap-7 text-[.875rem] font-semibold text-zinc-600 uppercase">
          <div className="flex justify-between px-10 items-center">
            <div className="lg:w-auto md:w-auto w-full">
              <Link href="/">
                <Image
                  src="https://i.ibb.co/5T1r5B6/1bffa484777281-5d6786a598010-removebg-preview.png"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="lg:m-0 md:m-0 mx-auto"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between gap-5 tracking-wider">
              {routes.map((item) => (
                <Link
                  key={Math.random()}
                  href={item.path}
                  className={`p-1 hover:text-violet-500 ${
                    pathname === item.path
                      ? "text-violet-500"
                      : "dark:text-zinc-500"
                  }`}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
            {theme === "dark" ? (
              <button onClick={handleSwitchThemes} className="rounded-full p-2">
                <FaMoon fontSize={"1.1rem"} />
              </button>
            ) : (
              <button
                onClick={handleSwitchThemes}
                className="hover:text-zinc-200 rounded-full p-2"
              >
                <MdLightMode fontSize={"1.1rem"} />
              </button>
            )}
          </div>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav className="fixed z-50 bottom-0 left-0 w-full backdrop-blur-md backdrop:filter bg-zinc-50 bg-opacity-60 border-2 bg-transparent py-2 dark:bg-neutral-900 dark:bg-transparent dark:bg-opacity-80 dark:border-t-violet-500/10 dark:border-b-0 dark:border-l-0 dark:border-r-0 border-gray-200 mx-auto lg:hidden md:hidden block h-14">
        <div className="items-center gap-10 tracking-wider flex justify-around text center mx-auto relative dark:text-zinc-300">
          <Link
            href={"/"}
            className={`${
              pathname === "/"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
          >
            <IoHomeOutline className="hover:text-violet-500 h-[20px] w-[20px]" />
            {pathname === "/" ? <p className="text-sm uppercase">Home</p> : ""}
          </Link>
          <Link
            href={"/about"}
            className={`${
              pathname === "/about"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
          >
            <FaRegUser className="hover:text-violet-500 h-[20px] w-[20px] " />
            {pathname === "/about" ? (
              <p className="text-sm uppercase">About</p>
            ) : (
              ""
            )}
          </Link>
          <Link
            href={"/projects"}
            className={`${
              pathname === "/projects"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
          >
            <TfiLayoutGrid2 className="hover:text-violet-500 h-[20px] w-[20px]" />
            {pathname === "/projects" ? (
              <p className="text-sm uppercase">Project</p>
            ) : (
              ""
            )}
          </Link>
          {theme === "dark" ? (
            <button onClick={handleSwitchThemes} className="rounded-full p-2">
              <FaMoon fontSize={"1.1rem"} />
            </button>
          ) : (
            <button
              onClick={handleSwitchThemes}
              className="hover:text-zinc-200 rounded-full p-2"
            >
              <MdLightMode fontSize={"1.1rem"} />
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
