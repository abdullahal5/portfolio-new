"use client";
import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/home/Footer";
import GoToTop from "@/components/home/GoToTop";
import Navbar from "@/components/home/Navbar";
import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogsApi";

const BlogPage = () => {
  const { data: blogs } = useGetAllBlogsQuery(undefined);
  return (
    <div>
      <Navbar />
      <div className="lg:block md:block hidden">
        <GoToTop />
      </div>
      <div className="lg:pt-36 md:pt-32 pt-5 space-y-6 lg:mx-0 md:mx-5 mx-5">
        {blogs?.data?.map((item) => (
          <BlogCard key={item._id} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
