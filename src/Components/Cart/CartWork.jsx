import React from "react";
import { useCart } from "./CartContext";
import { Navigate, useNavigate } from "react-router-dom";

const CartWork = () => {
  const { cart, updateQty, removeItem } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const navigate = useNavigate();
  return (
    <section className="w-full px-6 md:px-20 mt-30 mb-45">
      <h2 className="text-3xl font-bold mb-5">Your Cart</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SIDE - PRODUCTS */}
        <div className="md:col-span-2 space-y-10">

          {cart.length === 0 && (
            <p className="text-gray-600">Your cart is empty.</p>
          )}

          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="border-b pb-5">

              <div className="flex gap-5">

                {/* IMAGE */}
                <img
                  src={item.image}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                {/* INFO */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">Delivery by 4–5 days</p>
                  <p className="mt-1">SIZE — <b>{item.size}</b></p>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  className="text-red-500 hover:text-red-900"
                >
                  REMOVE
                </button>
              </div>

              {/* QUANTITY + PRICE ROW */}
              <div className="flex justify-between items-center mt-3">

                {/* QUANTITY */}
                <div className="flex items-center gap-2 border rounded-full px-3 py-1">
                  <button
                    onClick={() =>
                      updateQty(item.id, item.size, Math.max(1, item.qty - 1))
                    }
                    className="text-xl"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.qty}</span>
                  <button
                    onClick={() =>
                      updateQty(item.id, item.size, item.qty + 1)
                    }
                    className="text-xl"
                  >
                    +
                  </button>
                </div>

                {/* PRICE */}
                <p className="text-lg font-semibold">₹{item.price}</p>

                {/* SUBTOTAL */}
                <p className="text-lg font-semibold">
                  ₹{item.price * item.qty}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE — BILL SUMMARY */}
        {/* RIGHT SIDE — BILL SUMMARY */}
        {cart.length > 0 && (
          <div className="md:border-l md:pl-10 px-10">
            <h2 className="text-2xl font-bold mb-4">Bill Summary</h2>

            <div className="space-y-3 text-lg">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <b>₹{subtotal}</b>
              </div>

              <div className="flex justify-between">
                <span>Free home Delivery</span>
                <b>₹0</b>
              </div>

              <div className="flex justify-between">
                <span>Total Payment</span>
                <b>₹{subtotal}</b>
              </div>

              <div className="flex justify-between">
                <span>To Pay</span>
                <b>₹{subtotal}</b>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 w-full bg-black text-white py-3 rounded-xl font-bold"
            >
              Proceed to Checkout
            </button>
          </div>
        )}


      </div>
    </section>
  );
};

export default CartWork;
