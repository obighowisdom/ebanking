import { Button } from "@/components/ui/button";
import React from "react";
import LoadingComponent from "./LoadingState";

const Load = () => {
  return (
    <div className="w-full h-full flex items-center justify-center my-11">
      <div className="md:w-[400px] w-fit h-fit py-10 bg-white rounded-lg shadow-lg px-6">
    <LoadingComponent />
      </div>
    </div>
  );
};

export default Load;
