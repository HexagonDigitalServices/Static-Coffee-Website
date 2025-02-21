import React, { useState } from "react";
import { FaBars, FaTimes, FaCoffee, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { id: "home", label: "Home", extra: "lg:text-lg" },
    { id: "menu", label: "Menu", extra: "lg:text-lg" },
    { id: "about", label: "About", extra: "not-even:lg:text-lg" },
    { id: "testimonial", label: "Testimonial", extra: "lg:text-lg" },
  ];
  return (
    <nav className="relative bg-cover bg-center shadow-xl border-4 border-dashed border-amber-500 rounded-xl overflow-hidden">
      {/* Coffee Theme Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4B3621] to-[#6F4E37] opacity-95"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo with responsive font sizing */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-white text-3xl md:text-lg lg:text-4xl font-extrabold flex items-center"
              style={{ fontFamily: "'Lobster', cursive" }}
            >
              <FaCoffee className="mr-2 text-yellow-300" />
              Café Royale
            </a>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ id, label, extra }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-white hover:text-yellow-300 transition-all duration-300 font-semibold text-lg md:text-sm ${extra} relative group`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          {/* Enhanced Action Buttons for Tablet and Larger Screens */}
          <div className="hidden md:flex space-x-5 items-center">
            <a
              href="#order"
              className="flex items-center lg:py-3 px-4 md:px-6 py-2 md:py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full shadow-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-sm md:text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <FaCoffee className="mr-2" />
              Order Now
            </a>
            <a
              href="#login"
              className="px-4 md:px-6 py-2 md:py-1 lg:py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-white transition-all duration-300 font-bold text-sm md:text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <FaUser className="inline md:text-sm mr-2" />
              Login
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-yellow-300 transition-all duration-300 text-2xl p-2 rounded-lg bg-white bg-opacity-10"
            >
              {isOpen ? (
                <FaTimes className="text-yellow-300" />
              ) : (
                <FaBars className="text-yellow-300" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#4B3621] bg-opacity-95 backdrop-blur-sm rounded-lg mt-4 py-4 shadow-xl">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-white text-lg py-3 px-4 rounded-lg hover:bg-[#6F4E37] transition-all duration-300"
                >
                  {label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 mt-4">
                <a
                  href="#order"
                  className="w-full text-center py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Order Now
                </a>
                <a
                  href="#login"
                  className="w-full text-center py-3 border-2 border-yellow-400 text-white rounded-full hover:bg-yellow-400 hover:text-white transition-all duration-300"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
