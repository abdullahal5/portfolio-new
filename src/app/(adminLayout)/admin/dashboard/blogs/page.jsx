"use client";
import BlogCard from "@/components/dashboard/BlogCard";
import Modal from "@/components/dashboard/Modal";
import TextEditor from "@/components/dashboard/TextEditor";
import Image from "next/image";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const blogPosts = [
  {
    title: "The Future of AI in Web Development",
    subtitle:
      "How artificial intelligence is reshaping the way we build websites",
    coverImage:
      "https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478104.jpg?ga=GA1.1.196076015.1725610901&semt=ais_hybrid",
    category: "Technology",
    content: `
      <p>Artificial intelligence (AI) is revolutionizing various industries, and web development is no exception. From personalized user experiences to automated code generation, AI is transforming the way websites are built and maintained.</p>
      <p><strong>AI-powered tools</strong> can help developers create more efficient, responsive, and user-friendly web applications. In this article, we explore the future possibilities and trends of AI in web development.</p>
      <h2>The Role of AI in Automating Web Development</h2>
      <p>AI is already being used to generate code, design layouts, and even optimize performance. As AI continues to evolve, it will further enhance the developer's workflow by automating repetitive tasks.</p>
    `,
  },
  {
    title: "Mastering CSS Grid Layout",
    subtitle: "A comprehensive guide to creating complex layouts with ease",
    coverImage:
      "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?ga=GA1.1.196076015.1725610901&semt=ais_hybrid",
    category: "Web Design",
    content: `
      <p>CSS Grid Layout is a powerful tool for creating complex and responsive web designs. It allows developers to define grid-based layouts, which are flexible and adaptable to different screen sizes.</p>
      <p><strong>Grid systems</strong> have been used in print design for centuries, and now they are becoming a standard in web design. This guide will take you through the basics of CSS Grid and how to use it to create stunning layouts.</p>
      <h2>Getting Started with CSS Grid</h2>
      <p>To use CSS Grid, you need to define a grid container and its rows and columns. With a few simple properties, you can create a responsive and adaptable grid layout for any project.</p>
    `,
  },
  {
    title: "The Rise of Serverless Architecture",
    subtitle: "Exploring the benefits and challenges of going serverless",
    coverImage:
      "https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?ga=GA1.1.196076015.1725610901&semt=ais_hybrid",
    category: "Backend",
    content: `
      <p>Serverless architecture is becoming increasingly popular as it allows developers to build and deploy applications without managing the underlying infrastructure. With serverless, you only pay for the resources you use, which can result in cost savings.</p>
      <p><strong>Benefits of serverless</strong> include scalability, reduced maintenance, and quicker deployment times. However, it also comes with challenges such as vendor lock-in and potential latency issues.</p>
      <h2>How Serverless Architecture Works</h2>
      <p>In a serverless architecture, cloud providers handle the scaling and infrastructure management. Developers write functions that are executed in response to events, and the cloud provider manages the rest.</p>
    `,
  },
];

const BlogPage = () => {
  const [isBlogAddModalOpen, setIsBlogAddModalOpen] = useState(false);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [value, setValue] = useState("");

  console.log(value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const sub = e.target.sub.value;
    const category = e.target.category.value;
    const content = value;

    const data = {
      title,
      sub,
      category,
      content,
    };

    console.log(data);

    // const toastId = toast.loading("Adding a project...");

    // let uploadedCoverImageUrl = formData?.coverImage;
    // let uploadedImageUrl = formData?.image;

    // const uploadToImgbb = async (file) => {
    //   const formData = new FormData();
    //   formData.append("image", file);

    //   const response = await axios.post(
    //     `https://api.imgbb.com/1/upload?key=228f07b239d69be9bcc9d7f97fbf57de`,
    //     formData
    //   );
    //   return response.data.data.url;
    // };

    // try {
    //   if (formData.coverImage) {
    //     uploadedCoverImageUrl = await uploadToImgbb(formData.coverImage);
    //   }

    //   if (formData.image) {
    //     uploadedImageUrl = await uploadToImgbb(formData.image);
    //   }

    //   const data = {
    //     title: formData?.title,
    //     coverImage: uploadedCoverImageUrl,
    //     image: uploadedImageUrl,
    //     sub: formData?.sub,
    //     technologies: formData?.technologies
    //       ?.split(/,\s*|,/)
    //       .map((item) => item.trim()),
    //     features: formData?.features.split("\n").map((item) => item.trim()),
    //     tag: formData?.tag?.split(/,\s*|,/).map((item) => item.trim()),
    //     githubLink: formData?.githubLink,
    //     LiveLink: formData?.LiveLink,
    //   };

    //   console.log(data);

    //   if (data) {
    //     toast.dismiss(toastId);
    //     toast.success("Project added successfully!");
    //   }
    // } catch (error) {
    //   toast.dismiss(toastId);
    //   toast.error(`Error: ${error.message}`);
    // }
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
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
