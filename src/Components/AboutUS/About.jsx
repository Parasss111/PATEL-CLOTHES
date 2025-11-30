import React, { useEffect } from "react";
import aboutImg1 from "../../assets/about1.jpg";
import aboutImg2 from "../../assets/about2.jpg";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const nav = useNavigate();

  useEffect(()=>{
    nav("#");
  },[])
  return (
    <section className="text-gray-800 w-full mt-40 max-md:mt-25">

      {/* Heading */}
      <div className="text-center max-md:mt-10 mt-20 mb-16 px-4">
        <h1 className="text-4xl font-bold tracking-widest text-[#d3895e]">
          ABOUT US
        </h1>
      </div>

      {/* Brand Story */}
      <div className="max-w-5xl mx-auto px-4 mb-6">
        <h2 className="text-2xl font-bold mb-3">Brand Story</h2>
        <p className="text-gray-600 leading-relaxed">
          At Patel Clothes, we believe true luxury never fades. Each piece is crafted
          with premium fabrics and refined detailing, blending classic elegance with
          modern style. Designed to last beyond seasons, our collections celebrate
          timeless fashion that empowers confidence and creates a statement of
          enduring sophistication.
        </p>
      </div>

      {/* Product Detail */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold mb-3">Product Detail</h2>
        <p className="text-gray-600 leading-relaxed">
          Experience the perfect blend of comfort and sophistication with this premium
          piece from [Your Brand]. Tailored using high-quality fabrics and detailed
          craftsmanship, it ensures both durability and timeless appeal. Ideal for
          casual wear or special occasions, this design elevates your style while
          offering unmatched comfort—luxury made simple, yet unforgettable.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-4 space-y-24">

        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <img
            src={aboutImg1}
            alt="Luxury Collection"
            className="rounded-xl w-94 h-110 shadow-md"
          />

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">01. Luxury Feel</h3>
            <p className="text-gray-600 leading-relaxed">
              At [Your Brand], luxury is not just fashion—it's an experience. Each
              piece is crafted with precision, using premium fabrics and timeless designs.
              Our collection blends sophistication with comfort, creating clothing that
              goes beyond trends and defines elegance for those who appreciate true style
              and exclusivity.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          <div className="order-2 md:order-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">02. Trending Collections</h3>
            <p className="text-gray-600 leading-relaxed">
              Explore our latest trending collections, where modern style meets timeless
              elegance. Each piece is designed with premium fabrics and meticulous
              craftsmanship, perfect for making a statement. Discover fashion that’s
              current, versatile, and effortlessly luxurious—clothing that keeps you ahead
              of trends while reflecting your unique style.
            </p>
          </div>

          <img
            src={aboutImg2}
            alt="Trending Collection"
            className="rounded-xl w-94 h-110 shadow-md order-1 md:order-2"
          />
        </div>
      </div>

      {/* CONTACT US */}
      <div className="text-center mt-20 mb-20">
        <h2 className="text-4xl md:text-4xl font-bold mb-12">CONTACT US</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center max-w-5xl mx-auto px-4">

          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white p-4 rounded-full mb-3">
              <MapPin size={28} className="cursor-pointer" />
            </div>
            <p className="text-sm font-medium cursor-pointer">Mota Varacha, Surat</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white p-4 rounded-full mb-3">
              <Phone size={28} className="cursor-pointer" />
            </div>
            <p className="text-sm font-medium cursor-pointer">99299 99399</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white p-4 rounded-full mb-3">
              <Mail size={28} className="cursor-pointer" />
            </div>
            <p className="text-sm font-medium cursor-pointer">patelclothes@gmail.com</p>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white p-4 rounded-full mb-3">
              <Instagram size={28} className="cursor-pointer" />
            </div>
            <p className="text-sm font-medium cursor-pointer">Patel_clothes_surat</p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
