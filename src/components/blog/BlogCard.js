"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiArrowRight, FiCalendar, FiClock, FiTag, FiEye } from "react-icons/fi";

const BlogCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div
      className="group max-w-4xl mx-auto relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl dark:shadow-gray-700 bg-white dark:bg-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />

      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={item.coverImage}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute top-4 left-4 z-20 flex space-x-2">
        <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {item.category}
        </span>
        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center">
          <FiEye className="mr-1" /> 1.2k
        </span>
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
        <div className="space-y-3 transform transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <FiCalendar className="h-4 w-4" />
            <span>{formatDate(item.createdAt)}</span>
            <span className="mx-2">•</span>
            <FiClock className="h-4 w-4" />
            <span>5 min read</span>
          </div>
          <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 line-clamp-2">
            {item.title}
          </h2>
          <p className="text-sm text-gray-300 line-clamp-2 group-hover:text-white transition-colors duration-300">
            {item.subtitle}
          </p>
          <button className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800 transition-colors duration-300">
            Read more
            <FiArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-30">
        <div className="relative w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden">
          <div
            className="absolute inset-0.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full"
            style={{
              clipPath: isHovered ? 'circle(100% at 50% 50%)' : 'circle(0% at 50% 50%)',
              transition: 'clip-path 0.5s ease-in-out',
            }}
          />
          <FiArrowRight className="absolute inset-0 m-auto h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-0" />
    </div>
  );
};

export default BlogCard;