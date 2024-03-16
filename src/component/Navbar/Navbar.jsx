import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import logo from "../../assets/lo.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarStyle = {
    background:
      "linear-gradient(to right,  rgb(250, 224, 226), rgb(189, 193, 199))",
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-400 p-4 w-full" style={navbarStyle}>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link
            to="/"
            className="text-white text-2xl font-bold hover:text-black"
          >
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                className="h-34 w-34 transition duration-300 ease-in-out transform hover:scale-105"
                alt="Your Logo"
                style={{ cursor: "pointer" }}
              />
            </a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <div className="flex items-center">
            {" "}
            {/* Added flex container */}
            <Link
              to="/"
              className="text-gray-500 lg:mb-0  dark:text-gray-400 hover:underline me-4 md:me-6 hvr-underline-from-center  hover:transform hover:shadow-2xl transition-transform duration-300 hover:bg-gray hover:animate-shake font-bold "
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-gray-500 lg:mb-0  dark:text-gray-400 hover:underline me-4 md:me-6 hvr-underline-from-center  hover:transform hover:shadow-2xl transition-transform duration-300 hover:bg-gray hover:animate-shake font-bold "
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="text-gray-500 lg:mb-0  dark:text-gray-400 hover:underline me-4 md:me-6 hvr-underline-from-center  hover:transform hover:shadow-2xl transition-transform duration-300 hover:bg-gray hover:animate-shake font-bold "
            >
              CONTACT
            </Link>
          </div>
          {/* Add more links as needed */}
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isMobileMenuOpen} toggle={toggleMobileMenu} />
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Add mobile menu links */}
            <Link to="/" className="nav-link" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link
              to="/all-courses"
              className="nav-link"
              onClick={toggleMobileMenu}
            >
              Courses
            </Link>
            {/* Add more mobile menu links as needed */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
