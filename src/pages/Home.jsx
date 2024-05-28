import React from "react";
import { Carousel } from "flowbite-react";
import gc4 from "../assets/gc4.jpg";
import gc1 from "../assets/gc1.jpg";
import gc3 from "../assets/gc3.jpg";

const Home = () => {
  return (
    <div className="relative" id="home">
      <Carousel className="w-[100%] h-screen relative">
        <div className="w-full md:w-[100%]">
          <img className="w-full h-screen object-cover" src={gc4} alt="" />
        </div>
        <div className="w-full md:w-[100%]">
          <img className="w-full h-screen object-cover" src={gc1} alt="" />
        </div>
        <div className="w-full md:w-[100%]">
          <img className="w-full h-screen object-cover" src={gc3} alt="" />
        </div>
      </Carousel>
      <div className="absolute top-0 left-5 font-serif right-5 text-white text-5xl font-semibold flex items-center py-5 h-screen px-8  md:5xl">
        <h1 className="font-serif">
          BEAUTY. <br /> <br /> BOLDNESS. <br /> <br />
          GLAMOUR.
        </h1>
      </div>
    </div>
  );
};

export default Home;
