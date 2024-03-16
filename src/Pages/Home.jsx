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
import product5 from "../assets/stove big.jpg";
import product6 from "../assets/br.jpg";
import product7 from "../assets/cd.jpg";
import product8 from "../assets/ovn.jpg";
import product9 from "../assets/tnk.jpg";
import product10 from "../assets/shawarma shaway.jpg";
import product11 from "../assets/k15.jpg";
import product12 from "../assets/k16.jpg";
import product13 from "../assets/k17.jpg";
import product14 from "../assets/k18.jpg";
import product15 from "../assets/k19.jpg";
import product16 from "../assets/k20.jpg";
import product17 from "../assets/k21.jpg";
import product18 from "../assets/images.png";

const Home = () => {
  const products = [
    { image: product6, description: "Mandhi" },
    { image: product7, description: "Conveyor-Dishwasher" },
    { image: product8, description: "Oven" },
    { image: product9, description: "Shawarma Shaway" },
    { image: product13, description: "Three Deck Baking Oven" },
    { image: product10, description: "Shawarma Shaway" },
    { image: product11, description: "Wash Equipment" },
    { image: product12, description: "Drain borad glass" },
    { image: product14, description: "4th gen pan" },
    { image: product15, description: "3 Large LED" },
    { image: product16, description: "Exhaust Fan" },
    { image: product17, description: "Dish Washer" },
  ];
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const cardStyle3 = {
    background:
      "linear-gradient(to right, hsl(210, 60%, 95%), hsl(0, 60%, 95%), hsl(60, 100%, 95%))",
  };
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HomeCard />
      <h4 className="text-4xl font-sans text-gray-800 mb-4 mt-8 text-center">
        SOME OF OUR KITCHENS
      </h4>
      <Slider {...settings}>
        <div className="w-full h-96">
          <img
            className="w-full h-full object-cover px-4"
            src={product1}
            alt="Product 1"
          />
        </div>
        <div className="w-full h-96">
          <img
            className="w-full h-full object-cover px-4"
            src={product2}
            alt="Product 2"
          />
        </div>
        <div className="w-full h-96">
          <img
            className="w-full h-full object-cover px-4"
            src={product3}
            alt="Product 3"
          />
        </div>
        <div className="w-full h-96">
          <img
            className="w-full h-full object-cover px-4"
            src={product4}
            alt="Product 4"
          />
        </div>
      </Slider>
      <h1
        className="text-4xl font-sans text-gray-800 mb-4 mt-8 text-center"
        style={cardStyle3}
      >
        OUR PRODUCTS
      </h1>
      <div
        className="flex justify-center flex-wrap gap-8 mt-8"
        style={cardStyle3}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
      <h1
        className="text-4xl font-sans text-gray-800 mb-4 mt-8 text-center"
        style={cardStyle3}
      >
        OUR VISION
      </h1>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          src={product18}
          alt="Product 18"
          className="w-16 h-16 rounded-full object-cover mb-3"
        />

        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Need help with a Claim?
        </h5>

        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Follow our step-by-step guidelines on how to certify for your weekly
          benefits:
        </p>
        {/* <a
          href="#"
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          See our guidelines
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a> */}
      </div>
    </div>
  );
};

export default Home;
