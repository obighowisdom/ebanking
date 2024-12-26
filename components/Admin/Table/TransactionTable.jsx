"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../../ui/button";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const TransactionTable = ({ data }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col w-full bg-white px-10 rounded-lg">
      <div className="flex w-full md:flex-row flex-col items-center justify-end md:gap-6 gap-1 my-2">
        <Button
          variant="destructive"
          className="px-14 py-6 rounded-sm my-6 bg-[#14233C]"
          onClick={() => setModal(true)}
        >
          Add Transaction
        </Button>
        <div className="flex border-red-600 rounded-sm">
          <div className="border justify-center items-center rounded-md h-fit">
            <input
              type="text"
              placeholder="TRX ID"
              className="outline-none px-4 h-full w-full leading-4 font-bold text-blue-950 my-4"
            />
          </div>
          <button className="bg-[#14233C] rounded-md">
            <FiSearch
              className="h-fit cursor-pointer mx-4"
              size={30}
              color="blue"
            />
          </button>
        </div>
      </div>

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-black text-white py-4">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    S.N.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Recipient:
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Transaction No:
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Transaction Date:
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    STATUS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{index + 1}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">
                        {row.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[11px] font-bold text-gray-400">
                        {row.transactionID}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{row.action}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{row.amount}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-sm text-gray-900">{row.date}</p>
                        <p className="text-sm text-gray-400">{row.time}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          row?.status === "Success"
                            ? "text-green-500"
                            : row?.status === "Pending"
                            ? "text-yellow-500"
                            : "text-[red]"
                        } ${
                          row?.status === "Success"
                            ? "bg-green-100"
                            : row?.status === "Pending"
                            ? "bg-yellow-100"
                            : "bg-red-100"
                        } `}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex gap-4 text-right text-sm font-medium">
                      <a href="#" className="text-gray-400">
                        <FaEdit />
                      </a>
                      <a href="#" className="text-gray-400">
                        <FaTrash />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!data && (
              <p className="text-center leading-6 text-[16px] font-normal text-gray-500 mt-7 mb-7">
                No Data{" "}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* modal starts  */}
      <div>
        <div
          style={{ display: modal ? "" : "none" }}
          className="absolute bg-[#00000085] w-full h-full z-50 top-0 left-0 bottom-0 flex items-center justify-center lg:pt-0 pt-72"
        >
          <div className="md:w-[1100px]  md:mt-0 w-full mx-4 h-fit top-20 py-4 bg-white rounded-lg shadow-lg px-6 flex flex-col gap-4 items-center">
            <div
              onClick={() => setModal(false)}
              className="w-full justify-end cursor-pointer flex"
            >
              <IoMdCloseCircle color="red" size={20} />
            </div>
            <form className="w-full flex flex-col gap-4">
              <div className="w-full flex gap-4 lg:flex-row flex-col ">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="name">
                    Recipient Name:
                  </label>
                  <input
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="emal">
                    Transaction ID:
                  </label>
                  <input
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="number"
                    id="emal"
                  />
                </div>
              </div>
              {/* second row */}
              <div className="w-full flex gap-4 lg:flex-row flex-col ">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="country">
                    Amount:
                  </label>
                  <input
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="country"
                  />
                </div>
                
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="city">
                    Date:
                  </label>
                  <input
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="date"
                    id="city"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="zip">
                    Time:
                  </label>
                  <input
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="time"
                    id="zip"
                  />
                </div>
              </div>

            
              {/* last row */}
              <div className="w-full flex gap-4 lg:flex-row flex-col ">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="id">
                    Action:
                  </label>
                  <input
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="id"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="status">
                    Response:
                  </label>
                  <select
                    id="status"
                    className="p-2 border rounded focus:shadow focus:shadow-blue-700"
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processed">Processed</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="status">
                    Type:
                  </label>
                  <select
                    id="status"
                    className="p-2 border rounded focus:shadow focus:shadow-blue-700"
                    required
                  >
                    <option value="">----</option>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="status">
                    Status:
                  </label>
                  <select
                    id="status"
                    className="p-2 border rounded focus:shadow focus:shadow-blue-700"
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="Success">Success</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex gap-4">
                <Button
                  variant="destructive"
                  className="px-14 py-6 rounded-sm my-6 w-full md:w-fit bg-[#14233C]"
                >
                  Add Transaction
                </Button>
                <Button
                  variant="destructive"
                  className="px-14 py-6 rounded-sm my-6 w-full md:w-fit bg-[#9c2d1e]"
                  onClick={() => setModal(true)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
