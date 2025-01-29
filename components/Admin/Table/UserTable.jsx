"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../../ui/button";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { Spin } from "antd";
import { useRouter } from "next/navigation";

const UserTable = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(false);

  // updateuser data
  const [role, setRole] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [uncleared, setUncleared] = useState("");
  const [loan, setLoan] = useState("");
  const [accountType, setAccountType] = useState("");
  const [status, setStatus] = useState("");

  const userId = userData?._id;
  const router = useRouter();

  // generate account number
  const generateAccountNumber = (e) => {
    e.preventDefault();
    let accountNum = "";

    for (let i = 0; i < 10; i++) {
      accountNum += Math.floor(Math.random() * 10); // Generates a random digit (0-9)
    }

    setAccountNumber(accountNum); // Set the generated account number
  };

  // Update Users
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.nexabanking.com/api/updateUser/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            role,
            totalAmount,
            uncleared,
            accountNumber,
            accountType,
            loan,
            status,
          }),
        }
      );
      
      if (res.status === 200) {
        toast.success("User Updated");
        router.refresh();
        router.push("/admin/home");
        setLoading(false);
      } else {
        toast.error("failed. Try again");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white px-10 rounded-lg">
      <div className="flex w-full md:flex-row flex-col items-center justify-end md:gap-6 gap-1 my-2">
        <Button
          variant="destructive"
          className="px-14 py-6 rounded-sm my-6 bg-[#14233C]"
        >
          Users
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
                      <button
                        className="text-gray-400"
                        onClick={() => {
                          setModal(true);
                          setUserData(row);
                        }}
                      >
                        <FaEdit />
                      </button>
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
                    Name:
                  </label>
                  <input
                    disabled
                    defaultValue={userData?.name}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="emal">
                    Email:
                  </label>
                  <input
                    disabled
                    defaultValue={userData?.email}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="email"
                    id="emal"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="number">
                    Phone Number:
                  </label>
                  <input
                    disabled
                    defaultValue={userData?.phone}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="number"
                    id="number"
                  />
                </div>
              </div>
              {/* second row */}
              <div className="w-full flex gap-4 lg:flex-row flex-col ">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="country">
                    Country:
                  </label>
                  <input
                    disabled
                    defaultValue={userData?.country}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="country"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="state">
                    State:
                  </label>
                  <input
                    disabled
                    defaultValue={userData?.state}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="state"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="city">
                    City:
                  </label>
                  <input
                    disabled
                    defaultValue={userData?.city}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="city"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="status">
                    Role:
                  </label>
                  <select
                    id="status"
                    className="p-2 border rounded focus:shadow focus:shadow-blue-700"
                    required
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value={userData?.role}>{userData?.role}</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="zip">
                    Zip Code:
                  </label>
                  <input
                    disabled
                    defaultValue={userData?.zipcode}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="zip"
                  />
                </div>
              </div>

              {/* address */}
              <div className="w-full flex gap-4 lg:flex-row flex-col ">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="address">
                    Address:
                  </label>
                  <input
                    disabled
                    defaultValue={userData?.address}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="address"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="landmark">
                    Landmark:
                  </label>
                  <input
                    disabled
                    defaultValue={userData?.landmark}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="landmark"
                  />
                </div>
              </div>

              <div className="w-full flex gap-4 lg:flex-row flex-col ">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="address">
                    Total Amount:
                  </label>
                  <input
                    defaultValue={userData?.totalAmount}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="address"
                    onChange={(e) => setTotalAmount(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="landmark">
                    Uncleared:
                  </label>
                  <input
                    defaultValue={userData?.uncleared}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="landmark"
                    onChange={(e) => setUncleared(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="landmark">
                    Loan:
                  </label>
                  <input
                    defaultValue={userData?.loan}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="landmark"
                    onChange={(e) => setLoan(e.target.value)}
                  />
                </div>
              </div>

              {/* last row */}
              <div className="w-full flex gap-4 lg:flex-row flex-col ">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="id">
                    User ID:
                  </label>
                  <input
                    disabled
                    defaultValue={userData?._id}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="id"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold" htmlFor="accountNumber">
                      Account Number:
                    </label>
                    <input
                      defaultValue={accountNumber}
                      disabled
                      className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                      type="text"
                      id="accountNumber"
                    />
                  </div>
                  <button
                    className="bg-gray-300 p-2 w-fit rounded"
                    onClick={generateAccountNumber}
                  >
                    generate
                  </button>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="status">
                    Account Type:
                  </label>
                  <select
                    id="accountType"
                    className="p-2 border rounded focus:shadow focus:shadow-blue-700"
                    required
                    onChange={(e) => setAccountType(e.target.value)}
                  >
                    <option value={userData?.accountType}>
                      {userData?.accountType}
                    </option>
                    <option value="Approved">Regular</option>
                    <option value="Not Approved">Premium</option>
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
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value={userData?.status}>{userData?.status}</option>
                    <option value="Approved">Approved</option>
                    <option value="Not Approved">Not Approved</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex gap-4">
                <Button
                  disabled={loading}
                  variant="destructive"
                  className="px-14 py-6 rounded-sm my-6 w-full md:w-fit bg-[#14233C]"
                  onClick={handleSubmit}
                >
                  {!loading ? "Update User" : <Spin />}
                </Button>
                <Button
                  variant="destructive"
                  className="px-14 py-6 rounded-sm my-6 w-full md:w-fit bg-[#9c2d1e]"
                  onClick={() => setModal(false)}
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

export default UserTable;
