"use client";
import Image from "next/image";
import Banner from "./Banner";
import Premier from "./Premier";
import Graduate from "./Graduate";
import Flexi from "./Flexi";
import { GrStatusGood } from "react-icons/gr";
import { Button } from "../../ui/button";
import { MdOutlineError } from "react-icons/md";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import { toast } from "react-toastify";

const Personal = [
  {
    text: "Loans available from $1,000 to $25,000",
  },
  {
    text: "Quick decision, you could receive immediate funds",
  },
  {
    text: "No setup or arrangement fees",
  },
  {
    text: "NexaBanking Advance customers could get 10% cashback",
  },
];

const Loans = () => {
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const router = useRouter();

  const userEmail = session?.user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (plan === "") {
      toast.error("Please select a plan");
      setLoading(false);
      return;
    }
    if (accountNumber === "" || accountNumber.length !== 10) {
      toast.error("Invalid account number");
      setLoading(false);
      return;
    }
    if (amount === "") {
      toast.error("Specify the loan amount");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://www.nexabanking.com/api/loan", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan,
          amount,
          accountNumber,
          email: userEmail,
        }),
      });
      const data = res.json();
      if (res.ok) {
        setLoading(false);
        router.push("/user/home");
        toast.success("Request Sent, you will be contacted through email");
      } else {
        toast.error("failed. Try again");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div>
      <Banner />

      <div className="flex items center justify-center my-9">
        <div className="flex md:flex-row flex-col rounded-md gap-6 shadow-lg p-4 md:w-[950px] w-full bg-white">
          <div className="md:w-[60%] w-full flex flex-col gap-4">
            <h2 className="leading-{40px] text-[28px] text-blue-900 font-bold">
              PERSONAL LOAN
            </h2>
            {Personal.map((item, index) => (
              <div key={index} className="flex gap-5 items-start">
                <div>
                  <GrStatusGood size={20} color="red" className="w-4 h-4" />
                </div>
                <p className="leading-[20px] text-[14px] font-medium text-black">
                  {item.text}
                </p>
              </div>
            ))}
            <div className="flex gap-4">
              <MdOutlineError size={30} />

              <p className="text-sm font-medium text-blue-950">
                {" "}
                The rate is subject to change and the representative APR may not
                be the rate you will receive. We will offer you a rate based on our
                assessment of your personal financial circumstances. The maximum
                APR you could be offered is 21.9%.
              </p>
            </div>

            <Button
              variant="destructive"
              className="w-full rounded-sm bg-blue-950"
            >
              Apply Below!!!
            </Button>
          </div>
          <div className=" md:w-[38%] w-full flex flex-col bg-blue-950 text-white h-full p-6 gap-5">
            <p className="leading-[38px] w-full text-[25px] lg:text-[30px] md:text-[16px] font-extrabold text-white">
              3.3% APR <br />
              Representative
            </p>
            <p className="w-full leading-[25px] text-[14px] font-extrabold text-white">
              for loans between $7,000 and $15,000.
            </p>
            <Image
              src="/images/switch.png"
              height={50}
              width={150}
              alt="visa"
              className="w-fit h-fit my-3"
            />
          </div>
        </div>
      </div>

      <Premier />

      <Graduate />

      <Flexi />

      <div>
        <h1 className="text-center w-full leading-[30px] font-bold text-[24px] text-gray-600 my-6">
          Request for Loan
        </h1>
        <b className="text-center w-full font-bold text-[14px] text-red-600 my-2">
          Complete your KYC before making a request
        </b>{" "}
        <br />
      </div>

      {/* <div className="my-6">
        <b className="text-center w-full font-bold text-[14px] text-blue-800 mt-6">
          0.5% interest applies to all loans only after the first 3 months{" "}
          <br /> All loan repayment period is 10 months
        </b>
      </div> */}

      <form action="" className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="loan">
            Select loan <b className="text-red-700">*</b>
          </label>
          <select
            id="loan"
            onChange={(e) => setPlan(e.target.value)}
            className="py-3 px-4 border rounded shadow-md"
          >
            <option value="">Select the loan</option>
            <option value="Personal Loan ($1000 - $25000)">
              Personal Loan ($1000 - $25000)
            </option>
            <option value="Premier Personal Loan ($1000 - $50000)">
              Premier Personal Loan ($1000 - $50000)
            </option>
            <option value="Graduate Loan ($1000 - $25000)">
              Graduate Loan ($1000 - $25000)
            </option>
            <option value="Flexiloan ($500 - $50000)">
              Flexiloan ($500 - $50000)
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label
            className="text-blue-950 font-semibold text-[14px]"
            htmlFor="loan"
          >
            Loan Amount ($):
          </label>
          <input
            required
            onChange={(e) => setAmount(e.target.value)}
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
            onChange={(e) => setAccountNumber(e.target.value)}
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
            disabled
            value={userEmail}
            className="w-full border p-2 rounded-md focus-within:shadow-md focus:shadow-blue-900 outline-none"
            id="email"
            type="email"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-4 p-3 rounded bg-blue-900 flex items-center justify-center hover:bg-slate-600 text-white font-semibold"
        >
          {loading === true ? <Spin /> : <>Request </>}
        </button>
      </form>
    </div>
  );
};

export default Loans;
