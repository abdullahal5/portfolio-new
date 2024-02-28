"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { TfiWrite } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

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
      path: "/article",
      name: "Article",
    },
  ];

  const handleRoutes = (route) => {
    const lowercase = route.toLowerCase();
    router.push(`/${lowercase}`, { scroll: false });
  };

  const mobileDarkMode = (ff) => {
    console.log("ok", ff);
    setIsDropdownOpen(ff);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="fixed z-50 backdrop-blur-md backdrop:filter bg-zinc-50 bg-opacity-60 lg:w-[1100px] md:w-[1100px] border-2 bg-transparent py-4 rounded-r-full border-gray-200 rounded-l-full mt-10 mx-auto w-full lg:block md:block hidden">
        <div className="gap-7 text-[.875rem] font-semibold text-zinc-600 uppercase">
          <div className="flex justify-between px-10 items-center">
            <div className="flex items-center justify-between gap-10 tracking-wider">
              {routes.map((item) => (
                <Link
                  key={Math.random()}
                  href={item.path}
                  className={`p-1 hover:text-violet-500 ${
                    pathname === item.path ? "text-violet-500" : ""
                  }`}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
            {isDark ? (
              <button
                onClick={() => setIsDark(!isDark)}
                className="hover:bg-gray-200 rounded-full p-2"
              >
                <MdLightMode fontSize={"1.1rem"} />
              </button>
            ) : (
              <button
                onClick={() => setIsDark(!isDark)}
                className="hover:bg-gray-200 rounded-full p-2"
              >
                <FaMoon fontSize={"1.1rem"} />
              </button>
            )}
          </div>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav className="fixed z-50 bottom-0 left-0 w-full backdrop-blur-md backdrop:filter bg-zinc-50 bg-opacity-60 border-2 bg-transparent py-2 border-gray-200 mx-auto lg:hidden md:hidden block h-14">
        <div className="items-center gap-10 tracking-wider flex justify-around text center mx-auto relative">
          <button
            className={`${
              pathname === "/"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
            onClick={() => handleRoutes("/")}
          >
            <IoHomeOutline className="hover:text-violet-500 h-[20px] w-[20px]" />
            {pathname === "/" ? <p className="text-sm uppercase">Home</p> : ""}
          </button>
          <button
            className={`${
              pathname === "/about"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
            onClick={() => handleRoutes("About")}
          >
            <FaRegUser className="hover:text-violet-500 h-[20px] w-[20px] " />
            {pathname === "/about" ? (
              <p className="text-sm uppercase">About</p>
            ) : (
              ""
            )}
          </button>
          <button
            className={`${
              pathname === "/projects"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
            onClick={() => handleRoutes("Projects")}
          >
            <TfiLayoutGrid2 className="hover:text-violet-500 h-[20px] w-[20px]" />
            {pathname === "/projects" ? (
              <p className="text-sm uppercase">Project</p>
            ) : (
              ""
            )}
          </button>
          <button
            className={`${
              pathname === "/article"
                ? "text-violet-500 flex flex-col justify-center items-center"
                : ""
            }`}
            onClick={() => handleRoutes("Article")}
          >
            <TfiWrite className="hover:text-violet-500 h-[20px] w-[20px]" />
            {pathname === "/article" ? (
              <p className="text-sm uppercase">Article</p>
            ) : (
              ""
            )}
          </button>
          <div ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <BsThreeDotsVertical className="hover:text-violet-500 h-[20px] w-[20px]" />
            </button>
            {isDropdownOpen === true ? (
              <div className="absolute -top-20 right-0 mb-5 z-50 bg-white rounded-xl py-2 shadow-lg p-2">
                {isDark ? (
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 flex gap-1 items-center"
                  >
                    <MdLightMode fontSize={"1.1rem"} />
                    Light Mode
                  </button>
                ) : (
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 flex gap-1 items-center"
                  >
                    <FaMoon fontSize={"1.1rem"} />
                    Dark Mode
                  </button>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
