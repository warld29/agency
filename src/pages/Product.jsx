import React from "react";
import pg3 from "../assets/pg3.jpg";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";
import home2 from "../assets/home2.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Product = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w1/3">
            <img className="w-[2000px] h-[100%] rounded-md" src={pg3} alt="" />
          </div>
          <div className="md:w-3/3 max-auto">
            <h2 className="text-4xl text-gray-900 font-semibold mb-4 md:w-4/5">
              Redefining Your Truth
            </h2>
            <p className="md:w-3/4 text-l text-gray-950 py-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil
              officia sunt ad unde illum, molestias sapiente rem, labore
              voluptatem, recusandae explicabo suscipit quaerat tenetur? Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
              quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ea cum alias delectus praesentium. Aliquid, sequi! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Totam modi
              omnis quam rerum expedita maxime recusandae facere dolor. Commodi,
              ex!
            </p>
            <button className="bg-blue-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-[gray] hover:-translate-y-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/*STATS*/}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-gray-100 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w1/3">
            <img className="rounded-md" src={home2} alt="" />
          </div>

          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-lg text-gray-900 mb-8 leading-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                vitae eveniet optio nemo consectetur officia distinctio eum
                assumenda illo hic placeat laudantium voluptatibus, repellendus
                ad saepe at quis quam. Consequatur error aut beatae numquam
                magnam fugit? Veniam reiciendis quas minus est, soluta, harum
                placeat, quaerat blanditiis necessitatibus a at pariatur. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                odit sunt perferendis saepe temporibus repellat, eos praesentium
                amet commodi natus quidem explicabo nostrum facilis totam
                aliquam perspiciatis voluptatibus magnam. Nemo voluptatum ut
                ipsum repellendus harum error inventore quidem, iure tempore.
              </p>
              <h5 className="text-black text-xl font-bold mb-2">Luther King</h5>
              <p className="text-base text-gray-900">
                Nigerian Beauty Association
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap py-5">
                  <img
                    className="w-[100px] h-[70px] object-cover"
                    src={logo1}
                    alt=""
                  />
                  <img
                    className="w-[100px] h-[70px] object-cover"
                    src={logo2}
                    alt=""
                  />
                  <img
                    className="w-[100px] h-[70px] object-cover"
                    src={logo3}
                    alt=""
                  />
                  <img
                    className="w-[100px] h-[70px] object-cover"
                    src={logo4}
                    alt=""
                  />
                  <div className="flex items-center gap-8">
                    <a
                      href="/"
                      className="font-bold text-blue-400 hover:text-[gray]"
                    >
                      Join Our Community
                      <FaArrowRight className="inline-block ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
