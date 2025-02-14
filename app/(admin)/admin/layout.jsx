"use client";
import localFont from "next/font/local";
import "../../globals.css";
import Sidebar from "../../../components/Admin/Sidebar";
import TopNav from "../../../components/Admin/Topnav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../../../components/Admin/Card";
import { useState } from "react";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <html lang="en">
      <body
        className={`bg-[#000] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-fit">
          <Sidebar isOpen={isSidebarOpen} />
          <div className=" w-full flex flex-col">
            <TopNav
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <main
              className={`transition-all duration-300 ease-in-out pt-[100px] ${
                isSidebarOpen ? "md:ml-64" : "ml-0 md:ml-64"
              }`}
            >
              <div className="container mx-auto px-6 py-4 w-full">
                <ToastContainer />
                <Card />
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
