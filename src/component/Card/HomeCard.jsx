import React from "react";
import homecard from "../../assets/hom4.jpg";
const HomeCard = () => {
  
  return (
    <>
     <section
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${homecard})` }}
>

  <div
    className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 "
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
      {/* <div className=" shadow-inner  m-4 bg-cover bg-center bg-no-repeat w-100 h-96"style={{ backgroundImage: `url(${homecard})` }}>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between ">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 ">
              "Expertly Crafted Commercial Kitchen Equipment” */}
              {/* <br />
              <span className="text-lg text-gray-700 ml-4 p-3"></span> */}
            {/* </h1>

            <h1 className="text-4xl font-bold text-lime-950 mb-4 mt-4">
              PURCHASE YOUR FAVOURITE <br />
              BUILD YOUR BRIGHT CAREER.
            </h1>
            <h3 className="font-serif text-2xl text-orange-400 mb-4 mt-10 ml-10">
              TRUSTED OVER 15K CUSTOMERS
            </h3>
          </div> */}
          {/* <Homelottie
            style={{ width: "300px", height: "200px" }} // Set a fixed height
          /> */}
          {/* <img
            src={homecard}
            alt="Your Image"
            className="w-100 h-96  rounded-xl shadow-black bg-current"
          /> */}
        {/* </div>
      </div> */}
    </>
  );
};
export default HomeCard;
