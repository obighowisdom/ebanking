"use client";
import LoadingComponent from "../../components/Dashboard/Loaders/LoadingState";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const TAX = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/user/imf");
  };
  return (
    <div>
      <div className="absolute bg-[#00000085] w-screen h-screen z-50 top-0 left-0 flex  items-center justify-center">
        <div className="md:w-[400px] w-fit h-fit py-10 bg-white rounded-lg shadow-lg px-6 flex flex-col items-center">
          <LoadingComponent title="TAX Code" percent={31} stop={59} />
          <div>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 text-2xl w-full max-w-xs mb-4"
            />
          </div>

          <Button
            onClick={handleSubmit}
            variant="default"
            className="w-full bg-blue-950 text-white"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TAX;
