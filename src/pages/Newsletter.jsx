import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div className="bg-gray-100 w-full" id="newsletter">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16">
        <div className="flex items-center justify-center lg:w-2/3 mx-auto">
          <div className="text-center">
            <h2 className="lg:text-5xl text-3xl font-semibold mb-6 text-gray-800 lg:leading-snug">
              The Root Of GlamCore
            </h2>
            <div className="flex justify-center items-center gap-4">
              <button className="bg-blue-400  font-semibold text-white py-2 px-4 transition-all duration-300 rounded hover:bg-[gray] hover:-translate-y-4 flex ml-2">
                Get Samples
                <div className="">
                  <a href="/" className="font-semibold text-white">
                    <FaArrowRight className="inline-block ml-2" />
                  </a>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
