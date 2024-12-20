// Sidebar.js

import Image from "next/image";
import Link from "next/link";
import { MdDashboardCustomize } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { RiCoinsFill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";

const Menu = [
  {
    menus: "Dashboard",
    icon: <MdDashboardCustomize color="gray" />,
    url: "/user/home",
  },
  {
    menus: "Transactions",
    icon: <GrTransaction color="gray" />,
    url: "/user/transaction",
  },

  {
    menus: "Investment",
    icon: <RiCoinsFill color="gray" />,
    url: "/user/investment",
  },
  {
    menus: "Loans",
    icon: <GiMoneyStack color="gray" />,
    url: "/user/loans",
  },
];

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed left-0 top-0 pt-5 px-4 h-full w-64 bg-gray-900 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 z-40`}
    >
    
      <div className="flex flex-col justify-between h-full ">
        <div className="mt-20 flex flex-col gap-3">
          {Menu.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center rounded-xl gap-4 hover:bg-black focus:bg-blue-600 hover:w-full hover:px-1"
              >
                {item.icon}
                <Link
                  href={item.url}
                  className="leading-[30px] text-gray-300 font-normal text-[16px]"
                >
                  {item.menus}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex items-center rounded-xl gap-4 hover:bg-black hover:w-full hover:px-1">
            <IoSettingsOutline color="gray" />
            <Link
              href="/user/settings"
              className="leading-[30px] text-gray-300 font-normal text-[16px]"
            >
              Settings & KYC
            </Link>
          </div>
          <div className="flex items-center rounded-xl gap-4 hover:bg-black hover:w-full hover:px-1">
            <IoLogOut color="red" />
            <Link
              href={"#"}
              className="leading-[30px] text-gray-300 font-normal text-[16px]"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
