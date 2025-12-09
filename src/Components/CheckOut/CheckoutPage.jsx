import React from "react";
import { useCart } from "../Cart/CartContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryCharge = subtotal >= 500 ? 0 : 0;

  // Yup validation
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    house: Yup.string().required("House No / Building is required"),
    area: Yup.string().required("Area / Colony is required"),
    city: Yup.string().required("City is required"),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
      .required("Pincode is required"),
  });

  const initialValues = {
    fullName: "",
    phone: "",
    house: "",
    area: "",
    city: "",
    pincode: "",
    paymentMethod: "cod",
  };

  // Scroll to first error
  const scrollToError = (errors) => {
    const firstError = Object.keys(errors)[0];
    const element = document.querySelector(`[name="${firstError}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.focus();
    }
  };

  const handleSubmit = (values) => {
    clearCart();
    toast.success("Order Placed Successfully!");

    setTimeout(() => {
      navigate("/order-success");
    }, 1200);
  };

  return (
    <section className="px-6 md:px-20 mt-32 mb-20">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-10">Checkout</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount={false}
        onSubmit={(values, { validateForm, setSubmitting }) => {
          validateForm().then((errors) => {
            if (Object.keys(errors).length > 0) {
              scrollToError(errors);
              setSubmitting(false);
              return;
            }
            handleSubmit(values);
          });
        }}
      >
        {({ values, setFieldValue, touched, errors }) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* LEFT SIDE - ADDRESS */}
              <div className="md:col-span-2 space-y-10">

                {/* ADDRESS FORM */}
                <div className="p-6 border rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* FULL NAME */}
                    <Field name="fullName">
                      {({ field, form }) => (
                        <div>
                          <input
                            {...field}
                            placeholder="Full Name"
                            className={`border p-2 rounded-md w-full ${
                              form.touched.fullName && form.errors.fullName
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          <ErrorMessage name="fullName" component="p" className="text-red-500 text-sm" />
                        </div>
                      )}
                    </Field>

                    {/* PHONE */}
                    <Field name="phone">
                      {({ field, form }) => (
                        <div>
                          <input
                            {...field}
                            placeholder="Phone Number"
                            className={`border p-2 rounded-md w-full ${
                              form.touched.phone && form.errors.phone
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
                        </div>
                      )}
                    </Field>

                    {/* HOUSE */}
                    <Field name="house">
                      {({ field, form }) => (
                        <div>
                          <input
                            {...field}
                            placeholder="House No / Building"
                            className={`border p-2 rounded-md w-full ${
                              form.touched.house && form.errors.house
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          <ErrorMessage name="house" component="p" className="text-red-500 text-sm" />
                        </div>
                      )}
                    </Field>

                    {/* AREA */}
                    <Field name="area">
                      {({ field, form }) => (
                        <div>
                          <input
                            {...field}
                            placeholder="Area / Colony"
                            className={`border p-2 rounded-md w-full ${
                              form.touched.area && form.errors.area
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          <ErrorMessage name="area" component="p" className="text-red-500 text-sm" />
                        </div>
                      )}
                    </Field>

                    {/* CITY */}
                    <Field name="city">
                      {({ field, form }) => (
                        <div>
                          <input
                            {...field}
                            placeholder="City"
                            className={`border p-2 rounded-md w-full ${
                              form.touched.city && form.errors.city
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          <ErrorMessage name="city" component="p" className="text-red-500 text-sm" />
                        </div>
                      )}
                    </Field>

                    {/* PINCODE */}
                    <Field name="pincode">
                      {({ field, form }) => (
                        <div>
                          <input
                            {...field}
                            placeholder="Pincode"
                            className={`border p-2 rounded-md w-full ${
                              form.touched.pincode && form.errors.pincode
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          <ErrorMessage name="pincode" component="p" className="text-red-500 text-sm" />
                        </div>
                      )}
                    </Field>

                  </div>
                </div>

                {/* PAYMENT OPTIONS */}
                <div className="p-6 border rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Payment Method</h2>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={values.paymentMethod === "cod"}
                        onChange={() => setFieldValue("paymentMethod", "cod")}
                      />
                      Cash on Delivery (COD)
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={values.paymentMethod === "upi"}
                        onChange={() => setFieldValue("paymentMethod", "upi")}
                      />
                      UPI (Google Pay / PhonePe)
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={values.paymentMethod === "card"}
                        onChange={() => setFieldValue("paymentMethod", "card")}
                      />
                      Debit / Credit Card
                    </label>
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE — SUMMARY */}
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
                  type="submit"
                  className="mt-6 w-full bg-black text-white py-3 rounded-xl font-bold"
                >
                  Place Order
                </button>
              </div>

            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default CheckoutPage;
