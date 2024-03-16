import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/lo.png";
import whatsappIcon from "../../assets/wtsap.png";
import phoneIcon from "../../assets/phone.png";

const Footer = () => {
  const footerStyle = {
    background:
      "linear-gradient(to right, rgb(300, 244, 246), rgb(209, 213, 219))",
  };
  return (
    <footer className="bg-white shadow dark:bg-gray-900 " style={footerStyle}>
      <div className="w-full max-w-screen-xl mx-auto p-4 my-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
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
          <div>
            <h3 className="text-xl font-bold">
              FAMOUS KITCHEN EQUIPMENT TRADING
              <span className="text-sm"> L.L.C</span>
            </h3>
            <div className="text-xl font-sans">
              <span>Abu Sufyan</span>
              <br />
              <span>
                <a
                  href="https://wa.me/971527208796"
                  className="flex items-center text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    className="h-5 w-5 mr-2"
                  />
                  052 720 8796
                </a>
              </span>

              <span>
                <a
                  href="tel:+971527208796"
                  className="flex items-center mb-2 text-gray-500 dark:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105 "
                >
                  <img src={phoneIcon} alt="Phone" className="h-5 w-5 mr-2" />
                  02 645 97 87
                </a>
              </span>

              <span>Musaffah Ind.M-26</span>
              <br />
              <span>Abu Dhabi-U.A.E</span>
              <br />
              <span>Email: famouskitchen70@gmail.com</span>
              <br />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center"></div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
