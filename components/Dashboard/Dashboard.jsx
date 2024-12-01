import React from "react";
import { FaFolderClosed } from "react-icons/fa6";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaWindowRestore } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { MdInventory2 } from "react-icons/md";

const AccountDashboard = () => {
  return (
    <div className="bg-white text-white p-6 sm:p-8 md:p-14 lg:p-14 min-h-screen flex flex-col gap-4">
      <div className="flex justify-between gap-5 w-full">
        <div className="bg-[url('/images/wavs.jpg')] flex flex-col gap-6 bg-cover bg-no-repeat bg-center px-4 rounded-lg text-center w-full py-10">
          <h2 className="text-[19px] font-bold">Account Number</h2>
          <p className="text-[22px] font-extrabold">9349 9049 489</p>
        </div>
        <div className="bg-[url('/images/wavs.jpg')] flex flex-col gap-6 bg-cover bg-no-repeat bg-center px-4 rounded-lg text-center w-full py-10">
          <h2 className="text-[19px] font-bold">Available Balance</h2>
          <p className="text-[22px] font-extrabold">$0.00</p>
        </div>
      </div>
      <div className="flex justify-between gap-5 w-full">
        <div className="bg-[url('/images/wavs.jpg')] flex justify-between items-center gap-3 bg-cover bg-no-repeat bg-center px-8 rounded-lg w-full py-10">
          <div className="flex flex-col gap-4">
            <p className="text-[22px] font-extrabold">$0.00</p>
            <h2 className="text-[20px] font-bold">Deposit</h2>
          </div>
          <FaFolderClosed color="white" size={35} />
        </div>{" "}
        <div className="bg-[url('/images/wavs.jpg')] flex justify-between items-center gap-3 bg-cover bg-no-repeat bg-center px-8 rounded-lg w-full py-10">
          <div className="flex flex-col gap-4">
            <p className="text-[22px] font-extrabold">$0.00</p>
            <h2 className="text-[20px] font-bold">Withdrawals</h2>
          </div>
          <FaWindowRestore color="white" size={35} />
        </div>{" "}
        <div className="bg-[url('/images/wavs.jpg')] flex justify-between items-center gap-3 bg-cover bg-no-repeat bg-center px-8 rounded-lg w-full py-10">
          <div className="flex flex-col gap-4">
            <p className="text-[22px] font-extrabold">0</p>
            <h2 className="text-[20px] font-bold">Transactions</h2>
          </div>
          <FaArrowUpRightDots color="white" size={35} />
        </div>
      </div>
      <div className="flex justify-between gap-5 w-full">
        <div className="bg-[url('/images/wavs.jpg')] flex justify-between items-center gap-3 bg-cover bg-no-repeat bg-center px-8 rounded-lg w-full py-10">
          <div className="flex flex-col gap-4">
            <p className="text-[22px] font-extrabold">0</p>
            <h2 className="text-[20px] font-bold">Loans</h2>
          </div>
          <FaDollarSign color="white" size={35} />
        </div>{" "}
        <div className="bg-[url('/images/wavs.jpg')] flex justify-between items-center gap-3 bg-cover bg-no-repeat bg-center px-8 rounded-lg w-full py-10">
          <div className="flex flex-col gap-4">
            <p className="text-[22px] font-extrabold">0</p>
            <h2 className="text-[20px] font-bold">Investment</h2>
          </div>
          <FaWindowRestore color="white" size={35} />
        </div>{" "}
        <div className="bg-[url('/images/wavs.jpg')] flex justify-between items-center gap-3 bg-cover bg-no-repeat bg-center px-8 rounded-lg w-full py-10">
          <div className="flex flex-col gap-4">
            <p className="text-[22px] font-extrabold">0</p>
            <h2 className="text-[20px] font-bold">Future Save</h2>
          </div>
          <MdInventory2 color="white" size={35} />
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
