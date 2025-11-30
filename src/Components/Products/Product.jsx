import React from "react";
import { useNavigate } from "react-router-dom";
import { productCategories } from "../Products/ProductsData";

const Products = () => {
    const navigate = useNavigate();

    const ProductSection = ({ categoryKey }) => {
        const { title, subtitle, products } = productCategories[categoryKey];

        return (
            <div className="mt-15 ">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>

                    <button
                        className="border border-black md:me-11 px-3 md:px-5 py-2 rounded-xl hover:bg-black hover:text-white transition"
                        onClick={() => navigate(`/productsPage?category=${categoryKey}`)}
                    >
                        View More
                    </button>
                </div>

                <p className="text-gray-600 mt-1">{subtitle}</p>

                {/* 👉 Only show 4 items here */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-3">
                    {products.slice(0, 4).map((item) => (
                        <div key={item.id} className="cursor-pointer"
                            onClick={() =>
                                navigate(`/product/${item.id}`, { state: { ...item, category: categoryKey } })
                            }

                        >
                            <img
                                src={item.image}
                                className="w-70 h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl"
                            />
                            <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg">{item.name}</p>
                            <p className="text-black font-semibold text-sm sm:text-base">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    return (
        <section className="w-full px-4 sm:px-10 md:px-20 mt-35 max-md:mt-25 max-md:mb-10 mb-20">
            <ProductSection categoryKey="trendingTshirts" />
            <ProductSection categoryKey="oversizedTshirts" />
            <ProductSection categoryKey="trendingShirts" />
            <ProductSection categoryKey="menShirts" />
        </section>
    );
};

export default Products;
