import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600">🎉 Order Placed Successfully!</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Thank you for shopping with us. Your order is on the way!
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default OrderSuccess;
