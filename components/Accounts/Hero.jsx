import React from "react";
import CardBox from './CardBox'


const Hero = () => {
  return (
    <section className="bg-[url('/images/premier.jpg')] bg-cover bg-no-repeat w-full md:h-[500px] h-fit">
      <div className="flex md:flex-row flex-col gap-10 p-7 items-center h-full w-full">
        <CardBox
          account="Premier Account"
          text=" Embrace your full life- when your life becomes more than just you"
        />
      </div>
    </section>
  );
};

export default Hero;
