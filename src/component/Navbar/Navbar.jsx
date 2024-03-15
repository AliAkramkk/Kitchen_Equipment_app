import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
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
            Let's Cook
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <div className="flex items-center">
            {" "}
            {/* Added flex container */}
            <Link
              to="/"
              className="text-gray-500 lg:mb-0 font-semibold dark:text-gray-400 hover:underline me-4 md:me-6"
            >
              HOME
            </Link>
            <Link
              to="/all-courses"
              className="text-gray-500 lg:mb-0 font-semibold dark:text-gray-400 hover:underline me-4 md:me-6"
            >
              COURSES
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
