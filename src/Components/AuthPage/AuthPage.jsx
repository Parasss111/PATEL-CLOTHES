import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validation Schema
  const Schema = Yup.object({
    name: !isLogin
      ? Yup.string().required("Name is required")
      : Yup.string().notRequired(),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  // Formik Setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Schema,

    onSubmit: (values) => {
      setLoading(true);

      setTimeout(() => {
        if (isLogin) {
          // Login logic
          const savedUser = JSON.parse(localStorage.getItem("user"));
          if (
            savedUser &&
            savedUser.email === values.email &&
            savedUser.password === values.password
          ) {
            localStorage.setItem("token", "USER_LOGIN_TOKEN");
            toast.success("Login Successful!");
          } else {
            toast.error("Invalid Email or Password");
          }
        } else {
          // Signup logic
          localStorage.setItem("user", JSON.stringify(values));
          toast.success("Signup Successful!");
        }

        setLoading(false);
      }, 1500);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <ToastContainer />

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Name for Signup */}
          {!isLogin && (
            <div className="mb-4">
              <label className="font-semibold">Name</label>
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

          {/* Email */}
          <div className="mb-4">
            <label className="font-semibold">Email</label>
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

          {/* Password + Eye Toggle */}
          <div className="mb-4">
            <label className="font-semibold">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full border p-2 rounded mt-1"
                {...formik.getFieldProps("password")}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-700"
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>

            {formik.touched.password && formik.errors.password && (
              <p className="text-red-600 text-sm">{formik.errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold mt-4 flex justify-center"
          >
            {loading
              ? isLogin
                ? "⏳ Logging in..."
                : "⏳ Creating Account..."
              : isLogin
              ? "Login"
              : "Signup"}
          </button>
        </form>

        {/* Toggle Login / Signup */}
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 cursor-pointer font-semibold ml-1"
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
