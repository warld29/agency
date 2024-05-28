/* eslint-disable react/prop-types */
import React from "react";
import pg5 from "../assets/pg5.jpg";
import { FaMagnifyingGlass, FaPaypal, FaThumbsUp } from "react-icons/fa6";
import RefCard from "../component/RefCard";
import { FaPaperPlane } from "react-icons/fa";

const About = ({ icon, num, msg }) => {
  return (
    <div className="w-full bg-gray-100" id="about">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="w-[1000px] h-[100%]" src={pg5} alt="" />
          </div>
          <div className="md:w-3/3 max-auto">
            <h2 className="text-4xl text-gray-900 font-semibold mb-4 md:w-4/5">
              Transcending Of Commonplace to Aesthetic
            </h2>
            <p className="md:w-3/4 text-l text-gray-950 py-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil
              officia sunt ad unde illum, molestias sapiente rem, labore
              voluptatem, recusandae explicabo suscipit quaerat tenetur? Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
              quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ea cum alias delectus praesentium. Aliquid, sequi!
            </p>
            <button className="bg-blue-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-[gray] hover:-translate-y-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/*STATS*/}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-white py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w1/2">
            <h2 className="text-4xl text-gray-900 font-semibold mb-4 md:w-2/3">
              Helping African Beauties <br />{" "}
              <span className="text-green-900">Live Their Truth.</span>
            </h2>
            <p className="">Exceed your full potentials.</p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <RefCard
                icon={<FaMagnifyingGlass className="w-[30px] h-[30px]" />}
                num={"2,345,098"}
                msg={"Visitors"}
              />
              <RefCard
                icon={<FaPaperPlane className="w-[30px] h-[30px]" />}
                num={"4,355,009"}
                msg={"Users"}
              />
            </div>
            <div className="space-y-8">
              <RefCard
                icon={<FaThumbsUp className="w-[30px] h-[30px]" />}
                num={"3,985,298"}
                msg={"Likes"}
              />
              <RefCard
                icon={<FaPaypal className="w-[30px] h-[30px]" />}
                num={"1,355,009"}
                msg={"Payment"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
