import React from "react";

const products = [
  {
    id: 1,
    name: "Black Basic Tee",
    price: "$32",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 2,
    name: "Off-White Basic Tee",
    price: "$32",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
  },
  {
    id: 3,
    name: "Mountains Artwork Tee",
    price: "$36",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
  },
];

const ProductPage = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Favorites
          </h2>
          <a
            href="#"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all favorites <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-90 lg:aspect-none h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
