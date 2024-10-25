import axios from "axios";

const uploadImageToCloudinary = async (
  imageFile,
) => {
  const cloudName = "dhcjdfpf7";
  const uploadPreset = "SDFLSJKDF";
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();

  formData.append("file", imageFile);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await axios.post(cloudinaryUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data.secure_url;
  } catch (error) {
    console.log("Failed to upload image to Cloudinary");

    return undefined;
  }
};

export default uploadImageToCloudinary;
