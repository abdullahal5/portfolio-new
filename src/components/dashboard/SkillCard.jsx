"use client";
import Skeleton from "react-loading-skeleton";
import SkillLevel from "../home/SkillLevel";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import {
  useDeleteSkillByIdMutation,
  useUpdateSkillByIdMutation,
} from "@/redux/features/skills/skillApi";
import toast from "react-hot-toast";

const SkillCard = ({ item, loading = false }) => {
  const [isSkillAddModalOpen, setIsSkillAddModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState(item.image || "");
  const [imagePreview, setImagePreview] = useState("");
  const [progress, setProgress] = useState("");
  const [skillUpdate] = useUpdateSkillByIdMutation();
  const [deleteSkill] = useDeleteSkillByIdMutation();

  const handleEditSkill = (skill) => {
    setIsSkillAddModalOpen(true);
    setName(skill.name);
    setTag(skill.tag);
    setImage(skill.image);
    setProgress(skill.progress);
  };

  useEffect(() => {
    setImage(item.image);
  }, [item]);

  const handleDeleteSkill = async () => {
    const loadingToastId = toast.loading("Deleting skill...");

    try {
      await deleteSkill(item?._id);

      toast.success("Skill deleted successfully!");
    } catch (error) {
      console.error("Error deleting skill:", error);
      toast.error("Failed to delete skill. Please try again.");
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  const toggleModal = () => {
    if (!isSkillAddModalOpen) {
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

    let uploadedImageUrl = image;

    const loadingToastId = toast.loading("Updating Skill...");

    if (uploadedImageUrl) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=228f07b239d69be9bcc9d7f97fbf57de`,
          formData
        );
        uploadedImageUrl = response.data.data.url;
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image. Please try again.");
        return;
      } finally {
        toast.dismiss(loadingToastId);
      }
    }

    const skillData = {
      name,
      tag,
      image: uploadedImageUrl,
      progress,
    };

    const res = await skillUpdate({ id: item?._id, skillData });

    if (res.data.success) {
      toast.success("Skill updated successfully!");
      toggleModal();
    } else {
      toast.error("Failed to update skill. Please try again.");
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
      <Modal isOpen={isSkillAddModalOpen} setIsOpen={setIsSkillAddModalOpen}>
        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Update Skill
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
                      src={item?.image}
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
            Update Skill
          </button>
        </form>
      </Modal>
      <div
        key={item.id}
        className="bg-white dark:bg-[#071114] rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 p-3 group"
      >
        <div className="p-2">
          <div className="flex items-center mb-4">
            {loading ? (
              <Skeleton circle width={64} height={64} />
            ) : (
              <Image
                src={item.image}
                className="w-16 rounded-[50%]"
                width={150}
                height={100}
                loading="lazy"
                alt="image"
              />
            )}
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {loading ? <Skeleton width={100} /> : item.name}
              </h3>
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                {loading ? <Skeleton width={60} /> : item.tag}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="w-full">
              <div className="flex items-center gap-2">
                {loading ? (
                  <Skeleton height={8} />
                ) : (
                  <SkillLevel percentage={item.progress} />
                )}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {loading ? <Skeleton width={40} /> : `${item.progress}%`}
                </span>
              </div>
            </div>
            <div className="gap-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => handleEditSkill(item)}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-300"
              >
                <BiEdit className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleDeleteSkill(item.id)}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200 transition-colors duration-300"
              >
                <BsTrash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
