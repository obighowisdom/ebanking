import * as React from "react";

import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";

const bankData = [
  {
    title: "Discover our new 95% mortgages",
    text: " Our M&A team works in patnership with coverage bankers in providing solutions, using a highly analytical apprach,                  providing unique insights.",
    img: "/images/visa.png",
  },
  {
    title: "Global Finance",
    text: " Our M&A team works in patnership with coverage bankers in providing solutions, using a highly analytical apprach,                  providing unique insights.",
    img: "/images/visa1.png",
  },
];

export function CarouselDemo() {
  return (
    <Carousel className=" md:w-[600px] w-full h-fit bg-[#ffffffc4] rounded-md mt-[50px]">
      <CarouselContent>
        {bankData.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-6 flex justify-between">
              <div className="flex w-[50%] flex-col justify-between gap-4 h-full">
                <h3 className="leading-[36px] font-semibold text-[26px] text-blue-900">
                  {item.title}
                </h3>
                <p className="text-[#373737] leading-[32px] font-medium text-[16px]">
                 {item.text}
                </p>
                <Button variant="default" className="w-fit bg-[#033D75] text-white font-bold text-[18px] leading-5">
                  Find out more
                </Button>
              </div>
              <Image
                src={item.img}
                height={50}
                width={150}
                alt="visa"
                className="w-fit h-fit"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
