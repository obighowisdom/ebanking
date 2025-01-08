"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { FiUpload } from "react-icons/fi";
import { Button } from "../../components/ui/button";


const ProfileImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
    

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setSelectedFile(URL.createObjectURL(file)); // Set the file preview
    }
  };

  // handle profile image
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.error("services busy!!!");
  };

  return (
    <div>
      {/* image file */}
      <div className="flex flex-col gap-2 items-center">
        {/* <h1 className="text-sm font-semibold text-center mb-6">
                Upload Profile Image
              </h1> */}
        {/* Image Preview */}
        {selectedFile ? (
          <div className="mt-4">
            <img
              src={selectedFile}
              alt="Preview"
              className="w-48 h-48 object-cover rounded-full border border-blue-500"
            />
          </div>
        ) : (
          <div className="mt-4">
            <img
              src="/images/user.jpg"
              alt="Preview"
              className="w-40 h-40 object-cover rounded-full"
            />
          </div>
        )}

        {/* Custom File Input with Upload Icon */}
        <div className="flex gap-3 items-center">
          <label
            htmlFor="file-upload"
            className="flex justify-center items-center cursor-pointer hover:bg-blue-100 transition duration-200"
          >
            <FiUpload className="text-blue-600 text-sm mr-2" />
            <span className="text-blue-600">Upload Image</span>
          </label>

          {/* File Input */}
          <input
            name="image"
            id="file-upload"
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            className="hidden"
            onChange={handleImageChange}
          />

          {selectedFile ? (
            <Button
              onClick={handleSubmit}
              disabled={loading}
              variant="secondary"
            >
              {loading ? <Spin /> : "Upload Image"}
            </Button>
          ) : (
            <div className="mt-4"></div>
          )}
        </div>
      </div>
      {/* end uplaod */}
    </div>
  );
};

export default ProfileImage;
