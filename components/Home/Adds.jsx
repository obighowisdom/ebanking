import Image from 'next/image';
import React from 'react'

const Adds = () => {
  return (
    <div className="w-full h-full md:flex-nowrap flex-wrap flex gap-5 justify-between">
      <div>
        <h3 className="text-white font-bold text-[18px]">
          Income Deposit up <br />
          15% per annum
        </h3>
        <p className="text-gray-400 mt-6 font-bold text-[18px]">
          Monthly interest payment on the card
        </p>
      </div>
      <Image src="/images/cash.png" alt="cash" width={100} height={80} />
    </div>
  );
}

export default Adds