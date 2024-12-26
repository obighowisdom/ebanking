
import LoanTable from "./Table/LoanTable";

const loans = [
  {
    amount: "$300.00",
    account: "1234567890",
    email: "kotline@gmail.com",
  },
];

const Loan = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      {/* Charts and Tables Section */}
      <LoanTable data={loans} />
    </div>
  );
};

export default Loan;
