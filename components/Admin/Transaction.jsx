import React from "react";
import TransactionTable from "./Table/TransactionTable";

const transactions = [
  {
    name: "Alina K",
    transactionID: "123546764784785874875674674884",
    action: "Transfer",
    amount: "+$128.00",
    date: "Dec 17, 2022",
    time: "13:33 PM",
    status: "Success",
    type: "Credit",
    response: "Processed",
  },
];

const Transaction = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      {/* Charts and Tables Section */}
      <TransactionTable data={transactions} />
    </div>
  );
};

export default Transaction;
