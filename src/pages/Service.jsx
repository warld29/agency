/* eslint-disable react/prop-types */
import React from "react";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";
import { FaBuilding, FaPeopleGroup, FaSpinner } from "react-icons/fa6";
import ServiceCard from "../component/ServiceCard";

const Service = ({ icon, text1, text2 }) => {
  return (
    <div className="w-full bg-gray-100" id="service">
      <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto  ">
        <div className="text-center my-8">
          <h2 className="text-4xl font-semibold mb-2">Our Clients</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto.
          </p>

          <div className="my-12 flex flex-wrap justify-between items-center gap-8">
            <img
              className="w-[140px] h-[80px] object-cover"
              src={logo1}
              alt=""
            />
            <img
              className="w-[140px] h-[80px] object-cover"
              src={logo2}
              alt=""
            />
            <img
              className="w-[140px] h-[80px] object-cover"
              src={logo3}
              alt=""
            />
            <img
              className="w-[140px] h-[80px] object-cover"
              src={logo4}
              alt=""
            />
          </div>
        </div>

        <div className="mt-20 m:w1/2 mx-auto text-center">
          <h2 className="text-4xl text-gray-950 font-semibold mb-3">
            Manage Your Entire Essence in <br /> a Single Glance
          </h2>
          <p className="text-gray-900 text-xl font-semibold">
            What do we stand for Glam
            <span className="text-blue-400">Core?</span>
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          <ServiceCard
            icon={<FaPeopleGroup className="h-20 w-20 text-gray-950" />}
            text1={"Membership Organization"}
            text2={
              "Our membership management software provide full automation of membership renewal and payment"
            }
          />
          <ServiceCard
            icon={<FaBuilding className="h-20 w-20 text-gray-950" />}
            text1={"National Associations"}
            text2={
              "Our membership management software provide full automation of membership renewal and payment"
            }
          />
          <ServiceCard
            icon={<FaSpinner className="h-20 w-20 text-gray-950" />}
            text1={"Clubs and Groups"}
            text2={
              "Our membership management software provide full automation of membership renewal and payment"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
