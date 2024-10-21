"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdBorderVertical } from "react-icons/md";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaUser,
  FaMoon,
  FaTasks,
  FaToolbox,
  FaBlog,
} from "react-icons/fa";
import { MdLightMode, MdClose } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [theme, setTheme] = useState("light");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitchThemes = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const navigate = (path) => {
    router.push(path);
    setIsMobileOpen(false);
  };

  const closeSidebar = () => {
    setIsMobileOpen(false);
  };

  return (
    <aside className="h-screen lg:block">
      <nav className="hidden lg:flex h-full flex-col bg-white border-r shadow-sm dark:bg-gray-900 dark:border-gray-700 transition-all duration-300">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src="https://i.ibb.co/5T1r5B6/1bffa484777281-5d6786a598010-removebg-preview.png"
            width={expanded ? 50 : 0}
            height={50}
            className="transition-all duration-300"
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition-colors duration-200"
          >
            {expanded ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>

        <ul className="flex-1 px-3">
          <SidebarItem
            icon={<FaHome />}
            text="Dashboard"
            expanded={expanded}
            onClick={() => navigate("/admin/dashboard")}
            active={pathname === "/admin/dashboard"}
          />
          <SidebarItem
            icon={<FaTasks />}
            text="Projects"
            expanded={expanded}
            onClick={() => navigate("/admin/dashboard/projects")}
            active={pathname === "/admin/dashboard/projects"}
          />
          <SidebarItem
            icon={<FaToolbox />}
            text="Skills"
            expanded={expanded}
            onClick={() => navigate("/admin/dashboard/skills")}
            active={pathname === "/admin/dashboard/skills"}
          />
          <SidebarItem
            icon={<FaBlog />}
            text="Blogs"
            expanded={expanded}
            onClick={() => navigate("/admin/dashboard/blogs")}
            active={pathname === "/admin/dashboard/blogs"}
          />
        </ul>

        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <button
            onClick={handleSwitchThemes}
            className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {theme === "dark" ? (
              <FaMoon className="text-yellow-500" />
            ) : (
              <MdLightMode className="text-yellow-500" />
            )}
          </button>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 flex p-3">
          <Image
            src="https://i.ibb.co.com/R33dDRV/HTML5.png"
            width={40}
            height={40}
            className="rounded-md"
            alt="Profile Avatar"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                John Doe
              </h4>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                johndoe@gmail.com
              </span>
            </div>
            <MdBorderVertical
              size={20}
              className="text-gray-600 dark:text-gray-400"
            />
          </div>
        </div>
      </nav>

      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-indigo-600 text-white rounded-full shadow-lg transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => setIsMobileOpen(true)}
      >
        <FaChevronRight />
      </button>

      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={closeSidebar}
          ></div>

          <nav className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out translate-x-0">
            <div className="p-4 pb-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
              <Image
                src="https://i.ibb.co/5T1r5B6/1bffa484777281-5d6786a598010-removebg-preview.png"
                width={40}
                height={40}
                className="transition-all"
                alt="Logo"
              />
              <button
                onClick={closeSidebar}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <MdClose
                  className="text-gray-600 dark:text-gray-400"
                  fontSize="1.5rem"
                />
              </button>
            </div>

            <ul className="flex-1 px-3">
              <SidebarItem
                icon={<FaHome />}
                text="Dashboard"
                expanded={expanded}
                onClick={() => navigate("/admin/dashboard")}
                active={pathname === "/admin/dashboard"}
              />
              <SidebarItem
                icon={<FaTasks />}
                text="Projects"
                expanded={expanded}
                onClick={() => navigate("/admin/dashboard/projects")}
                active={pathname === "/admin/dashboard/projects"}
              />
              <SidebarItem
                icon={<FaToolbox />}
                text="Skills"
                expanded={expanded}
                onClick={() => navigate("/admin/dashboard/skills")}
                active={pathname === "/admin/dashboard/skills"}
              />
              <SidebarItem
                icon={<FaBlog />}
                text="Blogs"
                expanded={expanded}
                onClick={() => navigate("/admin/dashboard/blogs")}
                active={pathname === "/admin/dashboard/blogs"}
              />
            </ul>

            <div className="absolute bottom-0 w-full border-t border-gray-200 dark:border-gray-700 p-4">
              <button
                onClick={handleSwitchThemes}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {theme === "dark" ? (
                  <FaMoon className="text-yellow-500" />
                ) : (
                  <MdLightMode className="text-yellow-500" />
                )}
              </button>
            </div>
          </nav>
        </>
      )}
    </aside>
  );
}

function SidebarItem({ icon, text, expanded, onClick, active }) {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors duration-200
        ${
          active
            ? "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-white"
            : "text-gray-600 dark:text-gray-300"
        }
        hover:bg-indigo-50 dark:hover:bg-gray-800
      `}
      onClick={onClick}
    >
      <span className="text-xl">{icon}</span>
      <span
        className={`overflow-hidden transition-all duration-200 ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 dark:bg-gray-800 dark:text-white">
          {text}
        </div>
      )}
    </li>
  );
}
