"use client";
import Card from "./Card";
import Banner from "./Banner";
import { GiConfirmed } from "react-icons/gi";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import { toast } from "react-toastify";

const data = [
  {
    title: "Investment risk",
    text: "All investments carry some risk. The value of investments (and any income received from them) can fall as well as rise  and you may not get back what you invested. For some investments this can also happen as a result of exchange               rate fluctuations as shares and funds may have an exposure to overseas markets.",
  },
  {
    title: "Time commitment",
    text: "Most investments should be considered as a medium to long-term commitment; this means you should be prepared to hold them for at least five years.",
  },
  {
    title: "Tax Benefit",
    text: "The value of any tax benefits described depends upon your individual circumstances - tax rules may change in future.",
  },
];

const Investment = () => {
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const router = useRouter()

  const userEmail = session?.user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (plan === "") {
      toast.error("Please select a plan");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://www.nexabanking.com/api/investment", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan,
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
      <div>
        <Banner />
        <h1 className="text-center w-full leading-[30px] font-bold text-[24px] text-gray-600 my-6">
          Become our Shareholder
        </h1>
        <div>
          <h2 className="w-full leading-[30px] font-extrabold text-[24px] text-blue-900 my-6">
            Our global network and local experts bring you what we believe are
            the best investment opportunities from around the world
          </h2>

          <Card />
        </div>
        <div className="my-8">
          <h2 className="text-2xl border-l-4 border-l-red-900 pl-3 font-semibold text-[#003087]">
            Please bear in mind
          </h2>
          {data.map((item, i) => {
            return (
              <div key={i} className="my-4">
                <div className="flex items-center gap-4">
                  <GiConfirmed color="blue" size={20} />
                  <h4 className="text-lg font-bold text-[#000000]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-700 font-bold">{item.text}</p>
              </div>
            );
          })}

          <p className="text-sm text-black font-bold">
            In addition to the risks mentioned above, there are other risks
            associated with investing in our products. These are outlined in the
            Key Features Document for each product and, where applicable, in the
            Key Investor Information Document for the underlying fund(s), which
            you should read carefully before applying.
          </p>
        </div>
        <b className="text-center w-full font-bold text-[14px] text-red-600 my-2">
          Complete your KYC before investing
        </b>{" "}
        <br />
      </div>
      <form action="" className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="invest">
            Select option <b className="text-red-700">*</b>
          </label>
          <select
            id="invest"
            onChange={(e) => setPlan(e.target.value)}
            className="py-3 px-4 border rounded shadow-md"
          >
            <option value="">Select investment range</option>
            <option value="from 300$ - 500$">from 300$ - 500$</option>
            <option value="from 600$ to get 1500$">
              from 600$ to get 1500$
            </option>
            <option value="from 2000$ and above">from 2000$ and above</option>
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
            disabled
            className="w-full border p-2 rounded-md focus-within:shadow-md focus:shadow-blue-900 outline-none"
            id="email"
            type="text"
            value={userEmail}
          />
        </div>
        <b>
          Note that all investment returns 10% revenue every 24 hours whill will
          be added to your balance
        </b>
        <button
        disabled={loading}
          onClick={handleSubmit}
          className="w-full mt-4 p-3 rounded bg-blue-900 flex items-center justify-center hover:bg-slate-600 text-white font-semibold"
        >
          {loading === true ? <Spin /> : <>Request </>}
        </button>
      </form>
    </div>
  );
};

export default Investment;
