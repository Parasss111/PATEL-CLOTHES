import React from 'react'
import ProductPage from './Components/HomePage/ProductPage'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/HomePage/Home';
import About from './Components/AboutUS/About';
import Footer from './Components/Footer';
import Products from './Components/Products/Product';
import ProductsPage from './Components/Products/ProductsPage';
import CartPage from './Components/Cart/CartWork';
import ScrollToTop from "./Components/ScrollToTop";
import ProductDetails from './Components/Products/ProductDetails';
import SearchPage from './Components/SearchPage';
import { CartProvider } from './Components/Cart/CartContext';
import { WishlistProvider } from './Components/Wishlist/WishlistContext';
import WishlistPage from './Components/Wishlist/WisglistPage';
import CheckoutPage from './Components/CheckOut/CheckoutPage';
import Contack from './Components/Contact/Contact';
import AuthPage from './Components/AuthPage/AuthPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from './Components/NotFound';
import { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import OrderSuccess from './Components/CheckOut/OrderSuccess';




const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
     {loading ? (
      <Loader />   // show loader until ready
    ) : (
      <CartProvider>
        <WishlistProvider>
          <ScrollToTop />
          <Navbar />

          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contack />} />
              <Route path="/productsPage" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/AuthPage" element={<AuthPage />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="*" element={<NotFound />} />


            </Routes>
          </div>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    )}
      <ToastContainer
        position="top-center"
        autoClose={1300}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 999999 }}
      />
    </>
  )
}

export default App
