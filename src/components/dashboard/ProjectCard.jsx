"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiEdit2, FiTrash2, FiArrowRight, FiTag } from "react-icons/fi";
import Modal from "./Modal";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const ProjectCard = ({ project, onEdit, onDelete }) => {
  const [isSkillAddModalOpen, setIsSkillAddModalOpen] = useState(false);
  const [showPreviewImage, setShowPreviewImage] = useState({
    coverImage: "",
    image: "",
  });
  const [formData, setFormData] = useState({
    title: project.title || "",
    coverImage: project?.coverImage || "",
    image: project.image || "",
    sub: project.sub || "",
    technologies: project.technologies?.join(", ") || "",
    features: project.features?.join("\n") || "",
    tag: project.tag?.join(", ") || "",
    githubLink: project.githubLink || "",
    LiveLink: project.LiveLink || "",
  });

  const toggleModal = () => {
    setIsSkillAddModalOpen(false);
    setFormData({
      title: project.title || "",
      coverImage: project.coverImage || "",
      image: project.image || "",
      sub: project.sub || "",
      technologies: project.technologies?.join(", ") || "",
      features: project.features?.join("\n") || "",
      tag: project.tag?.join(", ") || "",
      githubLink: project.githubLink || "",
      LiveLink: project.LiveLink || "",
    });
    setShowPreviewImage({
      coverImage: "",
      image: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setShowPreviewImage((prev) => ({ ...prev, [name]: previewUrl }));
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: file,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Adding a project...");

    let uploadedCoverImageUrl = formData?.coverImage;
    let uploadedImageUrl = formData?.image;

    const uploadToImgbb = async (file) => {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=228f07b239d69be9bcc9d7f97fbf57de`,
        formData
      );
      return response.data.data.url;
    };

    try {
      if (formData.coverImage) {
        uploadedCoverImageUrl = await uploadToImgbb(formData.coverImage);
      }

      if (formData.image) {
        uploadedImageUrl = await uploadToImgbb(formData.image);
      }

      const data = {
        title: formData?.title,
        coverImage: uploadedCoverImageUrl,
        image: uploadedImageUrl,
        sub: formData?.sub,
        technologies: formData?.technologies
          ?.split(/,\s*|,/)
          .map((item) => item.trim()),
        features: formData?.features.split("\n").map((item) => item.trim()),
        tag: formData?.tag?.split(/,\s*|,/).map((item) => item.trim()),
        githubLink: formData?.githubLink,
        LiveLink: formData?.LiveLink,
      };

      console.log(data);

      if (data) {
        toast.dismiss(toastId);
        toast.success("Project added successfully!");
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <Toaster />
      <Modal isOpen={isSkillAddModalOpen} setIsOpen={setIsSkillAddModalOpen}>
        <div className="flex items-start justify-between p-5 border-b border-solid border-[#0d2128] rounded-t">
          <h3 className="text-2xl  font-semibold text-gray-900 dark:text-white">
            Add Skill
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
            Project Details
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
                defaultValue={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
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
                onChange={handleChange}
                defaultValue={formData.sub}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="coverImage"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Cover Image URL
              </label>
              <input
                type="file"
                id="coverImage"
                name="coverImage"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
              />
              <div className="mt-2">
                <Image
                  src={
                    showPreviewImage.coverImage
                      ? showPreviewImage.coverImage
                      : formData.coverImage
                  }
                  alt="Cover Preview 1"
                  width={200}
                  height={100}
                  className="rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Additional Image URL
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
              />
              {formData.image && (
                <div className="mt-2">
                  <Image
                    src={
                      showPreviewImage.image
                        ? showPreviewImage.image
                        : formData.image
                    }
                    alt="Image Preview"
                    width={200}
                    height={100}
                    className="rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="technologies"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Technologies (comma-separated)
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              defaultValue={formData.technologies}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mt-6">
            <label
              htmlFor="features"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Features (one per line)
            </label>
            <textarea
              id="features"
              name="features"
              defaultValue={formData.features}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
            ></textarea>
          </div>

          <div className="mt-6">
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Tags (comma-separated)
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              defaultValue={formData.tag}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="githubLink"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                GitHub Link
              </label>
              <input
                type="url"
                id="githubLink"
                name="githubLink"
                defaultValue={formData.githubLink}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="LiveLink"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Live Link
              </label>
              <input
                type="url"
                id="LiveLink"
                name="LiveLink"
                defaultValue={formData.LiveLink}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          <div className="my-8">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit Project
            </button>
          </div>
        </form>
      </Modal>
      <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl dark:shadow-gray-700/50">
        <Link href={`/projects/${project.title}`} className="block">
          <div className="relative h-72 w-full sm:h-80 md:h-96">
            <Image
              src={project.coverImage}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
              {project.title}
            </h2>
            <p className="mb-4 text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
              {project.sub}
            </p>
          </div>
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <FiArrowRight className="text-white text-xl" />
          </div>
        </Link>
        <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
          <button
            onClick={() => setIsSkillAddModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            aria-label={`Edit ${project.title}`}
          >
            <FiEdit2 className="text-xl" />
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
            aria-label={`Delete ${project.title}`}
          >
            <FiTrash2 className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
