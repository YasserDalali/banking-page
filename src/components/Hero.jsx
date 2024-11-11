import React from "react";
import CreditCardUi from "./UI/CreditCardUi";
import Phone from "../653020bf35cc1ec728498111_fsddfdsfs 1-p-800.png";
export default function Hero() {
  return (
    <main>
      <article className="flex flex-col items-center gap-10">
        <h1 className="text-center text-6xl md:text-9xl font-bold text-primary motion-preset-compress  ">
          It's a new friendly <br></br> ATM interface
        </h1>
        <div className="relative flex md:-translate-y-20 justify-center h-[40vh] md:h-[20vh]">
          <section className=" motion-preset-bounce  motion-delay-100 absolute top-0 hover:-translate-y-5 transition-all md:top-8 md:left-[-30rem] md:-rotate-12">
            <CreditCardUi className="" color="bg-yellow-400" />
          </section>
          <section className=" motion-preset-bounce  motion-delay-200 absolute top-20 hover:-translate-y-5 transition-all md:top-8 md:left-[-15rem] md:rotate-6">
            <CreditCardUi color="bg-blue-500" />
          </section>
          <section className=" motion-preset-bounce  motion-delay-300 absolute top-40 hover:-translate-y-5 transition-all md:top-8 md:left-[-0rem] md:-rotate-12">
            <CreditCardUi  color="bg-green-500" />
          </section>
          <section className=" motion-preset-bounce  motion-delay-500 absolute top-60 hover:-translate-y-5 transition-all md:top-8 md:left-[10rem] md:rotate-12">
            <CreditCardUi color="bg-orange-500" />
          </section>
        </div>
      </article>



      <article className="relative bg-amber-400 py-0 pt-8 md:pt-20 z-10 md:flex md:items-center md:flex-col bg-gradient-to-b from-amber-400 to-orange-400">
        <h1 className="text-end text-white text-5xl md:text-8xl font-bold md:translate-y-10">

          Complete ATM services <br></br> at your disposal, <br></br> Secure and Simple.
        </h1>
        <img src={Phone} alt="phone" className="w-full md:w-1/2 z-10"/>
      </article>
    </main>
  );
}
