import React from 'react'
import { FaCheck } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { Button } from "../../ui/button";
import Image from 'next/image'

const Data = [
  {
    text: "Exclusively for Nexa Banking current account customers within 5 years of graduating",
  },
  {
    text: "Loans available from $1,000 to $50,000",
  },
  {
    text: "Quick decision - you could receive immediate funds",
  },
  {
    text: "No set up or arrangement fees",
  },
  {
    text: "Make unlimited overpayments free of charge",
  },
];
const Graduate = () => {
  return (
    <div className="flex items center justify-center my-9">
      <div className="flex md:flex-row flex-col rounded-md gap-6 shadow-lg p-4 md:w-[950px] w-full bg-white">
        <div className="md:w-[60%] w-full flex flex-col gap-4">
          <h2 className="leading-{40px] text-[28px] text-blue-900 font-bold">
            GRADUATE LOAN
          </h2>
          {Data.map((item, index) => (
            <div key={index} className="flex gap-5 items-start">
              <div>
                <FaCheck size={20} color="blue" className="w-4 h-4" />
              </div>
              <p className="leading-[20px] text-[14px] font-medium text-black">
                {item.text}
              </p>
            </div>
          ))}
          <div className="flex gap-4">
            <MdOutlineError size={30} />

            <p className="text-sm font-medium text-blue-950">
              {" "}
              The rate is subject to change and the representative APR may not
              be the rate you will receive. We will offer you a rate based on our
              assessment of your personal financial circumstances. The maximum
              APR you could be offered is 21.9%.
            </p>
          </div>

          <Button
            variant="destructive"
            className="w-full rounded-sm bg-blue-950"
          >
            Apply Below!!!
          </Button>
        </div>
        <div className=" md:w-[38%] w-full flex flex-col bg-blue-950 text-white h-full p-6 gap-5">
          <p className="leading-[38px] w-full text-[25px] lg:text-[30px] md:text-[16px] font-extrabold text-white">
            3.3% APR <br />
            Representative
          </p>
          <p className="w-full leading-[25px] text-[14px] font-extrabold text-white">
            for loans between $5,000 and $25,000.
          </p>
          <Image
            src="/images/switch.png"
            height={50}
            width={150}
            alt="visa"
            className="w-fit h-fit my-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Graduate