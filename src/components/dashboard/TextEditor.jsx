"use client";
import uploadImageToCloudinary from "@/utils/uploadImageToCloudinary";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    handlers: {
      image: function () {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
          const file = input?.files?.[0];

          if (file) {
            if (file.size > 10485760) {
              return toast.warning(
                "File size exceeds 10 MB limit. Please select a smaller file."
              );
            }

            const loadingToast = toast.loading("Uploading image...");

            try {
              const url = await uploadImageToCloudinary(file);

              if (url) {
                const quill = this.quill;
                const range = quill.getSelection();

                if (range) {
                  quill.insertEmbed(range.index, "image", url);
                }
                toast.success("Image uploaded successfully!", {
                  id: loadingToast,
                });
              } else {
                throw new Error("Failed to upload image to Cloudinary");
              }
            } catch (error) {
              toast.error("Failed to upload image: " + error.message, {
                id: loadingToast,
              });
            }
          }
        };
      },
    },
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const TextEditor = ({ value, setValue, defaultvalue }) => {

  useEffect(() => {
    if (defaultvalue) {
      setValue(defaultvalue);
    }
  }, [defaultvalue, setValue]);

  return (
    <div>
      <Toaster />
      <ReactQuill
        className="mt-3 dark:text-white"
        formats={formats}
        modules={modules}
        theme="snow"
        value={value} // Controlled input
        onChange={setValue}
      />
    </div>
  );
};

export default TextEditor;
