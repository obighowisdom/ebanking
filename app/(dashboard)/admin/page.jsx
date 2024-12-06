import React from "react";
import { FaHome, FaChartLine, FaUserCircle, FaCog } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white p-6 flex flex-col justify-between w-64">
        <div>
          <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
          <nav>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaHome className="mr-4" />
                <a href="#">Dashboard</a>
              </li>
              <li className="flex items-center">
                <FaChartLine className="mr-4" />
                <a href="#">Analytics</a>
              </li>
              <li className="flex items-center">
                <FaUserCircle className="mr-4" />
                <a href="#">Users</a>
              </li>
              <li className="flex items-center">
                <FaCog className="mr-4" />
                <a href="#">Settings</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <a href="#" className="flex items-center">
            <FaUserCircle className="mr-4" />
            <span>John Doe</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Welcome, John Doe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Total Users</h3>
            <p className="text-4xl font-bold">1,234</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Registered Today</h3>
            <p className="text-4xl font-bold">45</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">New Orders</h3>
            <p className="text-4xl font-bold">78</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Total Revenue</h3>
            <p className="text-4xl font-bold">$12,345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
