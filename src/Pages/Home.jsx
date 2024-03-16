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

const Home = () => {
  const products = [
    { image: product6, description: "Mandhi" },
    { image: product7, description: "Shaway New" },
    { image: product8, description: "Stove Big" },
    { image: product9, description: "Shawarma Shaway" },
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

  return (
    <div className=" bg-gray-100 ">
      <Navbar />
      <HomeCard />
      <h4 className="text-xl font-bold text-gray-800 mb-4 mt-4 text-center">
        SOME OF OUR KITCHEN
      </h4>
      <Slider {...settings}>
        <div className="w-full h-96">
          <img
            className="w-full h-96 object-cover px-4 "
            src={product1}
            alt="Product 1"
          />
        </div>
        <div>
          <img
            className="w-full h-96  object-cover px-4"
            src={product2}
            alt="Product 2"
          />
        </div>
        <div>
          <img
            className="w-full h-96  object-cover px-4 "
            src={product3}
            alt="Product 3"
          />
        </div>
        <div>
          <img
            className="w-full h-96  object-cover px-4"
            src={product4}
            alt="Product 4"
          />
        </div>
        {/* <div className="mt-20 justify-center ">
          <img
            className="w-full h-96 object-cover px-4"
            src={product5}
            alt="Product 5"
          />
        </div> */}
      </Slider>
      <div className="flex justify-center">
        {/* <Slider {...settings}> */}
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            description={product.description}
          />
        ))}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Home;
