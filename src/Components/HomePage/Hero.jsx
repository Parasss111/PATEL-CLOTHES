// Hero.jsx
import React, { useState, useEffect } from "react";
import heroDesktop from "../../assets/hero.jpg";
import heroMobile from "../../assets/heroz.jpg"
import { useNavigate } from "react-router-dom";

const Hero = () => {
   const navigate = useNavigate();
   const[Bg, setBg] = useState(heroMobile);

   useEffect(() => {
    const handle = () => {
      if (window.innerWidth < 640) {
        setBg(heroMobile);
      } else {
        setBg(heroDesktop);
      }
    };

    handle();
    window.addEventListener("resize", handle);

    return () => window.removeEventListener("resize", handle);
  }, []);

  return (
    <section
      className="relative text-white overflow-hidden h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text Content - aligned to left */}
      <div className="max-w-[90%]  mx-auto  w-full flex flex-col items-start space-y-6 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-semibold leading-snug drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
          “Not Just Fashion, <br /> It’s Your Identity.”
        </h1>

        <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-md drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
          Clothing crafted to match your lifestyle and personality.
        </p>

        <div className="flex space-x-4">
          <button className="border border-white px-6 py-2 rounded-full cursor-pointer hover:text-black hover:bg-white" onClick={() => navigate("/products")}>
            Shop Now
          </button>
          <button className="border border-white px-6 py-2 rounded-full cursor-pointer hover:text-black hover:bg-white" onClick={() => navigate("/products")}>
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
