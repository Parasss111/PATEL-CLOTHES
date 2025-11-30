import React from "react";
import { useNavigate } from "react-router-dom";

import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpg";


const OurProduct = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      image: product1,
      name: "Full neck T-shirt",
      price: 699,
      oldPrice: 999,
      discount: "-22%",
    },
    {
      id: 2,
      image: product2,
      name: "Full neck T-shirt",
      price: 699,
      oldPrice: 999,
      discount: "-22%",
    },
    {
      id: 3,
      image: product3,
      name: "Full neck T-shirt",
      price: 699,
      oldPrice: 999,
      discount: "-22%",
    },
    {
      id: 4,
      image: product4,
      name: "Full neck T-shirt",
      price: 699,
      oldPrice: 999,
      discount: "-22%",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto mt-12 max-md:mt-5 px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-start mb-6 font-sans tracking-wide">
        OUR PRODUCT
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl transition p-2 sm:p-3 relative"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() =>
                navigate(`/product/${item.id}`, { state: { ...item, category: "trendingTshirts" } })
              }

            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl"
              />
              <span className="absolute top-2 right-2 bg-black text-white text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-1 rounded-full">
                {item.discount}
              </span>
            </div>

            {/* Product Info */}
            <div className="mt-2 sm:mt-3 text-start">
              <h3 className="text-gray-700 font-medium text-sm sm:text-base md:text-lg">
                {item.name}
              </h3>
              <div className="flex items-center justify-start gap-1 sm:gap-1.5 mt-1">
                <span className="text-black font-semibold text-sm sm:text-base">
                  ₹{item.price}
                </span>
                <span className="text-red-500 line-through text-xs sm:text-sm">
                  ₹{item.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProduct;
