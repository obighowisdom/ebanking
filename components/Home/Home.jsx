"use client";
import Link from "next/link";
import { FaArrowUpRightDots } from "react-icons/fa6";
import TransactionTable from "./Transaction";
import Card from "./Card";
import Adds from "./Adds";
import MyLineChart from "./Chart";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const Data = [
  {
    name: "Total Balance",
    amount: "",
  },
  {
    name: "Loan",
    amount: "",
  },
  {
    name: "Uncleared",
    amount: "",
  },
];

const Home =  ({ userData }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const { data: session } = useSession();
  useEffect(() => {
    const currentUser = userData?.find(
      (item) => item.email === session?.user?.email
    );

    setCurrentUser(currentUser); // Set the matched user in the state
  }, [userData, session]);
  return (
    <div className="flex w-full flex-col lg:flex-row justify-between h-full gap-4">
      <div className="lg:w-[54%] w-full">
        {currentUser ? (
          <div className="flex w-full md:flex-nowrap flex-wrap items-center justify-between gap-4">
            <div className="bg-gray-700 w-full h-[100px] rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h4 className="leading-5 text-[14px] font-normal text-gray-400">
                  Total Balance
                </h4>
                <Link href={"#"}>
                  <FaArrowUpRightDots color="blue" />{" "}
                </Link>
              </div>
              <h2 className="leading-5 text-[20px] font-extrabold text-white mt-3">
                ${currentUser.totalAmount}.00
              </h2>
            </div>

            {/* second card */}
            <div className="bg-gray-700 w-full h-[100px] rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h4 className="leading-5 text-[14px] font-normal text-gray-400">
                  Uncleared
                </h4>
                <Link href={"#"}>
                  <FaArrowUpRightDots color="blue" />{" "}
                </Link>
              </div>
              <h2 className="leading-5 text-[20px] font-extrabold text-white mt-3">
                {" "}
                ${currentUser.uncleared}.00
              </h2>
            </div>

            {/* third card */}
            <div className="bg-gray-700 w-full h-[100px] rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h4 className="leading-5 text-[14px] font-normal text-gray-400">
                  Loan
                </h4>
                <Link href={"#"}>
                  <FaArrowUpRightDots color="blue" />{" "}
                </Link>
              </div>
              <h2 className="leading-5 text-[20px] font-extrabold text-white mt-3">
               ${currentUser.loan}.00
              </h2>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <div className="my-4">
          <MyLineChart />
        </div>
        <div>
          <TransactionTable />
        </div>
      </div>

      <div className="lg:w-[44%] w-full h-full flex flex-col justify-between ">
        <div className="bg-gray-700 p-8 rounded-lg h-full">
          <Card />
        </div>
        <div className="bg-gray-700 p-8 rounded-lg h-full mt-4">
          <Adds />
        </div>
      </div>
    </div>
  );
};

export default Home;
