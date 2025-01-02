"use client";

import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-3">
      {/* <img
        src="/images/img6.jpg"
        width={32}
        height={32}
        className="w-9 h-9 object-cover rounded-full"
      /> */}
      <div className="flex flex-col items-center">
        <p className="font-bold text-[14px] leading-[24px] text-white">
          {session?.user?.name}
        </p>
        <p className="font-bold text-[14px] leading-[24px] text-white">
          {session?.user?.email}
        </p>
      </div>
    </div>
  );
}
