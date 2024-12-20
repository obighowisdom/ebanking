"use client";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white rounded-lg shadow-md w-full shadow-black h-fit p-4 ">
      <div>
        <h1 className="text-center w-full leading-[30px] font-bold text-[24px] text-gray-600 my-6">
          Request for Loan
        </h1>
        <b className="text-center w-full font-bold text-[14px] text-red-600 my-2">
          Complete your KYC before making a request
        </b>{" "}
        <br />
      </div>

      <div className="my-6">
        <b className="text-center w-full font-bold text-[14px] text-blue-800 mt-6">
          0.5% interest applies to all loans only after the first 3 months{" "}
          <br /> All loan repayment period is 10 months
        </b>
      </div>

      <form action="" className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-3 w-full">
          <label
            className="text-blue-950 font-semibold text-[14px]"
            htmlFor="loan"
          >
            Loan Amount:
          </label>
          <input
            required
            className="w-full border p-2 rounded-md focus-within:shadow-md focus:shadow-blue-900 outline-none"
            id="loan"
            type="number"
            placeholder="enter the loan amount"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label
            className="text-blue-950 font-semibold text-[14px]"
            htmlFor="number"
          >
            Your Account Number:
          </label>
          <input
            required
            className="w-full border p-2 rounded-md focus-within:shadow-md focus:shadow-blue-900 outline-none"
            id="number"
            type="number"
            placeholder="enter your Nexa banking account number"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label
            className="text-blue-950 font-semibold text-[14px]"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            required
            className="w-full border p-2 rounded-md focus-within:shadow-md focus:shadow-blue-900 outline-none"
            id="email"
            type="email"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full mt-4 p-3 rounded bg-blue-900 flex items-center justify-center hover:bg-slate-600 text-white font-semibold"
        >
          Request
        </button>
      </form>
    </div>
  );
};

export default page;
