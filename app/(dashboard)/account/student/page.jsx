import React from "react";
import { AccordionDemo } from "../../../../components/Accounts/Accordion";
import Hamburger from "../../../../components/Accounts/Hamburger";
import Image from "next/image";
import { GrStatusGood } from "react-icons/gr";
import { Button } from "../../../../components/ui/button";
import TopNav from "../../../../components/HomePage/TopNav";
import Header from "../../../../components/HomePage/Header";

const Data = [
  {
    text: "£80 Amazon.co.uk Gift Card and 12 months of Prime Student when you open an Nexa Bank Student Account before 31 December 2018",
  },
  {
    text: "Guaranteed £1000 interest-free overdraft offer on account opening with the option to increase your overdraft as your studies progress",
  },
  {
    text: "Representative example (assumed overdraft £1,000): 0% EAR variable",
  },
  {
    text: "Student Credit Card, up to £500 credit available. Subject to status and account conduct",
  },
  {
    text: "Ever green trust co Bank Regular Saver with a great interest rate of 3% AER/gross up to £3000 fixed for 12 months",
  },
  {
    text: "Student Credit Card, up to £500 credit available. Subject to status and account conduct",
  },
];

const page = () => {
  return (
    <div>
      <TopNav />
      <Header />
      <Hamburger
        img="/images/student.jpg"
        title="Student Account"
        text="Open a Student Account with Nexa Banking and get a bonus of £80"
      />
      <div className="flex items center justify-center my-9">
        <div className="flex md:flex-row flex-col rounded-md gap-6 shadow-lg p-4 md:w-[950px] w-full bg-white">
          <div className="md:w-[60%] w-full flex flex-col gap-4">
            <h5>Student account</h5>
            <h2 className="leading-{40px] text-[28px] text-blue-900 font-bold">
              Nexa Banking Student Account
            </h2>
            <Image
              src="/images/visa.png"
              height={50}
              width={150}
              alt="visa"
              className="w-fit h-fit my-3"
            />
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
