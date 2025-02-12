import React from "react";
import UserTable from "../../../../../components/Admin/Table/UserTable";
import EditUser from "../../../../../components/Admin/EditUser";

const getSingleUser = async (id) => {
  try {
    const res = await fetch(`https://www.nexabanking.com/api/client/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch users");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const { user } = await getSingleUser(id);
  const {
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
  } = user;
  return (
    <>
      <EditUser
        id={id}
        role={role}
        totalAmount={totalAmount}
        uncleared={uncleared}
        accountNumber={accountNumber}
        accountType={accountType}
        loan={loan}
        status={status}
        name={name}
        city={city}
        phone={phone}
        country={country}
        email={email}
        state={state}
        address={address}
      />
    </>
  );
};

export default page;
