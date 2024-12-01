"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";


const LoginPage = ({userData}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/auth/login",
        { email, password },
        { withCredentials: true }
      )
      .then((result) => {
        if (result.data === "Success") {
          axios
            .post("http://localhost:3001/user", { withCredentials: true })
            .then((response) => {
              if (response.data.user) {
                userData = response.data.user
                toast("Logged in Successfully");
                router.push({
                  pathname: "/dashboard",
                  query: { data: userData }, // passing data as query parameters
                });
                console.log('userData', userData)
              }
            });
        } else {
          toast("User does not exist");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-screen flex bg-slate-900 text-white">
      {/* Left side with image and welcome text */}

      <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center bg-[url('/images/bg3.jpg')] bg-cover bg-no-repeat">
        <div className="relative z-10 text-center bg-[#1b2a41cb] flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl font-bold mb-6">Welcome Back!</h1>
          <p className="text-lg text-slate-300 mb-8">
            Provide your username and password and login into your account
          </p>
          <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <img
              src="/images/nexa.png"
              alt="Nexa Banking"
              className="h-8 mb-8"
            />
            <h2 className="text-2xl font-bold lg:hidden mb-4">Welcome Back!</h2>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Username or Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-slate-300">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
            >
              Login
            </button>

            <p className="text-center text-sm text-slate-300">
              Don't have an account?{" "}
              <a
                href="/auth/register"
                className="text-blue-400 hover:text-blue-300"
              >
                Create Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
