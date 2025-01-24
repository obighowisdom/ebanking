import React from 'react'

const Banner = () => {
  return (
    <section className="bg-[url('/images/invest.jpg')] bg-cover object-cover bg-no-repeat w-full md:h-[500px] h-[200px] rounded-lg">
      <div className="flex justify-center h-full w-full items-center">
        <h3 className="h-fit w-fit p-6 rounded-lg leading-5 bg-[#060b24df] text-white font-bold text-[18px] hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90">
          Why Invest in Us
        </h3>
      </div>
    </section>
  );
}

export default Banner