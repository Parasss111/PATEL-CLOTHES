import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { productCategories } from "./Products/ProductsData"; 

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // GET QUERY TEXT
  const params = new URLSearchParams(location.search);
  const query = (params.get("query") || "").toLowerCase().trim();

  // GATHER ALL PRODUCTS
  const allProducts = Object.entries(productCategories).flatMap(
    ([key, cat]) =>
      cat.products.map((p) => ({
        ...p,
        category: key, // ensure category matches key
      }))
  );

  // FILTER STATES
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState("all");
  const [productType, setProductType] = useState("all");

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // FINAL FILTERING LOGIC
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const name = p.name?.toLowerCase() || "";
      const type = p.type?.toLowerCase() || "";
      const category = p.category?.toLowerCase() || "";
      const price = p.price?.toString() || "";

      // TEXT SEARCH FIXED
      const matchesSearch =
        name.includes(query) ||
        type.includes(query) ||
        category.includes(query) ||
        price.includes(query);

      // CATEGORY FILTER
      const matchesCategory =
        selectedCategory === "all" || selectedCategory === p.category;

      // SIZE FILTER
      const matchesSize =
        selectedSizes.length === 0 ||
        selectedSizes.some((s) => p.sizes?.includes(s));

      // PRICE FILTER
      const matchesPrice =
        priceRange === "all" ||
        (priceRange === "0-499" && p.price <= 499) ||
        (priceRange === "500-999" && p.price >= 500 && p.price <= 999) ||
        (priceRange === "1000+" && p.price >= 1000);

      // TYPE FILTER
      const matchesType =
        productType === "all" ||
        type === productType.toLowerCase();

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSize &&
        matchesPrice &&
        matchesType
      );
    });
  }, [query, selectedCategory, selectedSizes, priceRange, productType]);

  // CATEGORY OPTIONS
  const categoryOptions = Object.keys(productCategories);

  // TYPE OPTIONS (Based on your data)
  const typeOptions = ["Full Neck", "Oversized", "Shirt"];

  return (
    <section className="w-full px-6 md:px-20 mt-32 mb-20">
      <h2 className="text-2xl font-bold mb-6">
        Search Results for: <span className="text-blue-600">"{query}"</span>
      </h2>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">

        {/* CATEGORY */}
        <div>
          <p className="font-bold mb-2">Category</p>
          <select
            className="border p-2 rounded-md w-40"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {productCategories[cat].title}
              </option>
            ))}
          </select>
        </div>

        {/* PRICE */}
        <div>
          <p className="font-bold mb-2">Price</p>
          <select
            className="border p-2 rounded-md w-40"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="0-499">₹0 - ₹499</option>
            <option value="500-999">₹500 - ₹999</option>
            <option value="1000+">₹1000+</option>
          </select>
        </div>

        {/* SIZE */}
        <div>
          <p className="font-bold mb-2">Size</p>
          <div className="flex gap-2">
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <button
                key={s}
                onClick={() => toggleSize(s)}
                className={`border px-3 py-1 rounded-md ${
                  selectedSizes.includes(s)
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* TYPE */}
        <div>
          <p className="font-bold mb-2">Type</p>
          <select
            className="border p-2 rounded-md w-40"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="all">All</option>
            {typeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* RESULTS GRID */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer"
              onClick={() =>
                navigate(`/product/${item.id}`, { state: item })
              }
            >
              <img
                src={item.image}
                className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-xl"
                alt={item.name}
              />

              <p className="text-gray-700 font-medium text-sm md:text-lg">
                {item.name}
              </p>

              <p className="text-black font-semibold text-sm sm:text-base">
                ₹{item.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchPage;
