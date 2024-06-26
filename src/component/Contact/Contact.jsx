import React from "react";
import ContactCard from "../Card/ContactCard";
import backgroundImage from "../../assets/cofee.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div
          className="min-h-screen flex flex-col  items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-center text-gray-100 justify-center text-5xl p-2 font-extrabold">
            Contact Page
          </h1>
          <div className="p-3 text-white flex flex-col md:flex-row items-center md:items-start">
            {/* <img
              src={letsCookLogo}
              alt="Let's Cook Logo"
              className="mb-4 max-w-xs md:mr-6 md:mb-0"
            /> */}
            <h3 className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-20 mb-20 text-center md:text-left">
              Welcome to <strong>QS</strong>! We are passionate about bringing
              the joy of cooking to your fingertips.
            </h3>
          </div>
          <div className="flex justify-center items-center mb-8">
            <ContactCard />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
