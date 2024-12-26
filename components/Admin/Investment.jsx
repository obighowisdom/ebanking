import React from "react";
import InvestmentTable from "./Table/InvestmentTable";

const investment = [
  {
    email: "wisdom@gmail.com",
    plan: "Transfer",
      },
];

const Investment = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      {/* Charts and Tables Section */}
      <InvestmentTable data={investment} />
    </div>
  );
};

export default Investment;
