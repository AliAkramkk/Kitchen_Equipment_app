import React from "react";
import Navbar from "../component/Navbar/Navbar";
import HomeCard from "../component/Card/HomeCard";
import ProductCard from "../component/Card/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../assets/mandhi.jpg";
import product2 from "../assets/k9.jpg";
import product3 from "../assets/k6.jpg";
import product4 from "../assets/k7.jpg";
import product5 from "../assets/k5.jpg";

const Home = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className=" bg-gray-100 ">
      <Navbar />
      <HomeCard />
      <h4 className="text-xl font-bold text-gray-800 mb-4 mt-4 text-center">
        SOME OF OUR KITCHEN
      </h4>
      <Slider {...settings}>
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover px-4 transition duration-300 ease-in-out transform hover:scale-105"
            src={product1}
            alt="Product 1"
          />
        </div>
        <div>
          <img
            className="w-full h-full  object-cover px-4 transition duration-300 ease-in-out transform hover:scale-105"
            src={product2}
            alt="Product 2"
          />
        </div>
        <div>
          <img
            className="w-full h-full  object-cover px-4 transition duration-300 ease-in-out transform hover:scale-105"
            src={product3}
            alt="Product 3"
          />
        </div>
        <div>
          <img
            className="w-full h-full  object-cover px-4 transition duration-300 ease-in-out transform hover:scale-105"
            src={product4}
            alt="Product 4"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover px-4 transition duration-300 ease-in-out transform hover:scale-105"
            src={product5}
            alt="Product 5"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
