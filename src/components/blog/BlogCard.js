/* eslint-disable @next/next/no-img-element */
import formatDate from "@/utils/formatDate";
import Link from "next/link";

const BlogCard = ({ item }) => {
  return (
    <div className="flex flex-col sm:flex-row max-w-4xl mx-auto border dark:border-zinc-800 borderzin rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 group">
      <div className="w-full sm:w-1/3 relative">
        <img
          src={item.coverImage}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <span className="absolute top-2 left-2 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md">
          {item.category}
        </span>
      </div>

      <div className="w-full sm:w-2/3 p-6 flex flex-col justify-between rounded-tr-lg">
        <p className="text-gray-400 text-sm">{formatDate(item.createdAt)}</p>

        <h2 className="text-2xl font-bold text-zinc-600 dark:text-zinc-300 mb-2">
          {item.title}
        </h2>

        <p className="text-gray-400 mb-4 line-clamp-3">{item.subtitle}</p>

        <div>
          <Link
           href={`/blogs/${item.title.replace(/\s+/g, "-").toLowerCase()}?id=${item._id}`}
           
            className="inline-flex items-center text-indigo-500 font-medium hover:text-indigo-400 transition-colors duration-300"
          >
            Read article
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="ml-2 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
