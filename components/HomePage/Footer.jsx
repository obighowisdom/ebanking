import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const menus = [
  {
    name: "Help and Support",
    link: "Got a question? We are here to help you",
    url: "",
  },
  {
    name: "Find a branch",
    link: "Find the nearest branch to your location",
    url: "",
  },
  {
    name: "Our performance",
    link: "View our service dashboard to see how we are doing",
    url: "",
  },
  {
    name: "About us",
    link: "Our Mission, Career, Goals and Objectives",
    url: "",
  },
];

const Footer = () => {
  return (
    <footer className="container md:px-[200px] px-10 py-10 bg-[#0c233c] mt-10">
      <div className="flex flex-wrap justify-between items-start gap-6">
        {menus.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <h1 className="text-[20px] font-bold text-white uppercase">
                {item.name}
              </h1>
              <Link
                href={item.url}
                className="text-[14px] font-medium text-white hover:text-red-900"
              >
                {item.link}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="w-full h-[2px] bg-red-900 my-10"></div>
      <div className="displya flex justify-between w-full">
        <Image src="/images/nexa.png" width={70} height={90} alt="logo" />
        <div className="flex gap-4">
          <div className="flex items-center justify-center p-3 cursor-pointer h-fit w-fit rounded-full hover:bg-red-600">
            <Link href="#">
              <FaFacebookF color="#F1F1F1" />
            </Link>
          </div>
          <div className="flex items-center justify-center p-3 cursor-pointer h-fit w-fit rounded-full hover:bg-red-600">
            <Link href="#">
              <FaXTwitter color="#F1F1F1" />
            </Link>
          </div>
          <div className="flex items-center justify-center p-3 cursor-pointer h-fit w-fit rounded-full hover:bg-red-600">
            <Link href="#">
              <FaGoogle color="#F1F1F1" />
            </Link>
          </div>
          <div className="flex items-center justify-center p-3 cursor-pointer h-fit w-fit rounded-full hover:bg-red-600">
            <Link href="#">
              <FaLinkedinIn color="#F1F1F1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
