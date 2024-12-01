'use client'
import { Button } from "@/components/ui/button";
import SpinComponent from "@/components/ui/spinner";
import React, { useState, useEffect } from "react";

const LoadingComponent = ({title, percent, stop}) => {
  const [loadingProgress, setLoadingProgress] = useState(percent);
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 2;
        if (newProgress >= stop) {
          setShowOTPInput(true);
          clearInterval(timer);
        }
        return newProgress;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className="w-full h-full flex items-center justify-center my-11">
      <div className="md:w-[400px] w-fit h-fit py-10 bg-white rounded-lg shadow-lg px-6">
        <div className="flex flex-col items-center">
          {!showOTPInput ? (
            <div>
              <div className="text-[16px] font-bold mb-4">Processing...</div>
              <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              <div className="text-[12px]">{loadingProgress}%</div>
            </div>
          ) : (
            <div>
                              <div className="flex flex-col gap-5 marker:selection:justify-center items-center px-4 mt-7 py-2 rounded">
                                  <SpinComponent />
                <h1 className="leading-5 text-extrabold text-[22px] text-[#14233C] text-center w-full">
                  Enter {title}
                </h1>
                <p className="leading-6 text-center w-full text-bold text-black">
                  contact customer service to get your{" "}
                  <b className="text-extrabold">{title} </b> to complete the
                  transaction
                </p>
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-4 py-2 text-2xl w-full max-w-xs mb-4"
                    value={otp}
                    onChange={handleOTPChange}
                  />
                </div>
              </div>

              <Button variant="secondary" className="w-full">
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
