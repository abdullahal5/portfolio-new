"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import ProjectCard from "@/components/dashboard/ProjectCard";
import Modal from "@/components/dashboard/Modal";
import toast from "react-hot-toast";
import {
  useCreateProjectMutation,
  useGetAllProjectsQuery,
} from "@/redux/features/projects/projectsApi";

const Projects = () => {
  const [isSkillAddModalOpen, setIsSkillAddModalOpen] = useState(false);
  const [showPreviewImage, setShowPreviewImage] = useState({
    coverImage: "",
    image: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    coverImage: "",
    image: "",
    sub: "",
    technologies: "",
    features: "",
    tag: "",
    githubLink: "",
    liveLink: "",
  });
  const [project] = useCreateProjectMutation();
  const { data: projects } = useGetAllProjectsQuery(undefined);

  const toggleModal = () => {
    setIsSkillAddModalOpen(false);
    setFormData({
      title: "",
      coverImage: "",
      image: "",
      sub: "",
      technologies: "",
      features: "",
      tag: "",
      githubLink: "",
      liveLink: "",
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
        liveLink: formData?.liveLink,
      };

      const res = await project(data);

      if (res?.data) {
        toggleModal();
        toast.dismiss(toastId);
        toast.success("Project updated successfully!");
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
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
                {showPreviewImage.coverImage && (
                  <div className="mt-2">
                    <Image
                      src={showPreviewImage.coverImage}
                      alt="Image Preview"
                      width={200}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                )}
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
              {showPreviewImage.image && (
                <div className="mt-2">
                  <Image
                    src={showPreviewImage.image}
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
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#0d2128] dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="liveLink"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Live Link
              </label>
              <input
                type="url"
                id="liveLink"
                name="liveLink"
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
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            onClick={() => setIsSkillAddModalOpen(true)}
            className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl dark:shadow-gray-700/50 bg-gray-100 dark:bg-gray-800 h-72 w-full sm:h-80 md:h-96 flex items-center justify-center cursor-pointer"
          >
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                Add New Project
              </h2>
            </div>
          </div>
          {projects?.data?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
