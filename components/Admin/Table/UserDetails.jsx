import Link from 'next/link';
import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa6';

export const getUsers = async () => {
  try {
    const res = await fetch("https://www.nexabanking.com/api/user", {
      cache: "no-store",
    });

    // If the response is not OK, throw an error
    if (!res.ok) {
      throw new Error("Failed to get clients");
    }

    // Parse the JSON response
    const data = await res.json();

    // Check if the response contains the 'users' property
    if (!data || !data.users) {
      throw new Error("No 'users' property found in the response");
    }

    // Return the users data
    return data.users;
  } catch (error) {
    console.error("Error loading clients: ", error);
    return []; // Return an empty array in case of an error or missing data
  }
};


const UserDetails = async() => {
    const users = await getUsers();

  return (
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
                        Full Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Account Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Country
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
                        Phone Number
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
                    {users?.map((row, index) => (
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
                          <div className="text-sm font-bold text-gray-900">
                            {row.accountNumber}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{row.country}</div>
                        </td>
    
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{row.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{row.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              row?.status === "Approved"
                                ? "text-green-500"
                                : row?.status === "Pending"
                                ? "text-yellow-500"
                                : "text-[red]"
                            } ${
                              row?.status === "Approved"
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
                          <Link
                            className="text-gray-400"
                           href={`/admin/updateUser/${row._id}`}
                          >
                            <FaEdit />
                          </Link>
                          <a href="#" className="text-gray-400">
                            <FaTrash />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {!users && (
                  <p className="text-center leading-6 text-[16px] font-normal text-gray-500 mt-7 mb-7">
                    No Data{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
  )
}

export default UserDetails