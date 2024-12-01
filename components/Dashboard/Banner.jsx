"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";


const NavbarAndHero = ({title}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "DASHBOARD", href: "/dashboard", active: true },
    { label: "DEPOSIT", href: "deposit" },
    { label: "WITHDRAW", href: "/withdraw" },
    { label: "INVEST", href: "/invest" },
    { label: "LOAN", href: "/lan" },
    { label: "TRANSFER", href: "/transfer" },
    { label: "PROFILE", href: "/profile" },
  ];

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                src={"/images/nexa.png"}
                alt="NexaBanking"
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center
                    ${
                      item.active
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white hover:bg-slate-800"
                    }
                    transition-colors duration-200`}
                >
                  {item.label}
                  
                </a>
              ))}
            </div>

            {/* Logout Button */}
            <div className="hidden md:flex items-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Logout
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium
                    ${
                      item.active
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white hover:bg-slate-800"
                    }
                    ${
                      item.hasDropdown
                        ? "flex items-center justify-between"
                        : ""
                    }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </a>
              ))}
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[200px] overflow-hidden text-center">
        {/* Background Image */}
        <div
          className="absolute w-full inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bank.jpg')",
            backgroundColor: "rgba(15, 23, 42, 0.7)",
            backgroundBlendMode: "overlay",
          }}
        />

        {/* Content */}
        <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl font-bold text-white w-full text-center">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavbarAndHero;
