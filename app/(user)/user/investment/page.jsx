"use client";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white rounded-lg shadow-md w-full shadow-black h-fit p-4 ">
      <div>
        <h1 className="text-center w-full leading-[30px] font-bold text-[24px] text-gray-600 my-6">
          Become our Shareholder
        </h1>
        <b className="text-center w-full font-bold text-[14px] text-red-600 my-2">
          Complete your KYC before investing
        </b>{" "}
        <br />
      </div>
      <form action="" className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="">
            Select option <b className="text-red-700">*</b>
          </label>
          <select id="invest" className="py-3 px-4 border rounded shadow-md">
            <option value="">-------</option>
            <option value="chaInvest $200 and get $4,700se">
              Invest $200 and get $4,700
            </option>
            <option value="Invest $300 to get $6,700">
              Invest $300 to get $6,700
            </option>
            <option value="Invest $500 to get $9,700">
              Invest $500 to get $9,700
            </option>
          </select>
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
            type="text"
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
