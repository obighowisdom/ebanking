import React from "react";
import { CarouselDemo } from "./CardSlider";
import LoginBox from "./LoginBox";

const Hero = () => {
    return (
        <section className="bg-[url('/images/herobg.jpg')] bg-cover bg-no-repeat w-full md:h-[500px] h-fit">
            <div className="flex md:flex-row flex-col gap-10 p-7 justify-evenly w-full items-center">
                <CarouselDemo />
                <LoginBox />
            </div>
      </section>
    );
};

export default Hero;
