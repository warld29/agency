import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  const blog = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Image: "/src/assets/blog1.jpg",
    },
    {
      id: 2,
      title: "perspiciatis incidunt officia similique vel qui.",
      Image: "/src/assets/blog2.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Image: "/src/assets/blog3.jpg",
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h1 className="text-4xl text-gray-900 font-semibold mb-4">
          Read Some Testimonies of Victories
        </h1>
        <p className="text-lg text-gray-900 mb-8 md:w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis
          perspiciatis incidunt officia similique vel qui, eligendi quisquam
          consectetur consequuntur mollitia sint, minus, dolorum id. At
          voluptate dolores culpa error ut! Perferendis esse eaque blanditiis,
          assumenda ab nisi autem ipsa ad error id praesentium atque totam hic
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blog.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              className="hover:scale-95 transition-all duration-300 lg:w-[500px] lg:h-[500px] object-cover rounded-lg"
              src={blog.Image}
              alt=""
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-gray-900 font-semibold">{blog.title}</h3>
              <div className="flex items-center gap-8 text-center justify-center py-3">
                <a
                  href="/"
                  className="font-bold text-blue-400 hover:text-[gray]"
                >
                  Readmore
                  <FaArrowRight className="inline-block ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
