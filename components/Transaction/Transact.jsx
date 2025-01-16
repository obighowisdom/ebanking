"use client";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { useState } from "react";
import { Spin } from "antd";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { GrStatusGood } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";

export function TabsDemo() {
  const [loading, setLoading] = useState(false);
  const [invalidAccount, setInvalidAccount] = useState(false);
  const [otherCountry, setOtherCountry] = useState("");
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const [bankName, setBankName] = useState("");
  const [email, setEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("Nil");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");

  const [wAmount, setWAmount] = useState("");
  const [method, setMethod] = useState("");
  const [wemail, setWemail] = useState("");

  const handleCot = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (bankName === "") {
      toast.error("Invalid Bankname");
      setLoading(false);
      return;
    }
    if (bankName === "" && otherCountry === "") {
      toast.error("Please Specify");
      setLoading(false);
      return;
    }
    if (accountNumber === "" || accountNumber.length < 10) {
      toast.error("Invalid account number");
      setInvalidAccount(true);
      setLoading(false);
      return;
    }
    if (accountName === "") {
      toast.error("Input Account Name");
      setLoading(false);
      return;
    }
    if (amount === "") {
      toast.error("Input amount");
      setLoading(false);
      return;
    }
    // function transfer here
    try {
      const res = await fetch("https://www.nexabanking.com/api/transfer", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          bankName,
          accountNumber,
          accountName,
          amount,
          transactionType: "Debit",
          status: "Pending",
          response: "Processing",
          action: 'Transfer'
        }),
      });
      const data = res.json();
      if (res.ok) {
        setLoading(false);
        router.push("/user/cot");
        toast.success("Request processing");
      } else {
        toast.error("failed. Try again");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // withdraw function
 const withdraw = async (e) => {
   e.preventDefault();
   setLoading(true);

   if (bankName === "") {
     toast.error("Invalid Bankname");
     setLoading(false);
     return;
   }
   if (bankName === "" && otherCountry === "") {
     toast.error("Please Specify");
     setLoading(false);
     return;
   }
   if (accountNumber === "" || accountNumber.length < 10) {
     toast.error("Invalid account number");
     setInvalidAccount(true);
     setLoading(false);
     return;
   }
   if (accountName === "") {
     toast.error("Input Account Name");
     setLoading(false);
     return;
   }
   if (amount === "") {
     toast.error("Input amount");
     setLoading(false);
     return;
   }
   // function transfer here
   try {
     const res = await fetch("https://www.nexabanking.com/api/transfer", {
       cache: "no-store",
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         email,
         bankName,
         accountNumber,
         accountName,
         amount,
         transactionType: "Debit",
         status: "Pending",
         response: "Processing",
         action: "Withdraw",
       }),
     });
     const data = res.json();
     if (res.ok) {
       setLoading(false);
       router.push("/user/cot");
       toast.success("Request processing");
     } else {
       toast.error("failed. Try again");
       setLoading(false);
     }
   } catch (error) {
     console.log("Error: ", error);
   }
  };
  
  // deposit

  const handleDeposit = async(e) => {
    e.preventDefault();
    setLoading(true);
    if (wAmount === "") {
      toast.error("Specify the amount");
      setLoading(false);
      return;
    }
    if (method === "") {
      toast.error("Please specify the method");
      setLoading(false);
      return;
    }
    if (wemail === "") {
      toast.error("invalid email");
      setLoading(false);
      return;
    }
     try {
      const res = await fetch("https://www.nexabanking.com/api/deposit", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wAmount,
          method,
          email,
          
        }),
      });
      const data = res.json();
      if (res.ok) {
        setLoading(false);
        router.push("/user/home");
        toast.success("Request processing");
      } else {
        toast.error("failed. Try again");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
    setLoading(false);
    setModal(true);
  };

  return (
    <div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="">Transfer</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
        </TabsList>
        <TabsContent value="">
          <Card>
            <CardHeader>
              <CardTitle>Transfer Funds</CardTitle>
              <CardDescription>
                Make sure you enter the correct details below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email Address</Label>
                <Input id="name" onChange={(e) => setEmail(e.target.value)} />
              </div>{" "}
              <div className="flex flex-col gap-3">
                <label htmlFor="">
                  Select Bank <b className="text-red-700">*</b>
                </label>
                <select
                  id="country"
                  onChange={(e) => setBankName(e.target.value)}
                  className="py-3 px-4 border rounded shadow-md"
                >
                  <option value="">-------</option>
                  <option value="chase">Chase Bank</option>
                  <option value="BOA">Bank Of America</option>
                  <option value="united">United Community Bank</option>
                  <option value="others">Others</option>
                </select>
                {bankName === "others" && (
                  <input
                    type="text"
                    placeholder="please specify"
                    className="outline-none border-b py-2 my-4"
                    onChange={(e) => setOtherCountry(e.target.value)}
                  />
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="number">Account Number</Label>
                <Input
                  id="number"
                  type="number"
                  onChange={(e) => setAccountNumber(e.target.value)}
                  style={{
                    border: invalidAccount === true ? "2px solid red" : "",
                  }}
                />
              </div>{" "}
              <div className="space-y-1">
                <Label htmlFor="name">Account Name</Label>
                <Input
                  id="name"
                  onChange={(e) => setAccountName(e.target.value)}
                />
              </div>{" "}
              <div className="space-y-1">
                <Label htmlFor="username">Amount ($)</Label>
                <Input
                  onChange={(e) => setAmount(e.target.value)}
                  id="amount"
                />
              </div>
            </CardContent>
            <CardFooter>
              {!loading ? (
                <Button onClick={handleCot}>Submit</Button>
              ) : (
                <Button disabled onClick={handleCot}>
                  <Spin />
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="withdraw">
          <Card>
            <CardHeader>
              <CardTitle>Withdraw your Funds</CardTitle>
              <CardDescription>
                Make sure you enter the correct details below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" onChange={(e) => setEmail(e.target.value)} />
              </div>{" "}
              <div className="flex flex-col gap-3">
                <label htmlFor="">
                  Select Bank to withdraw to <b className="text-red-700">*</b>
                </label>
                <select
                  id="country"
                  onChange={(e) => setBankName(e.target.value)}
                  className="py-3 px-4 border rounded shadow-md"
                >
                  <option value="">-------</option>
                  <option value="chase">Chase Bank</option>
                  <option value="BOA">Bank Of America</option>
                  <option value="united">United Community Bank</option>
                  <option value="others">Others</option>
                </select>
                {bankName === "others" && (
                  <input
                    type="text"
                    placeholder="please specify"
                    className="outline-none border-b py-2 my-4"
                    onChange={(e) => setOtherCountry(e.target.value)}
                  />
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Account Number</Label>
                <Input
                  id="username"
                  onChange={(e) => setAccountNumber(e.target.value)}
                  style={{
                    border: invalidAccount === true ? "2px solid red" : "",
                  }}
                />
              </div>{" "}
              <div className="space-y-1">
                <Label htmlFor="name">Account Name</Label>
                <Input
                  id="name"
                  onChange={(e) => setAccountName(e.target.value)}
                />
              </div>{" "}
              <div className="space-y-1">
                <Label htmlFor="username">Withdraw Amount</Label>
                <Input
                  onChange={(e) => setAmount(e.target.value)}
                  id="amount"
                />
              </div>
            </CardContent>
            <CardFooter>
              {!loading ? (
                <Button onClick={withdraw}>Submit</Button>
              ) : (
                <Button disabled>
                  <Spin />
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="deposit">
          <Card>
            <CardHeader>
              <CardTitle>Deposit to your wallet</CardTitle>
              <CardDescription>Make a deposit to your wallet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Set Amount ($)</Label>
                <Input
                  onChange={(e) => setWAmount(e.target.value)}
                  id="current"
                  type="number"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="">
                  Method <b className="text-red-700">*</b>
                </label>
                <select
                  id="country"
                  onChange={(e) => setMethod(e.target.value)}
                  className="py-3 px-4 border rounded shadow-md"
                  required
                >
                  <option value="">----</option>
                  <option value="bank-transfer">Bank Transfer</option>
                </select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">
                  Email Address <b className="text-red-700">*</b>
                </Label>
                <Input
                  onChange={(e) => setWemail(e.target.value)}
                  id="email"
                  type="email"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              {!loading ? (
                <Button onClick={handleDeposit}>Submit</Button>
              ) : (
                <Button disabled>
                  <Spin />
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <div>
        <div
          style={{ display: modal ? "" : "none" }}
          className="absolute bg-[#00000085] w-screen h-screen z-50 top-0 left-0 flex  items-center justify-center"
        >
          <div className="md:w-[400px] w-fit h-fit py-4 bg-white rounded-lg shadow-lg px-6 flex flex-col gap-4 items-center">
            <div
              onClick={() => setModal(false)}
              className="w-full flex justify-end cursor-pointer"
            >
              <IoMdCloseCircle color="red" size={20} />
            </div>{" "}
            <GrStatusGood size={50} color="green" />
            <p className="font-bold text-[16px] text-center w-full pb-10">
              Deposit request submitted <br /> You will receive a mail shortly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
