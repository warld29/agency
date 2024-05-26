import React from "react";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";

const Service = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto  bg-gray-100">
      <div className="text-center my-8">
        <h2 className="text-4xl font-semibold mb-2">Our Clients</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto.
        </p>

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img className="w-[140px] h-[80px] object-cover" src={logo1} alt="" />
          <img className="w-[140px] h-[80px] object-cover" src={logo2} alt="" />
          <img className="w-[140px] h-[80px] object-cover" src={logo3} alt="" />
          <img className="w-[140px] h-[80px] object-cover" src={logo4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
