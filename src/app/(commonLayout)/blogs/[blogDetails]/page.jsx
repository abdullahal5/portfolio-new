"use client";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { useGetSingleBlogQuery } from "@/redux/features/blogs/blogsApi";
import formatDate from "@/utils/formatDate";
import { useSearchParams } from "next/navigation";

const DetailsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { data: blogSingleData } = useGetSingleBlogQuery(id);
  const data = blogSingleData?.data;
  return (
    <div>
      <Navbar />
      <div className="lg:pt-32 md:pt-32 pt-5 lg:mx-10 md:mx-10 mx-5">
        <p className="text-gray-400 text-sm border-l-2 border-zinc-300 pl-2 mb-3">
          {data?.createdAt && formatDate(data?.createdAt)}
        </p>

        <h1 className="text-4xl font-bold text-zinc-600 dark:text-zinc-300">
          {data?.title}
        </h1>
        <img
          className="w-full h-96 object-cover rounded-lg mx-auto my-10"
          width={500}
          height={500}
          src={data?.coverImage}
          alt="Blog Image"
        />
        <div
          dangerouslySetInnerHTML={{ __html: data?.content }}
          className="max-w-full text-zinc-600 dark:text-zinc-300"
        />
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
