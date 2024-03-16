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
import product19 from "../assets/kitchn.png";
import product20 from "../assets/supply.png";
import product21 from "../assets/qlity.png";
import Footer from "../component/Footer/Footer";

const Home = () => {
  const products = [
    { image: product6, description: "Toaster" },
    { image: product7, description: "Conveyor-Dishwasher" },
    { image: product8, description: "Oven" },
    { image: product9, description: "Fried Special" },
    // { image: product10, description: "Shawarma Shaway" },
    // { image: product15, description: "3 Large LED" },
    { image: product14, description: "4th gen pan" },
    { image: product12, description: "Drain borad glass" },
    // { image: product11, description: "Wash Equipment" },
    { image: product13, description: "Three Deck Baking Oven" },
    // { image: product16, description: "Exhaust Fan" },
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
