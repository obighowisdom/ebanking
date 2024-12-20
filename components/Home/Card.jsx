"use client";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";

const Card = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="w-full flex flex-col gap-5">
      <div>
        <h2 className="leading-7 text-white font-mold text-[20px]">My Cards</h2>
      </div>
      <div className="flex justify-between flex-wrap items-center gap-4">
        <Image
          src="/images/bankcard.png"
          width={300}
          height={150}
          alt="my card"
          className="shadow-xl"
        />
        <button
          onClick={() => setShowModal(true)}
          className="p-8 rounded-md bg-blue-800 focus:shadow-md focus:shadow-white"
        >
          <FaPlus size={26} />
        </button>
      </div>

      <div className="border-t border-t-gray-400 w-full flex flex-col gap-3 pt-3 my-4 ">
        <div className="flex justify-between">
          <h3 className="text-gray-500 font-bold text-[16px]">Status</h3>
          <p className="text-white font-bold text-[14px]">Inactive</p>
        </div>
        <div className="flex justify-between">
          <h3 className="text-gray-500 font-bold text-[16px]">Type card</h3>
          <p className="text-white font-bold text-[14px]">Master</p>
        </div>
        <div className="flex justify-between">
          <h3 className="text-gray-500 font-bold text-[16px]">Currency</h3>
          <p className="text-white font-bold text-[14px]">USD</p>
        </div>
      </div>

      {/* modal */}

      <div
        style={{ display: showModal === false ? "none" : "" }}
        className="absolute bg-[#0000006b] w-full h-full bottom-0 z-50 top-0 left-0 flex items-center justify-center"
      >
        <div className="bg-white rounded-lg mx-5 shadow-md w-full shadow-black h-fit p-4 md:w-[500px] ">
          <div
            onClick={() => setShowModal(false)}
            className="w-full flex justify-end cursor-pointer"
          >
            <IoMdCloseCircle color="red" size={20} />
          </div>{" "}
          <h1 className="text-center w-full leading-[30px] font-bold text-[24px] text-gray-600 my-6">
            Request for Card
          </h1>
          <form action="" className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-3 w-full">
              <label
                className="text-blue-950 font-semibold text-[14px]"
                htmlFor="number"
              >
                Account Number:
              </label>
              <input
                className="w-full border p-2 rounded-md focus-within:shadow-md focus:shadow-blue-900 outline-none"
                id="number"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <label
                className="text-blue-950 font-semibold text-[14px]"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                required
                className="w-full border p-2 rounded-md focus-within:shadow-md focus:shadow-blue-900 outline-none"
                id="email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <label
                className="text-blue-950 font-semibold text-[14px]"
                htmlFor="address"
              >
                Residential Address:
              </label>
              <input
                required
                className="w-full border p-2 rounded-md focus-within:shadow-md focus:shadow-blue-900 outline-none"
                id="address"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <label
                className="text-blue-950 font-semibold text-[14px]"
                htmlFor="address"
              >
                Card Type:
              </label>
              <input
                required
                disabled
                className="w-full border p-2 rounded-md focus-within:shadow-md focus:shadow-blue-900 outline-none"
                id="address"
                type="text"
                value="Master Card"
              />
            </div>
            <button className="w-full mt-4 p-3 rounded bg-blue-900 flex items-center justify-center hover:bg-slate-600 text-white font-semibold">
              Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
