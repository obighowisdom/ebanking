import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenuDemo } from "./DropDown";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white w-full">
      {/* Main navigation */}
      <nav className="bg-white text-blue-900 w-full mt-20">
        <div className="container px-10 md:px-[100px] py-4 flex gap-9 items-center w-full justify-between md:justify-start">
          <div className="text-2xl font-bold ml-5">
            <Link href="/">
              <Image src="/images/nexa.png" width={70} height={90} alt="logo" />
            </Link>
          </div>
          <div>
            <DropdownMenuDemo />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
