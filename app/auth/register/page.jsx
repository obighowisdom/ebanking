"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const RegisterPage = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [cityid, setcityid] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState("");
  const [password, setPaassword] = useState("");
  const [role, setRole] = useState("user");
  const [status, setStatus] = useState("false");
const [isChecked, setIsChecked] = useState(false);

  const router = useRouter()

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/register", {
        countryid,
        stateid,
        cityid,
        name,
        email,
        address,
        date,
        phone,
        accountType,
        password,
        role,
        status
      })
      .then((result) => {
        if (result.status == 201) {
          toast("Account created");
          router.push('/auth/login')
        }
      }).catch(err => {
        if (err.response && err.response.status === 400) {
          toast("Email already exists. Use a different email");
        } else {
          console.log(err)
        }
      })
  };

  return (
    <div className="min-h-screen flex bg-slate-900 text-white">
      {/* Left side with image and welcome text */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center bg-[url('/images/img7.jpg')] bg-cover bg-no-repeat">
        <div className="relative z-10 text-center bg-[#1b2a41cb] flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl font-bold mb-6">Create New Account</h1>
          <p className="text-lg text-slate-300 mb-8">
            You have to provide all of your valid information as we want.
          </p>
          <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Right side with registration form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-3">
        <div className="max-w-xl w-full mx-auto">
          <div className="mb-8">
            <img
              src="/images/nexa.png"
              alt="Nexa Banking"
              className="h-8 mb-8"
            />
            <h2 className="text-2xl font-bold lg:hidden mb-4">
              Create New Account
            </h2>
          </div>

          <form className="space-y-6" onSubmit={handleSignup}>
            {/* First row: Username and Email */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium mb-2"
                >
                  Full Names <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-Mail Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
            {/* additional row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="text-black bg-none">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <CountrySelect
                  onChange={(e) => {
                    setCountryid(e.id);
                  }}
                  placeHolder="Select Country"
                  className="bg-none text-black border-none"
                />
              </div>
              <div className="text-black">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  States <span className="text-red-500">*</span>
                </label>
                <StateSelect
                  countryid={countryid}
                  onChange={(e) => {
                    setstateid(e.id);
                  }}
                  placeHolder="Select State"
                />
              </div>
              <div className="text-black border-none">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <CitySelect
                  countryid={countryid}
                  stateid={stateid}
                  onChange={(e) => {
                    setcityid(e.id);
                  }}
                  placeHolder="Select City"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="addres"
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Second row: Country and Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="dob" className="block text-sm font-medium mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium mb-2"
                >
                  Mobile <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 py-3 bg-slate-800 border border-r-0 border-slate-700 rounded-l-lg text-slate-400"></span>
                  <input
                    type="tel"
                    id="mobile"
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-r-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="account"
                  className="block text-sm font-medium mb-2"
                >
                  Account Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="account"
                  onChange={(e) => setAccountType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="PREMIUM">Premium</option>
                  <option value="SAVINGS">Savings</option>
                  <option value="STUDENT">Student</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPaassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Third row: Password and Confirm Password */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"></div> */}

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={(e)=>setIsChecked(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-slate-300">
                I agree with{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Company Policy
                </a>
                {" • "}
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </a>
                {" • "}
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Terms of Service
                </a>
              </label>
            </div>

            {/* Register Button */}
            <button
              disabled={isChecked}
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
            >
              Create Account
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-slate-300">
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="text-blue-400 hover:text-blue-300"
              >
                Login Now
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
