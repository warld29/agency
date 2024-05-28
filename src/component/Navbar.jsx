import React, { useState, useEffect } from "react";
import RegistrationForm from "../component/RegistrationForm";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const toggleRegistrationForm = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Blog", path: "blog" },
    { link: "Newsletter", path: "newsletter" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-black md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-black duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <h1 className="text-white w-10 inline-block items-center text-2xl font-semibold lg:text-3xl">
            Glam<span className="text-blue-400">Core</span>
          </h1>

          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-white font-bold text-xl hover:text-blue-400 cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden font-semibold lg:flex items-center text-blue-400 hover:text-white"
            >
              Login
            </a>
            <button
              onClick={toggleRegistrationForm}
              className="bg-blue-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-[gray] hover:-translate-y-4"
            >
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[gray] focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-7 " />
              ) : (
                <FaBars className="h-6 w-7 " />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4  mt-16 py-7 bg-black ${
            isMenuOpen
              ? "fixed flex flex-col justify-center items-center top-0 right-0 left-0 h-screen"
              : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-blue-400"
              onClick={handleMenuItemClick}
            >
              {link}
            </Link>
          ))}
        </div>
        {/* Registration form */}
        {isRegistrationOpen && (
          <RegistrationForm
            className="text-white"
            onClose={toggleRegistrationForm}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
