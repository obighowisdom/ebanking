"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../ui/button";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { Spin } from "antd";
import { useRouter } from "next/navigation";




const EditUser = ({
  id,
  role,
  totalAmount,
  uncleared,
  accountNumber,
  accountType,
  loan,
  status,
  name,
  city,
  phone,
  country,
  email,
  state,
  address,
}) => {
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [newAccountNumber, setAccountNumber] = useState(accountNumber);
  const [loading, setLoading] = useState(false);

  // updateuser data
  const [newRole, setNewRole] = useState(role);
  const [newTotalAmount, setNewTotalAmount] = useState(totalAmount);
  const [newUncleared, setNewUncleared] = useState(uncleared);
  const [newLoan, setNewLoan] = useState(loan);
  const [newAccountType, setNewAccountType] = useState(accountType);
  const [newStatus, setNewStatus] = useState(status);

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
        `https://www.nexabanking.com/api/updateUser/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newRole,
            newTotalAmount,
            newUncleared,
            newAccountNumber,
            newAccountType,
            newLoan,
            newStatus,
          }),
        }
      );

      if (res.status === 200) {
        toast.success("User Updated");
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
    <div>
      <div>
        <div className="absolute bg-[#00000085] w-full h-full z-50 top-0 left-0 bottom-0 flex items-center justify-center lg:pt-0 pt-72">
          <div className="md:w-[1100px]  md:mt-0 w-full mx-4 h-fit top-20 py-4 bg-white rounded-lg shadow-lg px-6 flex flex-col gap-4 items-center">
            <div
              onClick={() => router.push('admin/home')}
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
                    defaultValue={name}
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
                    defaultValue={email}
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
                    defaultValue={phone}
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
                    defaultValue={country}
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
                    defaultValue={state}
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
                    defaultValue={city}
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
                    onChange={(e) => setNewRole(e.target.value)}
                  >
                    <option value={role}>{role}</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
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
                    defaultValue={address}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="address"
                  />
                </div>
                
              </div>

              <div className="w-full flex gap-4 lg:flex-row flex-col ">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="address">
                    Total Amount:
                  </label>
                  <input
                    defaultValue={totalAmount}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="address"
                    onChange={(e) => setNewTotalAmount(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="landmark">
                    Uncleared:
                  </label>
                  <input
                    defaultValue={uncleared}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="landmark"
                    onChange={(e) => setNewUncleared(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold" htmlFor="landmark">
                    Loan:
                  </label>
                  <input
                    defaultValue={loan}
                    className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                    type="text"
                    id="landmark"
                    onChange={(e) => setNewLoan(e.target.value)}
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
                    defaultValue={id}
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
                      defaultValue={newAccountNumber}
                      disabled
                      className="focus:shadow focus:shadow-blue-700 p-2 rounded outline-none border w-full"
                      type="text"
                      id="accountNumber"
                    />
                  </div>
                  <button
                    className="bg-gray-300 p-2 w-fit rounded"
                    onClick={generateAccountNumber}
                    disabled={accountNumber ? true : false}
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
                    onChange={(e) => setNewAccountType(e.target.value)}
                  >
                    <option value={newAccountType}>
                      {accountType}
                    </option>
                    <option value="Regular">Regular</option>
                    <option value="Premium">Premium</option>
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
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option value={newStatus}>
                      {status}
                    </option>
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
                  onClick={() => router.push('/admin/home')}
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

export default EditUser;
