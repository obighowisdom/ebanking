import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";


const TopNav = () => {
  return (
    <header className="bg-[#033D75] text-[#F1F1F1] z-40 top-0 fixed w-screen">
      <div className="container px-10 md:px-[100px] py-2">
        {/* Top bar */}
        <div className="py-2 text-sm flex gap-5 flex-wrap items-center">
          <h3 className='font-extrabold'>Need help? Contact Us</h3>
          <div className="flex space-x-2 md:space-x-4 flex-wrap">
            <div className="flex gap-2 items-center">
              <MdEmail color="#EF454D" size={20} />
              <a
                href="mailto:support@nexabanking.com"
                className="hover:underline"
              >
                support@nexabanking.com
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <IoCall color="#EF454D" size={20} />
              <a
                href=""
                className="hover:underline"
              >
                +1 (425)2433460
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNav