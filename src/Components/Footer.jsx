import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3a3a3a] text-gray-300 py-10 px-8 sm:px-16 lg:px-24">
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">

        {/* ---------- Logo + Socials ---------- */}
        <div className="col-span-2 sm:col-span-1">
          <h2 className="text-3xl font-bold text-white tracking-wide">Patel</h2>
          <p className="text-gray-400 text-sm mt-1 mb-6">Clothes</p>

          <div className="flex space-x-3 md:mt-28">
            <Link to="#" className="bg-black p-2 rounded-md hover:opacity-75 transition">
              <FaYoutube className="w-4 h-4 text-white" />
            </Link>
            <Link to="#" className="bg-black p-2 rounded-md hover:opacity-75 transition">
              <FaFacebookF className="w-4 h-4 text-white" />
            </Link>
            <Link to="#" className="bg-black p-2 rounded-md hover:opacity-75 transition">
              <FaXTwitter className="w-4 h-4 text-white" />
            </Link>
            <Link to="#" className="bg-black p-2 rounded-md hover:opacity-75 transition">
              <FaInstagram className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>

        {/* ---------- Menu ---------- */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-white transition">About us</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* ---------- More ---------- */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">More</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Landing page</Link></li>
            <li><Link to="/faq" className="hover:text-white transition">FAQs</Link></li>
          </ul>
        </div>

        {/* ---------- Categories ---------- */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/men" className="hover:text-white transition">Men</Link></li>
            <li><Link to="/kids" className="hover:text-white transition">Kids</Link></li>
            <li><Link to="/women" className="hover:text-white transition">Women</Link></li>
            <li><Link to="/favorite" className="hover:text-white transition">Favorite</Link></li>
            <li><Link to="/cart" className="hover:text-white transition">Cart</Link></li>
            <li><Link to="/payment" className="hover:text-white transition">Payment</Link></li>
          </ul>
        </div>

        {/* ---------- About us ---------- */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">About us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/company" className="hover:text-white transition">Company</Link></li>
            <li><Link to="/community" className="hover:text-white transition">Community</Link></li>
            <li><Link to="/career" className="hover:text-white transition">Career</Link></li>
          </ul>
        </div>
      </div>

      {/* ---------- Bottom Line ---------- */}
      <div className="border-t border-gray-600 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Patel Clothes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
