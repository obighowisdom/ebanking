import React from "react";
import CardBox from './CardBox'



const Hamburger = ({img, title, text}) => {
  return (
    <section className="w-full md:h-[500px] h-fit">
      <div className="relative">
        <img
          src={img}
          alt="bg"
          className="bg-no-repeat object-cover w-full"
        />
        <div className="md:absolute top-0 md:mt-[150px]">
          <CardBox
            account={title}
            text={text}
          />
        </div>
      </div>
    </section>
  );
};

export default Hamburger;
