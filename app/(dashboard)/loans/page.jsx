import React from "react";
import { AccordionDemo } from "../../../components/Accounts/Accordion";
import Hamburger from "../../../components/Accounts/Hamburger";
import Image from "next/image";
import { GrStatusGood } from "react-icons/gr";
import { Button } from "../../../components/ui/button";
import TopNav from "../../../components/HomePage/TopNav";
import Header from "../../../components/HomePage/Header";

const Data = [
  {
    text: "Borrow from $500 to $5,000, The approved loan amount is subject to our assessment of your personal financial circumstances.",
  },
  {
    text: " Flexible repayment terms. Choose how much you want to repay each month (minimum repayment applies) ",
  },
  {
    text: `Redraw once you've repaid
Once you've repaid your Flexiloan, you can redraw the credit if you need to - just like an overdraft`,
  },
  {
    text: `Easy access
Transfer all or a portion of the funds into your current account via online or telephone banking. You'll only pay for the portion of the loan that you transfer.`,
  },
  {
    text: "No set up fees. We won't charge you to setup your Flexiloan.",
  },
  {
    text: "Only pay for what you use. If you don't use your Flexiloan, you don't pay anything.",
  },
];

const page = () => {
  return (
    <div>
      <Hamburger
        img="/images/loan.jpg"
        title="LOANS"
        text="Take the first step in applying for Loan"
      />
      <div className="flex items center justify-center my-9">
        <div className="flex md:flex-row flex-col rounded-md gap-6 shadow-lg p-4 md:w-[950px] w-full bg-white">
          <div className="md:w-[60%] w-full flex flex-col gap-4">
            <h5>Student account</h5>
            <h2 className="leading-{40px] text-[28px] text-blue-900 font-bold">
              Nexa Banking Loans
            </h2>
            {/* <Image
              src="/images/visa.png"
              height={50}
              width={150}
              alt="visa"
              className="w-fit h-fit my-3"
            /> */}
            <h2>
              For students and apprentices, helping you with your finances:
            </h2>
            {Data.map((item, index) => (
              <div key={index} className="flex gap-5 items-start">
                <div>
                  <GrStatusGood size={20} color="red" className="w-4 h-4" />
                </div>
                <p className="leading-[20px] text-[14px] font-medium text-black">
                  {item.text}
                </p>
              </div>
            ))}

            <Button
              variant="destructive"
                          className="w-full rounded-sm bg-blue-950"
                          
            >
              Apply Now!!!
            </Button>
          </div>
          <div className=" md:w-[38%] w-full flex flex-col bg-blue-950 text-white h-full p-6 gap-5">
            <p className="leading-[25px] w-full text-[14px] font-medium text-white">
              If you are 18+, UK resident and have accepted a place on a
              qualifying course you can apply online.
            </p>
            <p className="w-full leading-[25px] text-[14px] font-extrabold text-white">
              you are an apprentice, please book an appointment in branch and
              bring proof of your confirmed apprenticeship to your appointment.
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
    </div>
  );
};

export default page;
