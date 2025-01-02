"use client";

import { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { Button } from "../../components/ui/button";
import { Spin } from "antd";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Settings({ userData }) {
  const [currentUser, setCurrentUser] = useState(null);
  const { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState(null);
  const [cardFront, setCardFront] = useState(null);
  const [cardBack, setCardBack] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [ID, setID] = useState("");
  const [otherID, setOtherID] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    // Assuming userData and session are available in your component

    const currentUser = userData?.find(
      (item) => item.email === session?.user?.email
    );

    setCurrentUser(currentUser); // Set the matched user in the state
  }, [userData, session]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setSelectedFile(URL.createObjectURL(file)); // Set the file preview
    }
  };

  // handle profile image
  const handleSubmit = async (e) => {
    e.preventDefault()
    toast.error('services busy!!!')
  };

  // const handleUpload = async () => {
  //   if (!image) return;

  //   setLoading(true);

  //   const formData = new FormData();
  //   formData.append("image", image);

  //   try {
  //     const response = await fetch(
  //       "http://localhost:3000/api/profile",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     const data = await response.json();

  //     if (data.imageUrl) {
  //       // Save the image URL to the user's profile (either state or database)
  //       setProfileImageUrl(data.imageUrl); // Example: update profile image in state or pass to parent
  //       toast.success("Profile image uploaded successfully");
  //     } else {
  //       toast.error("Failed to upload image");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //     toast.error("Error uploading image");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //   front card upload
  const handlefront = (e) => {
    const front = e.target.files[0];
    if (front) {
      setCardFront(URL.createObjectURL(front)); // Set the file preview
    }
  };
  // back card upload
  const handleBack = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCardBack(URL.createObjectURL(file)); // Set the file preview
    }
  };

  return (
    <div className=" h-full w-full flex flex-col items-center p-2">
      <div className="w-full bg-white p-8 rounded-lg shadow-md">
        {/* <h1 className="text-3xl font-semibold mb-6 text-center">Settings</h1> */}

        {/* Profile Settings Section */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold mb-2 uppercase text-center">
            Profile Settings
          </h2>
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

          {currentUser ? (
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <h4 className="text-[18px] text-gray-700 font-bold ">
                  Personal Details
                </h4>
                <div className="flex md:flex-row flex-col w-full gap-4">
                  <div className="w-full">
                    <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue={currentUser.name}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={currentUser.email}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col w-full gap-4">
                  <div className="w-full">
                    <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      defaultValue={currentUser.dob}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      defaultValue={currentUser.phone}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[18px] text-gray-700 font-bold ">
                  Contact Details
                </h4>
                <div className="flex md:flex-row flex-col w-full gap-4">
                  <div className="w-full">
                    <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                      Country
                    </label>
                    <input
                      type="text"
                      defaultValue={currentUser.country}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                      State
                    </label>
                    <input
                      type="text"
                      defaultValue={currentUser.state}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col w-full gap-4">
                  <div className="w-full">
                    <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                      City
                    </label>
                    <input
                      type="text"
                      defaultValue={currentUser.city}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      defaultValue={currentUser.zipcode}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col w-full gap-4">
                  <div className="w-full">
                    <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                      Address
                    </label>
                    <input
                      type="text"
                      defaultValue={currentUser.address}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                      Nearest Landmark
                    </label>
                    <input
                      type="text"
                      defaultValue={currentUser.landmark}
                      disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              {/* <div className="mt-6">
                <button className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                  Save Changes
                </button>
              </div> */}
            </div>
          ) : (
            <div className="w-full h-screen flex items-center justify-center">
              <Spin />
            </div>
          )}

          {/* KYC Starts */}
          <div className="flex flex-col gap-4 mt-4">
            <h4 className="text-[20px] text-center text-gray-700 font-extrabold ">
              KYC VERIFICATION
            </h4>
            <div className="flex md:flex-row flex-col w-full gap-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor=""
                  className="block text-sm leading-[32px] font-semibold text-blue-950"
                >
                  Identity Card <b className="text-red-700">*</b>
                </label>
                <select
                  id="invest"
                  onChange={(e) => setID(e.target.value)}
                  className="py-3 px-4 border rounded shadow-md"
                >
                  <option value="">-------</option>
                  <option value="drivers license">Drivers License</option>
                  <option value="others">Others</option>
                </select>
                {ID === "others" && (
                  <input
                    type="text"
                    placeholder="please specify"
                    className="outline-none border-b py-2 my-4"
                    onChange={(e) => setOtherID(e.target.value)}
                  />
                )}
              </div>
              <div className="w-full">
                <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                  Identity Card Number <b className="text-red-700">*</b>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex w-full gap-4">
              <div className="w-full">
                <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                  Issued Date <b className="text-red-700">*</b>
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div className="w-full">
                <label className="block text-sm leading-[32px] font-semibold text-blue-950">
                  Expiry Date <b className="text-red-700">*</b>
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* Upload card front */}
              <div className="flex flex-col gap-4 w-full">
                {/* <h1 className="text-sm font-semibold text-center mb-6">
                Upload Profile Image
              </h1> */}
                {/* Image Preview */}
                {cardFront ? (
                  <div className="mt-4">
                    <img
                      src={cardFront}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-md border border-blue-500"
                    />
                  </div>
                ) : (
                  <div className="mt-4">
                    {/* <img
                      src="/images/photo.jpg"
                      alt="Preview"
                      className="w-full h-10 object-contain rounded-md border border-blue-500"
                    /> */}
                  </div>
                )}

                {/* Custom File Input with Upload Icon */}
                <label
                  htmlFor="front-upload"
                  className="flex items-center cursor-pointer transition duration-200 bg-gray-300 p-4 rounded-xl"
                >
                  <FiUpload className="text-blue-600 text-sm mr-2" />
                  <span className="text-blue-600">
                    Upload ID Card Front View
                  </span>
                </label>

                {/* File Input */}
                <input
                  id="front-upload"
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  className="hidden"
                  onChange={handlefront}
                />
              </div>
              {/* Upload Card back */}

              <div className="flex flex-col gap-4 w-full">
                {/* <h1 className="text-sm font-semibold text-center mb-6">
                Upload Profile Image
              </h1> */}
                {/* Image Preview */}
                {cardBack ? (
                  <div className="mt-4">
                    <img
                      src={cardBack}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-md border border-blue-500"
                    />
                  </div>
                ) : (
                  <div className="mt-4">
                    {/* <img
                      src="/images/photo.jpg"
                      alt="Preview"
                      className="w-full h-40 object-contain rounded-md border border-blue-500"
                    /> */}
                  </div>
                )}

                {/* Custom File Input with Upload Icon */}
                <label
                  htmlFor="back-upload"
                  className="flex items-center cursor-pointer transition duration-200 bg-gray-300 p-4 rounded-xl"
                >
                  <FiUpload className="text-blue-600 text-sm mr-2" />
                  <span className="text-blue-600">
                    Upload ID Card Back View
                  </span>
                </label>

                {/* File Input */}
                <input
                  id="back-upload"
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  className="hidden"
                  onChange={handleBack}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Request Button */}
        <div className="mt-6">
          <button className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
            Request
          </button>
        </div>
      </div>
    </div>
  );
}
