"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../../ui/button";
import { FiSearch } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";

const InvestmentTable = ({ data }) => {

  return (
    <div className="flex flex-col w-full bg-white px-10 rounded-lg">
      <div className="flex w-full md:flex-row flex-col items-center justify-end md:gap-6 gap-1 my-2">
        <Button
          variant="destructive"
          className="px-14 py-6 rounded-sm my-6 bg-[#14233C]"
          
        >
          Investment Requests
        </Button>
        <div className="flex border-red-600 rounded-sm">
          <div className="border justify-center items-center rounded-md h-fit">
            <input
              type="text"
              placeholder="email..."
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
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Investment Plan
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
                        {row.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">
                        {row.plan}
                      </div>
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
      
    </div>
  );
};

export default InvestmentTable;
