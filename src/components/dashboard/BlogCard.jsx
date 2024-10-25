"use client";
import Image from "next/image";
import { useState } from "react";
import { FiArrowRight, FiEdit2, FiTrash2 } from "react-icons/fi";
import TextEditor from "./TextEditor";
import Modal from "./Modal";

const BlogCard = ({
  title,
  subtitle,
  coverImage,
  category,
  content,
  onEdit,
  onDelete,
}) => {
  const [isBlogAddModalOpen, setIsBlogAddModalOpen] = useState(false);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [value, setValue] = useState("");

  const toggleModal = () => {
    setIsBlogAddModalOpen(false);
  };

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
                defaultValue={title}
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
                defaultValue={subtitle}
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
                defaultValue={category}
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
              <TextEditor
                defaultvalue={content}
                value={value}
                setValue={setValue}
              />
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
      <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 group">
        <Image
          src={coverImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="absolute inset-x-0 bottom-0 p-6 space-y-3">
          <div className="inline-block px-3 py-1 text-xs font-semibold text-white bg-indigo-500 rounded-full shadow-md">
            {category}
          </div>
          <div className="bg-black bg-opacity-30 backdrop-blur-md p-4 rounded-lg transition-all duration-300 group-hover:bg-opacity-40">
            <h2 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-indigo-300">
              {title}
            </h2>
            <p className="text-sm text-gray-200 transition-all duration-300 group-hover:text-white">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="absolute top-4 right-4 transition-all duration-300 transform translate-x-12 group-hover:translate-x-0">
          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
            <FiArrowRight className="text-indigo-500 text-xl" />
          </div>
        </div>

        <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => setIsBlogAddModalOpen(true)}
            className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-500 hover:text-white transition-all duration-300"
            aria-label="Edit post"
          >
            <FiEdit2 className="text-indigo-500 group-hover:text-white text-xl" />
          </button>
          <button
            className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            aria-label="Delete post"
          >
            <FiTrash2 className="text-red-500 group-hover:text-white text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
