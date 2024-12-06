import React from "react";
import Button from '../../components/ui/button'

const CardBox = ({account, text}) => {
  return (
    <div className="p-6 shadow-2xl bg-[#fff] rounded-lg flex flex-col gap-2 md:mx-[130px] mx-0">
      <h1 className="leading-{40px] text-[38px] text-blue-900 font-extrabold">
        Nexa Banking Online
      </h1>
      <h2 className="leading-{36px] text-[28px] text-[#061b32e3] font-bold">
        {account}
      </h2>
      <p className="leading-{24px] text-[20px] text-black font-medium">
        {text}
      </p>
      <button className="w-fit text-white font-bold text-[18px] px-5 leading-5 rounded-md shadow-lg bg-red-900 p-3">
        FIND OUT MORE
      </button>
    </div>
  );
};

export default CardBox;
