import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";


const TopNav = () => {
  return (
    <header className="bg-[#033D75] text-[#F1F1F1] container">
      <div className="container px-10 md:px-[100px] py-2">
        {/* Top bar */}
        <div className="py-2 text-sm flex gap-5 flex-wrap items-center">
          <h3 className='font-extrabold'>Need help? Contact Us</h3>
          <div className="flex space-x-4">
            <div className="flex gap-2 items-center">
              <MdEmail color="#EF454D" size={20} />
              <a
                href="mailto:contact@evergreentrustco.com"
                className="hover:underline"
              >
                contact@evergreentrustco.com
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <IoCall color="#EF454D" size={20} />
              <a
                href="mailto:contact@evergreentrustco.com"
                className="hover:underline"
              >
                +1 (143) 2344 6675
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNav