import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryCharge = subtotal >= 500 ? 0 : 40;

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    house: "",
    area: "",
    city: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleOrder = () => {
    if (
      !address.fullName ||
      !address.phone ||
      !address.house ||
      !address.area ||
      !address.city ||
      !address.pincode
    ) {
      toast.error("Please fill all address details");
      return;
    }

    clearCart();
    toast.success("Order Placed Successfully!");
    

   setTimeout(() => {
    navigate("/order-success");
  }, 1200);
  };

  return (
    <section className="px-6 md:px-20 mt-32 mb-20">
      <h1 className="text-3xl font-bold mb-10">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SIDE — ADDRESS */}
        <div className="md:col-span-2 space-y-10">

          {/* ADDRESS FORM */}
          <div className="p-6 border rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="border p-2 rounded-md"
                placeholder="Full Name"
                value={address.fullName}
                onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
              />

              <input
                className="border p-2 rounded-md"
                placeholder="Phone Number"
                value={address.phone}
                onChange={(e) => setAddress({ ...address, phone: e.target.value })}
              />

              <input
                className="border p-2 rounded-md"
                placeholder="House No / Building"
                value={address.house}
                onChange={(e) => setAddress({ ...address, house: e.target.value })}
              />

              <input
                className="border p-2 rounded-md"
                placeholder="Area / Colony"
                value={address.area}
                onChange={(e) => setAddress({ ...address, area: e.target.value })}
              />

              <input
                className="border p-2 rounded-md"
                placeholder="City"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />

              <input
                className="border p-2 rounded-md"
                placeholder="Pincode"
                value={address.pincode}
                onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
              />
            </div>
          </div>

          {/* PAYMENT OPTIONS */}
          <div className="p-6 border rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>

            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery (COD)
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                />
                UPI (Google Pay / PhonePe)
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Debit / Credit Card
              </label>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="border p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 text-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <b>₹{subtotal}</b>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <b>{deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}</b>
            </div>

            <div className="flex justify-between border-t pt-3">
              <span>Total Amount</span>
              <b>₹{subtotal + deliveryCharge}</b>
            </div>
          </div>

          <button
            onClick={handleOrder}
            className="mt-6 w-full bg-black text-white py-3 rounded-xl font-bold"
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
