"use client";
import { useState, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TopNav = ({ isSidebarOpen, toggleSidebar }) => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    // Function to update date and time
    const updateDateTime = () => {
      const now = new Date();
      const currentDate = now.toLocaleDateString(); // Format date as "MM/DD/YYYY"
      const currentTime = now.toLocaleTimeString(); // Format time as "HH:MM:SS AM/PM"
      setDateTime(`${currentDate} ${currentTime}`);
    };

    // Update every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Set the initial date and time
    updateDateTime();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="pt-10 pb-4 px-6 bg-gray-900 fixed z-40 w-full mb-4">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-5 items-center">
          <Link href="/">
            <Image src="/images/nexa.png" width={40} height={50} alt="logo" />
          </Link>
          <h1 className="leading-[30px] text-white font-semibold hidden md:block text-[20px]">
            Nexa Banking
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {/* <IoIosNotificationsOutline size={20} color="blue" /> */}

          <div className="flex items-center gap-3">
            <img
              src="/images/img6.jpg"
              width={32}
              height={32}
              className="w-9 h-9 object-cover rounded-full"
            />
            <p className="font-bold text-[14px] leading-[24px] text-white">
              Admin
            </p>
          </div>
        </div>
        {/* toggle */}
        <button onClick={toggleSidebar} className="mr-4 md:hidden text-white">
          {isSidebarOpen ? <X size={24} /> : <FaBarsStaggered size={24} />}
        </button>
      </div>
    </div>
  );
};

export default TopNav;
