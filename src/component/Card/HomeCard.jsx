import React from "react";
import homecard from "../../assets/homecard.jpg";
const HomeCard = () => {
  return (
    <>
      <div className="bg-gray-50 rounded-lg shadow-inner  m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 ">
              "Expertly Crafted Commercial Kitchen Equipment”
              <br />
              <span className="text-lg text-gray-700 ml-4 p-3"></span>
            </h1>

            <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-4">
              PURCHASE YOUR FAVOURITE <br />
              BUILD YOUR BRIGHT CAREER.
            </h1>
            <h3 className="font-medium text-gray-800 mb-4 mt-10 ml-10">
              TRUSTED OVER 15K CUSTOMERS
            </h3>
          </div>
          {/* <Homelottie
            style={{ width: "300px", height: "200px" }} // Set a fixed height
          /> */}
          <img
            src={homecard}
            alt="Your Image"
            className="w-100 h-96   rounded-lg shadow-black bg-current"
          />
        </div>
      </div>
    </>
  );
};
export default HomeCard;
