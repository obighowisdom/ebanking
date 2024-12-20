"use client";
import LoadingComponent from "../../components/Dashboard/Loaders/LoadingState";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { GrStatusGood } from "react-icons/gr";


const SUCCESS = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/user/success");
  };
  return (
    <div>
      <div className="absolute bg-[#00000085] w-screen h-screen z-50 top-0 left-0 flex  items-center justify-center">
              <div className="md:w-[400px] w-fit h-fit py-10 bg-white rounded-lg shadow-lg px-6 flex flex-col gap-4 items-center">
                  <GrStatusGood size={50} color="green" />
          <p className="font-bold text-[16px] text-center w-full">Transaction is Submitted and processing!! <br /> You will receive a mail shortly</p>
        </div>
      </div>
    </div>
  );
};

export default SUCCESS;
