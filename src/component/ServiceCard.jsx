/* eslint-disable react/prop-types */
import React from "react";

const ServiceCard = ({ icon, text1, text2 }) => {
  return (
    <>
      <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-2xl cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-blue-400 transition-all duration-300 flex items-center justify-center h-full">
        <div className="flex items-center justify-center flex-col">
          {icon}
          <h4 className="text-2xl font-bold text-gray-900 mb-2 px-2">
            {text1}
          </h4>
          <p className="text-gray-950">{text2}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
