"use client";
import BlogCard from "@/components/dashboard/BlogCard";
import Modal from "@/components/dashboard/Modal";
import TextEditor from "@/components/dashboard/TextEditor";
import {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
} from "@/redux/features/blogs/blogsApi";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const BlogPage = () => {
  const [isBlogAddModalOpen, setIsBlogAddModalOpen] = useState(false);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [value, setValue] = useState("");
  const { data: blogs } = useGetAllBlogsQuery(undefined);
  const [createBlog] = useCreateBlogMutation();

  const uploadToImgbb = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=228f07b239d69be9bcc9d7f97fbf57de`,
      formData
    );
    return response.data.data.url;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const sub = e.target.sub.value;
    const category = e.target.category.value;
    const content = value;
    const coverImageFile = e.target.coverImage.files[0];

    let uploadedCoverImageUrl = null;

    try {
      if (coverImageFile) {
        uploadedCoverImageUrl = await uploadToImgbb(coverImageFile);
      }

      if (coverImageFile) {
        const data = {
          title,
          subtitle: sub,
          category,
          content,
          coverImage: uploadedCoverImageUrl,
        };

        const res = await createBlog(data);
        console.log(res);

        if (res) {
          toggleModal();
        }
      }
    } catch (error) {
      console.error("Error uploading image or creating blog:", error);
    }
  };

  const toggleModal = () => {
    setIsBlogAddModalOpen(false);
    setCoverImagePreview(null);
    setValue("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Modal isOpen={isBlogAddModalOpen} setIsOpen={setIsBlogAddModalOpen}>
        <div className="flex items-start justify-between p-5 border-b border-solid border-[#0d2128] rounded-t">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Add Blog
          </h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:text-gray-500"
            onClick={toggleModal}
          >
            <span className="bg-transparent text-gray-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="px-5 rounded-lg shadow-lg max-h-[80vh] scrollbar-thin overflow-y-auto"
        >
          <h2 className="text-3xl pt-2 font-bold mb-6 text-gray-800 dark:text-white">
            Blog Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="sub"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Subtitle
              </label>
              <input
                type="text"
                id="sub"
                name="sub"
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="coverImage"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Cover Image
              </label>
              <input
                type="file"
                id="coverImage"
                name="coverImage"
                onChange={handleImageChange}
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                className="w-full h-12 px-4 py-2 bg-white dark:bg-[#0d2128] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                // value={selectedCategory} // Bind to state
                // onChange={handleCategoryChange} // Handle changes
                defaultValue={""}
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Technology">Technology</option>
                <option value="Web Design">Web Design</option>
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Data Science">Data Science</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="DevOps">DevOps</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Game Development">Game Development</option>
                <option value="Blockchain">Blockchain</option>
                <option value="E-commerce">E-commerce</option>
              </select>
            </div>

            <div className="col-span-2">
              {coverImagePreview && (
                <div className="mt-4">
                  <Image
                    src={coverImagePreview}
                    alt="Cover Preview"
                    layout="responsive"
                    width={700}
                    height={300}
                    className="w-full h-60 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>

            <div className="col-span-2">
              <TextEditor value={value} setValue={setValue} />
            </div>
          </div>

          <div className="my-8">
            <button
              type="submit"
              className="w-full h-12 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </Modal>

      <div className="mx-auto px-4 py-8 bg-gray-100 dark:bg-[#071114] min-h-screen transition-colors duration-300">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Latest Blog Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer">
            <div
              onClick={() => setIsBlogAddModalOpen(true)}
              className="absolute inset-0 bg-gray-200 dark:bg-[#1d2b30] flex flex-col items-center justify-center space-y-2"
            >
              <FiPlus className="text-gray-500 dark:text-gray-300 text-6xl group-hover:text-indigo-500 transition-colors duration-300" />
              <p className="text-gray-500 dark:text-gray-300 text-lg font-semibold group-hover:text-indigo-500 transition-colors duration-300">
                Add Blog
              </p>
            </div>
          </div>
          {blogs?.data?.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
