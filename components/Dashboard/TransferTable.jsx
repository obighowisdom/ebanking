"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../ui/button";
import { SearchCheckIcon } from "lucide-react";
import { FiSearch } from "react-icons/fi";
import { ImTarget } from "react-icons/im";
import AddBeneficiaryForm from "./forms/TransferForm";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const TransferTable = ({ data }) => {
    const [show, setShow] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [otherCountry, setOtherCountry] = useState("");

    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
    };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="flex flex-col w-full md:px-[200px] px-4">
      <div className="flex w-full items-center justify-end gap-6">
        <Button
          variant="destructive"
          className="px-4 py-6 rounded-sm my-6 bg-[#14233C] flex items-center justify-center"
          onClick={handleShow}
        >
          <ImTarget
            className="h-fit cursor-pointer mx-4"
            size={20}
            color="white"
          />
          Add Beneficiary
        </Button>
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
                    ACCOUNT NUMBER
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ACCOUNT NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AMOUNT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    DATE
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
                      <div className="text-sm text-gray-900">
                        {row.gateway_trx_no}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {row.initiated}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{row.amount}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {row.conversion}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        <FaEdit />
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
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
          
      <div
        className="absolute w-full h-full left-0 top-0 bottom-0 bg-[#333333a3] rounded-md flex items-center justify-center"
        style={{ display: show == true ? "flex" : "none" }}
      >
        <div className="md:w-[800px] w-full h-fit bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-4 py-2 rounded bg-[#FBFBFB]">
            <h1 className="leading-5 text-extrabold text-[22px] text-[#14233C]">
              Add Beneficiary
            </h1>
            <Button variant="destructive" onClick={() => setShow(false)}>
              <IoClose />
            </Button>
          </div>
          <form className="px-6 my-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="">
                Select Bank <b className="text-red-700">*</b>
              </label>
              <select
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                className="py-3 px-4 border rounded shadow-md"
              >
                <option value="default">-------</option>
                <option value="chase">Chase Bank</option>
                <option value="BOA">Bank Of America</option>
                <option value="united">United Community Bank</option>
                <option value="others">Others</option>
              </select>
              {selectedCountry === "others" && (
                <input
                  type="text"
                  placeholder="please specify"
                  className="outline-none border-b py-2 my-4"
                />
              )}
            </div>
            <div className="flex flex-col gap-3 my-3">
              <label htmlFor="">
                Account Number <b className="text-red-700">*</b>
              </label>
              <input
                name=""
                type="text"
                id=""
                className="py-3 px-4 border rounded shadow-md"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">
                Account Name <b className="text-red-700">*</b>
              </label>
              <input
                name=""
                id=""
                type="text"
                className="py-3 px-4 border rounded shadow-md"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label htmlFor="">
                Amount <b className="text-red-700">*</b>
              </label>
              <input
                name=""
                type="number"
                id=""
                className="py-3 px-4 border rounded shadow-md"
              />
            </div>
            <Button className="my-4 bg-[#14233C] w-full h-12">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransferTable;
