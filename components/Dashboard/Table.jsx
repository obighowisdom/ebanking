import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../ui/button";
import { SearchCheckIcon } from "lucide-react";
import { FiSearch } from "react-icons/fi";

const TransactionTable = ({ data }) => {
  return (
    <div className="flex flex-col w-full px-[200px]">
      <div className="flex w-full items-center justify-end gap-6">
        <Button
          variant="destructive"
          className="px-14 py-6 rounded-sm my-6 bg-[#14233C]"
        >
          Deposit
        </Button>
        <div className="flex border-red-600 rounded-sm">
          <div className="border justify-center items-center  h-fit">
            <input
              type="text"
              placeholder="TRX ID"
              className="outline-none px-4 h-full w-full leading-4 font-bold text-blue-950 my-4"
            />
          </div>
          <button className="bg-[#14233C]">
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
                    GATEWAY / TRX NO.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    INITIATED
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
                    CONVERSION
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
    </div>
  );
};

export default TransactionTable;
