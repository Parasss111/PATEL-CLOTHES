import React from "react";
import { useNavigate } from "react-router-dom";

import product1 from "../../assets/new1.jpg";
import product2 from "../../assets/new2.jpg";
import product3 from "../../assets/new3.jpg";
import product4 from "../../assets/new4.jpg";

const NewArrivals = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: product1,
      name: "Full neck T-shirt",
      price: 699,
      oldPrice: 999,
    },
    {
      id: 2,
      image: product2,
      name: "Full neck T-shirt",
      price: 699,
      oldPrice: 999,
    },
    {
      id: 3,
      image: product3,
      name: "Full neck T-shirt",
      price: 699,
      oldPrice: 999,
    },
    {
      id: 4,
      image: product4,
      name: "Full neck T-shirt",
      price: 699,
      oldPrice: 999,
    },
  ];

  return (
    <section className="max-w-[1480px] mx-auto max-md:mt-5 px-4 py-14 max-md:py-12 bg-[#2d2d2d] rounded-3xl text-white mt-12">
      {/* Header Section */}
      <div className="mb-8">
        {/* Title and Button in same row */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-2xl md:text-4xl max-md:text-2xl font-bold tracking-wide md:ms-25">
            NEW ARRIVAL
          </h2>
          <button className="border md:me-24 border-gray-300 text-white px-4 sm:px-5 py-1 sm:py-2 max-md:py-[8px] rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base"
          onClick={()=> navigate('/products')}
          >
            View More
          </button>
        </div>

        {/* Paragraph below */}
        <p className="text-gray-300 mt-1 text-xs sm:text-sm md:text-base max-w-lg md:ms-25">
          "Upgrade your wardrobe now with our must-have new arrivals."
        </p>
      </div>

      {/* Product Cards */}
      <div className="px-2 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden text-gray-800 cursor-pointer"
              onClick={() => navigate(`/product/${item.id}`, { state: item })}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl"
              />

              {/* Product Info */}
              <div className="p-3 text-start">
                <h3 className="text-gray-400 font-medium text-sm sm:text-base mb-1">
                  {item.name}
                </h3>
                <div className="flex justify-start items-center gap-2">
                  <span className="text-white font-semibold text-sm sm:text-base">
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
      </div>
    </section>
  );
};

export default NewArrivals;
