import React from "react";
import { Button } from "../ui/button";


const CTA = () => {
  return (
    <section className="w-full md:h-[300px] h-fit bg-[url('/images/img1.jpg')] bg-no-repeat bg-cover bg-fixed my-16">
      <div className="w-full h-full bg-[#061b32e3] py-8 flex flex-col items-center justify-center gap-10">
        <h2 className="text-[#F1F1F1] md:text-[43px] text-[30px] font-bold text-center">
          Open our most popular savings account
        </h2>
        <p className="text-white md:text-[30px] text-[18px] font-bold text-center">
          Apply for a new Savings℠ account in minutes.
        </p>
        <Button
          variant="destructive"
          className="w-fit text-white font-bold text-[13px] px-5 leading-5 rounded-none"
        >
          APPLY
        </Button>
      </div>
    </section>
  );
};

export default CTA;
