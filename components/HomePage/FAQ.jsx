import React from 'react'
import Image from 'next/image'
import { Button } from "../ui/button";


const FAQ = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-7">
      <h1 className="text-4xl font-bold text-center text-[#003087] mb-12">
        Choose what&apos;s right for you
        <div className="w-20 h-1 bg-[#003087] mx-auto mt-2"></div>
      </h1>
      <div className="flex flex-wrap gap-24 items-center md:justify-start justify-center">
        <Image
          src="/images/question.jpg"
          height={400}
          width={300}
          alt="image"
        />
        <div className="md:w-[600px] w-full md:h-[400px] h-full px-12 py-14 bg-[#E5EBF1] mx-4 md:mx-0 rounded-md flex flex-col gap-8">
          <h3 className="leading-8 text-3xl font-bold text-[#EF454D] ">
            Account questions? Just ask me
          </h3>
          <p className="leading-[30px] text-[16px] font-medium text-black ">
            I’m just a few taps away — open your Ever green trust co Bank ®
            <br /> mobile app and say hello.
          </p>
          <Button
            variant="destructive"
            className="w-fit text-white font-bold text-[13px] leading-5 rounded-none"
          >
            ASK QUESTIONS
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FAQ