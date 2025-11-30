import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { X, EyeOff, Eye  } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthModal({ isOpen, onClose }) {
  // ✅ All hooks MUST be at the top (never after a condition)
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const Schema = Yup.object({
    name: !isLogin ? Yup.string().required("Name is required") : Yup.string(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Min 6 chars").required("Password required"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: Schema,
    onSubmit: (values) => {
      setLoading(true);

      setTimeout(() => {
        if (isLogin) {
          const savedUser = JSON.parse(localStorage.getItem("user"));
          if (
            savedUser &&
            savedUser.email === values.email &&
            savedUser.password === values.password
          ) {
            localStorage.setItem("token", "AUTH_TOKEN");
            toast.success("Login Successful!");
            onClose();
          } else {
            toast.error("Invalid email or password");
          }
        } else {
          localStorage.setItem("user", JSON.stringify(values));
          toast.success("Signup Successful!");
          setIsLogin(true);
        }

        setLoading(false);
      }, 1200);
    },
  });

  // ❗ DO NOT return null before hooks. Instead hide using CSS.
  return (
    <>
      <ToastContainer />

      {/* Backdrop */}
      <motion.div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[ 999] transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
      />

      {/* Modal container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: isOpen ? 1 : 0.8,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35 }}
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-6 z-[ 1000]
          transition-all ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        <button className="absolute top-3 right-3 text-gray-600" onClick={onClose}>
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {/* FORM */}
        <form onSubmit={formik.handleSubmit}>
          {/* NAME (signup only) */}
          {!isLogin && (
            <div className="mb-3">
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border p-2 rounded mt-1"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-600 text-sm">{formik.errors.name}</p>
              )}
            </div>
          )}

          {/* EMAIL */}
          <div className="mb-3">
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border p-2 rounded mt-1"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-600 text-sm">{formik.errors.email}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label className="font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full border p-2 rounded mt-1"
                {...formik.getFieldProps("password")}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye />:<EyeOff /> }
              </span>
            </div>

            {formik.touched.password && formik.errors.password && (
              <p className="text-red-600 text-sm">{formik.errors.password}</p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-2 mt-2"
          >
            {loading ? "⏳ Please wait..." : isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {/* TOGGLE */}
        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className="text-blue-600 ml-1 cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </motion.div>
    </>
  );
}
