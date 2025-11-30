import React from "react";
import { useLocation, useNavigate  } from "react-router-dom";
import { productCategories } from "../Products/ProductsData";

const ProductsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
    const navigate = useNavigate();

  const data = productCategories[category];

  if (!data)
    return <h1 className="text-center mt-20 text-2xl font-bold">Category Not Found</h1>;

  return (
    <section className="px-6 md:px-20 mt-35 mb-20">
      <h1 className="text-3xl font-bold mb-3">{data.title}</h1>
      <p className="text-gray-600 mb-6">{data.subtitle}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data.products.map((item) => (
          <div key={item.id}
          className="cursor-pointer"
          onClick={() => navigate(`/product/${item.id}`, { state: item })}
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
    </section>
  );
};

export default ProductsPage;
