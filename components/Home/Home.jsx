import Link from "next/link";
import { FaArrowUpRightDots } from "react-icons/fa6";
import TransactionTable from "./Transaction";
import Card from './Card'
import Adds from './Adds'
import MyLineChart from './Chart'

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

const Home = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row justify-between h-full gap-4">
      <div className="lg:w-[54%] w-full">
        <div className="flex w-full md:flex-nowrap flex-wrap items-center justify-between gap-4">
          {Data.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-gray-700 w-full h-[100px] rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="leading-5 text-[14px] font-normal text-gray-400">
                    {item.name}
                  </h4>
                  <Link href={"#"}>
                    <FaArrowUpRightDots color="blue" />{" "}
                  </Link>
                </div>
                <h2 className="leading-5 text-[16px] font-bold text-white mt-3">
                  ${item.amount}
                </h2>
              </div>
            );
          })}
        </div>
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
