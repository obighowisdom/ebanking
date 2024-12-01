'use client'
import React from 'react'
import { Button } from '../ui/button';
import {useRouter} from 'next/navigation'

const LoginBox = () => {
  const router = useRouter()
  return (
    <div className="md:w-[300px] w-full h-[130px] md:bg-[#ffffffa2] bg-white rounded-md flex flex-col gap-3 justify-center p-4">
      <h2 className="leading-[36px] font-bold text-[26px] text-blue-900">
        Welcome
      </h2>
      <div className="flex gap-4">
        <Button
          variant="default"
          className="w-fit leading-5  bg-[#4CAF50] text-white font-bold text-[18px]"
          onClick={() => router.push("/auth/login")}
        >
          Sign In
        </Button>{" "}
        <Button
          variant="default"
          className="w-fit leading-5  bg-[#4CAF50] text-white font-bold text-[18px]"
          onClick={() => router.push("/auth/register")}
        >
          Create Account
        </Button>
      </div>
    </div>
  );
}

export default LoginBox