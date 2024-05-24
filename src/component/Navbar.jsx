import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuOpen(true);
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
    { link: "Product", path: "prodct" },
    { link: "Testimonal", path: "testimonal" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav>
        <div>
          <h1 className="w-10 inline-block items-center text-2xl font-semibold">
            GlamCore
          </h1>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-[gray] hover:text-blue-400"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-blue-400 hover:text-[gray]"
            >
              Login
            </a>
            <button className="bg-blue-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-[gray]">
              Sign Up
            </button>
          </div>

          <div className="">
            <button className="">
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-[gray]" />
              ) : (
                <FaBars className="h-6 w-6 text-[gray]" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
