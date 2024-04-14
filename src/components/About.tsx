import React from "react";
import aboutCoffee from "../assets/coffee-backgrounds/aboutCoffee2.jpg";

function About() {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/3 bg-slate-900"></div>
      <div className="absolute z-10 h-fit w-full lg:h-[450px] lg:w-[800px] md:h-[350px] md:w-[700px] bg-white flex flex-col md:flex-row gap-1 rounded-none md:rounded-lg mt-28 left-0 lg:left-24 xl:left-[18rem] md:left-8">
        <div className="w-full xl:w-3/5">
          <img
            src={aboutCoffee}
            alt="Coffee background"
            className="w-full h-64 md:h-full object-cover rounded-none md:rounded-lg md:rounded-r-none"
          />
        </div>
        <div className="w-full xl:w-2/5 flex flex-col justify-center items-center my-5 md:my-0 px-0 mx-0 xl:px-4 md:px-1 xl:mx-10 md:mx-2">
          <h1 className="text-xl font-bold mb-4">We Are Anteiku!</h1>
          <p className="text-sm font-mono text-center">
            We've been perfecting the art of coffee for a long time, building
            trust with both our customers and suppliers. At Anteiku, we believe
            in delivering the finest coffee experience, crafted with passion and
            expertise.
          </p>
        </div>
      </div>
      <div className="h-2/3 bg-gray-300"></div>
    </div>
  );
}

export default About;
