import React, { useState, useRef, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, X, Menu, LogOut, LogOutIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // 👈 import animation library
import { useCart } from "./Cart/CartContext";
import { useWishlist } from "./Wishlist/WishlistContext";
import { Heart } from "lucide-react";
import "../App.css";
import { toast } from "react-toastify";
import AuthModal from "./AuthPage/AuthModal";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);


  const isCurrent = (path) => currentPath === path;

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    setIsAuthOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) { searchInputRef.current.focus() };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const searchTerm = searchInputRef.current.value.trim();
    if (!searchTerm) return;

    console.log("Searching for:", searchInputRef.current.value);
    navigate(`/search?query=${searchTerm}`);
    setIsSearchOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent py-2 z-50 font-[Nunito]">
      <div className="max-w-[ 100%] mx-auto px-2 max-md:px-1 lg:px-6">
        <div className="navbar-container bg-white rounded-full shadow-lg p-1 sm:p-1.5 flex items-center justify-between relative overflow-hidden">
          {/* Logo */}
          <div className="navbar-logo flex items-center space-x-1">
            <Link to="/" className="flex flex-col items-start leading-none p-1">
              <span className="max-md:text-[30px] text-lg font-serif font-semibold tracking-wider text-black">
                PATEL
              </span>
              <span className="text-[8px] sm:text-[10px] font-semibold text-gray-600 uppercase -mt-1">
                CLOTHES
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          {/* Desktop Links */}
          <div className="navbar-links hidden md:flex grow justify-center">
            <div className="flex space-x-4 font-[Nunito] sm:space-x-6 text-sm sm:text-base">
              <Link
                to="/"
                className={`text-black hover:text-gray-700 pb-0.5 ${isCurrent("/") ? "border-b-2 border-black font-bold" : ""
                  }`}
              >
                Home
              </Link>

              <Link
                to="/about-us"
                className={`text-black hover:text-gray-700 pb-0.5 ${isCurrent("/about-us") ? "border-b-2 border-black font-bold" : ""
                  }`}
              >
                About Us
              </Link>

              <Link
                to="/products"
                className={`text-black hover:text-gray-700 pb-0.5 ${isCurrent("/products") || isCurrent("/productsPage") ? "border-b-2 border-black font-bold" : ""
                  }`}
              >
                Products
              </Link>

              <Link
                to="/contact"
                className={`text-black hover:text-gray-700 pb-0.5 ${isCurrent("/contact") ? "border-b-2 border-black font-bold" : ""
                  }`}
              >
                Contact
              </Link>
            </div>
          </div>


          {/* Icons + Search */}
          <div
            className="navbar-icons flex items-center space-x-2 sm:space-x-3 relative"
            ref={searchContainerRef}
          >
            <form
              onSubmit={handleSearchSubmit}
              className={`flex items-center bg-gray-100 rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isSearchOpen ? "w-50 max-md:ms-3 max-md:h-8 sm:w-64 px-2" : "w-0 px-0"}
              `}
            >
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className={`bg-transparent text-sm sm:text-base text-black flex grow px-2 py-1 outline-none transition-opacity duration-300 
                  ${isSearchOpen ? "opacity-100" : "opacity-0"}
                `}
              />
            </form>

            <button
              onClick={toggleSearch}
              className="p-1 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              {isSearchOpen ? (
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              ) : (
                <Search className="w-4 h-4 max-md:w-4 max-md:h-4" />
              )}
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="relative p-1 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />

              {/* COUNT BADGE */}
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={() => navigate("/wishlist")}
              className="hidden md:flex relative p-1 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >

              <Heart className="w-4 h-4" />

              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* User icon login/logout */}
            {token ? (
              <button
                onClick={handleLogout}
                className="hidden md:flex p-1 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <LogOutIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="hidden md:flex p-1 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}



            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 transition md:hidden"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* ✅ Animated Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-white rounded-3xl shadow-lg mt-2 py-4 px-6 overflow-hidden"
            >
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${isCurrent("/") ? "font-bold text-black" : "text-gray-800"
                  }`}
              >
                Home
              </Link>

              <Link
                to="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${isCurrent("/about-us") ? "font-bold text-black" : "text-gray-800"
                  }`}
              >
                About Us
              </Link>

              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${isCurrent("/products") ? "font-bold text-black" : "text-gray-800"
                  }`}
              >
                Products
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${isCurrent("/contact") ? "font-bold text-black" : "text-gray-800"
                  }`}
              >
                Contact
              </Link>
              <div className="mt-4 border-t pt-4 flex flex-col gap-2">

                <Link
                  to="/wishlist"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-gray-800"
                >
                  ❤️ Wishlist
                </Link>

                <Link
                  to="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-gray-800"
                >
                  🛒 Cart ({cart.length})
                </Link>

                {token ? (
                  <Link
                    to="/"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="block py-2 text-sm font-medium text-gray-800"
                  >
                    🔓 Logout
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      setIsAuthOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="text-left block py-2 text-sm font-medium text-gray-800"
                  >
                    🔐 Login
                  </button>
                )}

              </div>


            </motion.div>
          )}
        </AnimatePresence>
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      </div>
    </nav>
  );
};

export default Navbar;
