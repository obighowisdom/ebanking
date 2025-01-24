"use client";

import { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { Spin } from "antd";
import axios from "axios";
import { useSession } from "next-auth/react";
import ProfileImage from "./ProfileImage";
import { useRouter } from "next/navigation";

export default function Settings({ userData }) {
  const [currentUser, setCurrentUser] = useState(null);
  const { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState(null);
  const [cardFront, setCardFront] = useState(null);
  const [cardBack, setCardBack] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
   const [otherID, setOtherID] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(true);

  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const router = useRouter();

  const userEmail = session?.user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (cardType === "") {
      toast.error("Invalid Card Type");
      setLoading(false);
      return;
    }
    if (cardNumber === "") {
      toast.error("Enter a valid card number");
      setLoading(false);
      return;
    }
    if (issueDate === "") {
      toast.error("issue date required");
      setLoading(false);
      return;
    }
    if (expiryDate === "") {
      toast.error("expiry date required");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://www.nexabanking.com/api/kyc", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cardType,
          otherID,
          cardNumber,
          issueDate,
          expiryDate,
          email: userEmail,
          status: "pending",
        }),
      });
      const data = res.json();
      if (res.ok) {
        setLoading(false);
        router.push("/user/home");
        toast.success("Request Sent, you will be contacted through email");
      } else {
        toast.error("failed. Try again");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    // Assuming userData and session are available in your component

    const currentUser = userData?.find(
      (item) => item.email === session?.user?.email
    );

    setCurrentUser(currentUser); // Set the matched user in the state
  }, [userData, session]);

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
          <ProfileImage />

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
              <Spin /> <b className="ml-3">fetching profile...</b>
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
                  htmlFor="card"
                  className="block text-sm leading-[32px] font-semibold text-blue-950"
                >
                  Identity Card <b className="text-red-700">*</b>
                </label>
                <select
                  id="card"
                  onChange={(e) => setCardType(e.target.value)}
                  className="py-3 px-4 border rounded shadow-md"
                >
                  <option value="">-------</option>
                  <option value="drivers license">Drivers License</option>
                  <option value="others">Others</option>
                </select>
                {cardType === "others" && (
                  <input
                    type="text"
                    placeholder="please specify"
                    className="outline-none border-b border-b-red-900 py-2 my-4"
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
                  onChange={(e) => setCardNumber(e.target.value)}
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
                  onChange={(e) => setIssueDate(e.target.value)}
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
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
            </div>

            {/* <div className="flex flex-col md:flex-row justify-between gap-6">
             
              <div className="flex flex-col gap-4 w-full">
               
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
                    
                  </div>
                )}

               
                <label
                  htmlFor="front-upload"
                  className="flex items-center cursor-pointer transition duration-200 bg-gray-300 p-4 rounded-xl"
                >
                  <FiUpload className="text-blue-600 text-sm mr-2" />
                  <span className="text-blue-600">
                    Upload ID Card Front View
                  </span>
                </label>

                #
                <input
                  id="front-upload"
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  className="hidden"
                  onChange={handlefront}
                />
              </div>
              

              <div className="flex flex-col gap-4 w-full">
                
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
                    
                  </div>
                )}

                
                <label
                  htmlFor="back-upload"
                  className="flex items-center cursor-pointer transition duration-200 bg-gray-300 p-4 rounded-xl"
                >
                  <FiUpload className="text-blue-600 text-sm mr-2" />
                  <span className="text-blue-600">
                    Upload ID Card Back View
                  </span>
                </label>

                <input
                  id="back-upload"
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  className="hidden"
                  onChange={handleBack}
                />
              </div>
            </div> */}
          </div>
        </div>

        {/* Request Button */}
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            {loading === true ? <Spin /> : <>Request </>}
          </button>
        </div>
      </div>
    </div>
  );
}
