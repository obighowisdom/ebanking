import React from "react";
import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Search,
  Bell,
  MoreVertical,
} from "lucide-react";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
];

const users = [
  {
    id: 1,
    user: "John Doe",
    amount: 120,
    status: "completed",
    date: "2024-03-19",
  },
  {
    id: 2,
    user: "Jane Smith",
    amount: 300,
    status: "pending",
    date: "2024-03-18",
  },
  {
    id: 3,
    user: "Mike Johnson",
    amount: 450,
    status: "completed",
    date: "2024-03-17",
  },
  {
    id: 4,
    user: "Sarah Wilson",
    amount: 200,
    status: "failed",
    date: "2024-03-16",
  },
];

const Card = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Admin</p>
        </div>
        {/* <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
          </button>
        </div> */}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold">1,482</h3>
              {/* <p className="text-green-500 text-sm">+12.5% from last month</p> */}
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Not Approved Users</p>
              <h3 className="text-2xl font-bold">1,482</h3>
              {/* <p className="text-green-500 text-sm">+12.5% from last month</p> */}
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Investment Request</p>
              <h3 className="text-2xl font-bold">2</h3>
              {/* <p className="text-green-500 text-sm">+8.2% from last month</p> */}
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Loan Request</p>
              <h3 className="text-2xl font-bold">384</h3>
              {/* <p className="text-red-500 text-sm">-2.4% from last month</p> */}
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <ShoppingCart className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        {/* <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Growth</p>
              <h3 className="text-2xl font-bold">16.5%</h3>
              <p className="text-green-500 text-sm">+4.3% from last month</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
