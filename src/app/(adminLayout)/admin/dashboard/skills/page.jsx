"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BiPlusCircle } from "react-icons/bi";
import Modal from "@/components/dashboard/Modal";
import SkillCard from "@/components/dashboard/SkillCard";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  useCreateSkillMutation,
  useGetAllSkillsQuery,
} from "@/redux/features/skills/skillApi";

const EnhancedSkillsTable = () => {
  const [isSkillAddModalOpen, setIsSkillAddModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [progress, setProgress] = useState("");
  const [skill] = useCreateSkillMutation();
  const { data: skills } = useGetAllSkillsQuery(undefined);

  const toggleModal = () => {
    if (isSkillAddModalOpen === false) {
      setName("");
      setTag("");
      setImage("");
      setImagePreview("");
      setProgress("");
    }
    setIsSkillAddModalOpen(!isSkillAddModalOpen);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Adding a skill...");

    let uploadedImageUrl = image;

    if (uploadedImageUrl) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=228f07b239d69be9bcc9d7f97fbf57de`,
          formData
        );

        uploadedImageUrl = response.data.data.url;

        const res = await skill({
          name,
          tag,
          image: uploadedImageUrl,
          progress,
        });

        if (res.data.success) {
          toggleModal();
        }

        toast.dismiss(toastId);

        toast.success("Skill added successfully!");
      } catch (error) {
        toast.dismiss(toastId);
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const previewUrl = URL.createObjectURL(file);
      setImage(file);
      setImagePreview(previewUrl);
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <>
      <Toaster />
      <Modal isOpen={isSkillAddModalOpen} setIsOpen={setIsSkillAddModalOpen}>
        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Add Skill
          </h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:text-gray-500"
            onClick={() => setIsSkillAddModalOpen(false)}
          >
            <span className="bg-transparent text-gray-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        <form onSubmit={handleFormSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#0d2128] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter skill name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="tag"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Tag
              </label>
              <input
                type="text"
                id="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#0d2128] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter skill tag"
                required
              />
            </div>
            <div>
              <label
                htmlFor="progress"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Progress {progress} (%)
              </label>
              <input
                type="range"
                id="progress"
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#0d2128] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter progress"
                required
                min="0"
                max="100"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Upload Image
              </label>
              <div className="flex items-center gap-3 justify-center w-full">
                <label
                  htmlFor="image"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-[#0d2128] hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                >
                  <div className="flex flex-col items-center justify-center pt-2 pb-3">
                    <svg
                      className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG, GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                {imagePreview ? (
                  <div className="sm:w-32 sm:h-32 mt-4 sm:mt-0">
                    <Image
                      src={imagePreview}
                      alt="Image Preview"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </div>
                ) : (
                  <div className="sm:w-32 sm:h-32 mt-4 sm:mt-0">
                    <Image
                      src={image}
                      alt="Default Preview"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Skill
          </button>
        </form>
      </Modal>
      <div className="px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          Skills Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            onClick={toggleModal}
            className="bg-white dark:bg-[#071114] py-4 rounded-xl shadow-lg flex flex-col justify-center items-center transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            <BiPlusCircle className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Add Skills
            </h3>
          </div>

          {skills?.data?.map((item) => (
            <SkillCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EnhancedSkillsTable;
