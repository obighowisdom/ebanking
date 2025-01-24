import { Button } from "../../ui/button";
import React from "react";
import Image from 'next/image'

const data = [
  {
    image: "/images/invest1.jpg",
    title: "Stock and Shares ISAs",
    text: "Make the most of your ISA allowance. Choose a ready-made World Selection portfolio, or build and manage your own portfolio of funds or securities.",
  },
  {
    image: "/images/money.jpg",
    title: "Investment funds",
    text: "Research, buy, and track investment funds online via our Global Investment Centre, or top up / add on to your existing Selected investment funds.",
  },
  {
    image: "/images/girl.jpg",
    title: "Share Dealings",
    text: "Make your own investment decisions with our sharedealing accounts. Build a portfolio of shares with InvestDirect or InvestDirectPlus.",
  },
  {
    image: "/images/bg4.jpg",
    title: "Premier Advice",
    text: "Build the future you've imagined with the Ever green trust co Bank Premier advice service.",
  },
];

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-evenly items-center w-full flex-wrap">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="border rounded-lg shadow-md flex flex-col gap-4 items-center w-full md:w-[250px] h-fit p-4"
              >
                <img
                  src={item.image}
                  alt="image"
                  className="w-full md:h-[150px] h-[250px] rounded-lg object-cover"
                />
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-[#003087] text-center">
                    {item.title}
                  </h2>
                  <p className='text-sm text-gray-700 font-medium'>{item.text}</p>
                </div>
                <Button variant="destructive" className='w-full'> Invest Now </Button>
              </div>
            );
        })}
      
    </div>
  );
};

export default Card;
