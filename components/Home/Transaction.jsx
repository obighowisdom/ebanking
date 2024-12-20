"use client";
import { LuBadgeMinus } from "react-icons/lu";
import { LuBadgePlus } from "react-icons/lu";
import { FaDownload } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const transactions = [
  {
    name: "Alina K",
    action: "Transfer",
    amount: "+$128.00",
    date: "Dec 17, 2022",
    time: "13:33 PM",
    status: "Success",
    type: "Credit",
    response: 'Processed'
  },
  {
    name: "Alina K",
    action: "Withdraw",
    amount: "-$879.00",
    date: "Dec 15, 2022",
    time: "15:23 PM",
    status: "Failed",
    type: "Debit",
    response: 'Unsuccessful'
  },
  {
    name: "Alina K",
    action: "Transfer",
    amount: "+$1127.00",
    date: "Dec 13, 2022",
    time: "11:30 AM",
    status: "Pending",
    type: "Credit",
    response: 'Processing'
  },
];

const TransactionTable = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState(false)

  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("invoice.pdf");
    });
  };

  return (
    <div className="bg-gray-700 rounded-lg p-1 w-full">
      <div>
        <h1 className="leading-[30px] text-gray-500 font-bold text-[18px]">
          Transaction History
        </h1>
      </div>
      <div className="bg-gray-700 w-full">
        <table className="w-full text-left text-gray-100">
          <thead>
            <tr></tr>
          </thead>
          <tbody className="w-full">
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
                } hover:bg-gray-700`}
              >
                <td className="py-4">
                  <div className="flex items-center h-full w-full">
                    <div className="h-full w-full">
                      {transaction.type === "Debit" ? (
                        <LuBadgeMinus color="red" />
                      ) : (
                        <LuBadgePlus color="green" />
                      )}
                    </div>
                    <div className="w-full">
                      <h3 className="text-white font-bold md:text-[14px] text-[12px]">
                        {transaction.name}
                      </h3>
                      <p className=" text-gray-500 font-bold text-[12px]">
                        {transaction.action}
                      </p>
                    </div>
                  </div>
                  {/* {transaction.amount > 0 ? "+$" : "-$"}
                  {Math.abs(transaction.amount)} */}
                </td>
                <td className="py-4 px-3">
                  <div>
                    <h2
                      style={{
                        color: transaction.type === "Debit" ? "red" : "green",
                      }}
                      className=" font-bold text-[12px]"
                    >
                      {transaction.amount}
                    </h2>
                    <p className=" text-gray-500 font-bold text-[12px]">
                      {transaction.type}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6 lg:block hidden">
                  <div className="w-full">
                    <h3 className="text-white font-bold text-[14px]">
                      {transaction.date}
                    </h3>
                    <p className=" text-gray-500 font-bold text-[12px]">
                      {transaction.time}
                    </p>
                  </div>
                </td>
                <td
                  className={`py-4 px-3 font-bold text-[12px] ${
                    transaction.status === "Success"
                      ? "text-green-500"
                      : transaction.status === "Pending"
                      ? "text-yellow-500"
                      : "text-[red]"
                  }`}
                >
                  {transaction.status}
                </td>
                <td>
                  <div>
                    <button
                      onClick={() => {
                        setData(transaction);
                        setShowModal(true);
                      }}
                      className=" font-bold text-[12px] text-blue-700"
                    >
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <div
        style={{ display: showModal === false ? "none" : "" }}
        className="absolute bg-[#000000b3] w-full h-full  z-50 top-0 left-0 flex items-center justify-center"
      >
        <div className="bg-white rounded-lg shadow-md w-full mx-5 shadow-orange-300 h-fit overflow-hidden p-4 items-center justify-center md:w-[500px] text-center actual-receipt ">
          <div className="w-full border-b border-b-gray-700 pb-4">
            <div
              onClick={() => setShowModal(false)}
              className="w-full flex justify-end cursor-pointer"
            >
              <IoMdCloseCircle color="red" size={20} />
            </div>{" "}
            <div className="w-full flex justify-center">
              <Image src="/images/nexa.png" width={70} height={70} alt="icon" />
            </div>
            <h2 className="leading-[34px] font-bold text-black text-[26px] my-4">
              Transaction Receipt
            </h2>
            <h3 className="leading-[34px] font-bold text-black text-[20x]">
              {" "}
              Status:{" "}
              <b
                className={`${
                  data?.status === "Success"
                    ? "text-green-500"
                    : data?.status === "Pending"
                    ? "text-yellow-500"
                    : "text-[red]"
                }`}
              >
                {data?.status}
              </b>
            </h3>
          </div>
          <h1 className="leading-[34px] mt-2 font-bold text-black text-[22px]">
            Amount: <br />{" "}
            <b className="text-blue-950 text-[16px]">{data?.amount}</b>
          </h1>
          <div className="my-4 flex flex-col gap-2">
            <div className="flex justify-between items-center w-full">
              <h4 className="font-bold">Transaction ID:</h4>
              <p className="text-blue-950 text-[14px] font-semibold">
                NXA-756Y76767887575
              </p>
            </div>
            <div className="flex justify-between w-full">
              <h4 className="font-bold">Recipient Name:</h4>
              <p className="text-blue-950 font-semibold">{data?.name}</p>
            </div>
            <div className="flex justify-between w-full">
              <h4 className="font-bold">Transaction Type:</h4>
              <p className="text-blue-950 font-semibold">{data?.action}</p>
            </div>
            <div className="flex justify-between w-full">
              <h4 className="font-bold">Action:</h4>
              <p className="text-blue-950 font-semibold">{data?.type}</p>
            </div>
            <div className="flex justify-between w-full">
              <h4 className="font-bold">Response</h4>
              <p
                className={`${
                  data?.response === "Processed"
                    ? "text-blue-500"
                    : data?.response === "Processing"
                    ? "text-amber-700"
                    : "text-[red]"
                }`}
              >
                {data?.response}
              </p>
            </div>
            <div className="flex justify-between w-full">
              <h4 className="font-bold">Date</h4>
              <p className="text-blue-950 font-semibold">{data?.date}</p>
            </div>
            <div className="flex justify-between w-full">
              <h4 className="font-bold">Time</h4>
              <p className="text-blue-950 font-semibold">{data?.time}</p>
            </div>
            <button
              onClick={downloadPDF}
              disabled={!(loader === false)}
              className="w-full mt-4 p-4 rounded bg-blue-900 flex items-center justify-center hover:bg-slate-600"
            >
              {loader ? (
                <p>downloading...</p>
              ) : (
                <FaDownload color="white" size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
