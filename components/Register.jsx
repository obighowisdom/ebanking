"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spin } from "antd";
import { countries } from "./Data/LinkData/Country";



const Register = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountNumber, setAccountNumber] = useState("Nil");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [status, setStatus] = useState("pending");
  const [isChecked, setIsChecked] = useState(false);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [landmark, setLandmark] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isChecked === false) {
      toast.error("Accept the terms and conditions");
      setLoading(false);

      return;
    }
    if (password !== confirmPassword) {
      toast.error("Error confirming password");
      setLoading(false);
      return;
    }

    try {
      const resUserExists = await fetch(
        "http://localhost:3000/api/auth/userExists",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const { user } = await resUserExists.json();

      if (user) {
        toast.error("User already exists.");
        setLoading(false);
        return;
      }

      const res = await fetch("http://localhost:3000/api/auth/signup", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          dob,
          country,
          state,
          city,
          zipcode,
          landmark,
          address,
          phone,
          accountType,
          accountNumber,
          profileImage,
          role,
          status,
        }),
      });
      const data = res.json();
      if (res.ok) {
        toast.success("registration successful, you are being re-directed");
        router.push("/auth/login");
        setLoading(false);
      } else {
        toast.error("registration failed. Try again");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
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

          <form onSubmit={handleSignup} className="space-y-6">
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
                <select
                  id="countrie"
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border text-white border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">---</option>
                  {countries.map((items, index) => (
                    <option key={index} value={items.value}>
                      {items.country}
                    </option>
                  ))}

                  {/* Add more countries as needed */}
                </select>
              </div>
              <div className="text-white">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  States <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
            </div>
            {/* Second row: Country and Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="text-white border-none">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
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
              <div className="text-white border-none">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Zip Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div className="text-black border-none">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Nearest Landmark <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  onChange={(e) => setLandmark(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  onChange={(e) => setDob(e.target.value)}
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
                    type="text"
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
                  <option value="Regular">Regular</option>
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
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="block text-sm font-medium mb-2"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                onChange={(e) => setIsChecked(e.target.checked)}
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
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
            >
              {loading === true ? <Spin /> : <>Create Account </>}
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

export default Register;
