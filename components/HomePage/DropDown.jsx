"use client";
import MenuFive from "./Menus/MenuFive";
import MenuFour from "./Menus/MenuFour";
import MenuOne from "./Menus/MenuOne";
import MenuThree from "./Menus/MenuThree";
import MenuTwo from "./Menus/MenuTwo";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function DropdownMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div className='flex justify-between w-full items-center'>
        <div className="md:flex hidden items-center gap-8">
          <MenuOne />
          <MenuTwo />
          <MenuThree />
          <MenuFour />
          {/* <MenuFive /> */}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div>
        {isOpen && (
          <div className="md:hidden flex flex-col absolute left-0 w-full bg-white py-6 px-14 z-50 items-start gap-8 mt-3 border-b-red-700">
            <MenuOne />
            <MenuTwo />
            <MenuThree />
            <MenuFour />
            {/* <MenuFive /> */}
          </div>
        )}
      </div>
    </div>
  );
}
