import React from "react";
import Navbar from "../component/Navbar/Navbar";
import HomeCard from "../component/Card/HomeCard";
import ProductCard from "../component/Card/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../assets/car1.jpg";
import product2 from "../assets/car2.jpg";
import product3 from "../assets/caro3.jpg";
import product4 from "../assets/caro4.jpg";
import product5 from "../assets/cofee.jpg";
import product6 from "../assets/cofee.jpg";
import product7 from "../assets/comercialRefrigerator.webp";
import product8 from "../assets/oven.jpg";
import product9 from "../assets/dishwashers.png";
import product10 from "../assets/cofee.jpg";
import product11 from "../assets/cofee.jpg";
import product12 from "../assets/commercialBeverage.webp";
import product13 from "../assets/iceCreammachine.webp";
import product14 from "../assets/commercialCooking.webp";
import product15 from "../assets/cofee.jpg";
import product16 from "../assets/cofee.jpg";
import product17 from "../assets/washtable.png";
import product18 from "../assets/installation.jpg";
import product19 from "../assets/cofee.jpg";
import product20 from "../assets/cofee.jpg";
import product21 from "../assets/cofee.jpg";
import Footer from "../component/Footer/Footer";

const Home = () => {
  const products = [
    { image: product6, description: "Toaster" },
    { image: product7, description: "Comercial Refrigerator" },
    { image: product8, description: "Oven" },
    { image: product9, description: "Dish Washer" },
    // { image: product10, description: "Shawarma Shaway" },
    // { image: product15, description: "3 Large LED" },
    { image: product14, description: "Commercial Cooking" },
    { image: product12, description: "Commercial Beverage" },
    // { image: product11, description: "Wash Equipment" },
    { image: product13, description: "Ice Cream Machine" },
    // { image: product16, description: "Exhaust Fan" },
    { image: product17, description: "Dish Washer" },
  ];
  const settings = {
    // dots: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const cardStyle3 = {
    background:
      "linear-gradient(to right, hsl(210, 60%, 95%), hsl(0, 60%, 95%), hsl(60, 100%, 95%))",
  };
  return (
    <div className="">
      <Navbar />
      <HomeCard />
      <h1 className="text-4xl font-sans text-gray-800 mb-4 mt-8 text-center">
        OUR PRODUCTS
      </h1>
      <div className="flex justify-center flex-wrap gap-8 mt-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
      <div>
      <h4 className="text-4xl font-sans text-gray-800 mb-4 mt-8 text-center">
        SOME OF OUR KITCHENS
      </h4>
      <div className="slider-container p-4">
          <Slider {...settings}>
            <div>
              <img src={product1} alt="Product 1"  className="h-80 w-80 object-auto rounded-lg"/>
            </div>
            <div>
              <img src={product2} alt="Product 2"  className="h-80 w-80 object-auto rounded-lg"/>
            </div>
            <div>
              <img src={product3} alt="Product 3"  className="h-80 w-80 object-auto rounded-lg"/>
            </div>
            <div>
              <img src={product4} alt="Product 4"
              className="h-80 w-80 object-auto rounded-lg" />
            </div>
          </Slider>
        </div>
    </div>
      <h1 className="text-4xl font-sans text-gray-800 mb-4 mt-8 text-center">
        OUR VISION
      </h1>
      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-8 custom-shadow-bg-white">
          <img
            src={product18}
            alt="Product 18"
            className="w-16 h-16 rounded-full object-cover mb-3"
          />

          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            INSTALLATION
          </h5>

          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            QS Gas Safe commercial catering engineers ensure that your kitchen
            is installed and commissioned safely and effectively. Your dedicated
            QS project manager will be on hand to oversee installation and
            ensure that everything runs smoothly and to your satisfaction
          </p>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-8 custom-shadow-bg-white">
          <img
            src={product19}
            alt="Product 18"
            className="w-16 h-16 rounded-full object-cover mb-3"
          />

          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            KITCHEN SOLUTIONS
          </h5>

          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            QS is specialists in the design, supply and installation of
            commercial kitchens to clients ranging from small café’s, care
            homes, large restaurants, production kitchens, Industrial Kitchen,
            Central Kitchens, Hotel kitchens & Corporate kitchens.
          </p>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-8 custom-shadow-bg-white">
          <img
            src={product20}
            alt="Product 18"
            className="w-16 h-16 rounded-full object-cover mb-3"
          />

          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            SUPPLY
          </h5>

          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            QS is specialists in the design, supply and installation of
            commercial kitchens to clients ranging from small café’s, care
            homes, large restaurants, production kitchens, Industrial Kitchen,
            Central Kitchens, Hotel kitchens & Corporate kitchens.
          </p>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-8 custom-shadow-bg-white">
          <img
            src={product21}
            alt="Product 18"
            className="w-16 h-16 rounded-full object-cover mb-3"
          />

          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            QUALITY
          </h5>

          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            QS specializes in ensuring the quality and reliability of every
            aspect of commercial kitchen design, supply, and installation. Our
            expertise extends to a diverse clientele, including small cafes,
            care homes, expansive restaurants, production kitchens, industrial
            facilities, central kitchens, hotel establishments, and corporate
            facilities.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
