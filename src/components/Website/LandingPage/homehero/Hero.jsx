import React from "react";
import Hero from "../../../../assets/hero.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-x-hidden">
      <img
        src={Hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover transform -scale-x-100"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"
        style={{ zIndex: 1 }}
      />
      <div
        className="relative flex items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[686px] w-full px-4 overflow-x-hidden"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-md text-left">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: "#013A63" }}
          >
            Expert care for Every Stage of life
          </h1>
          <p
            className="mt-2 mb-4 text-lg sm:text-xl lg:text-[31px]"
            style={{ color: "#013A63" }}
          >
            Your Health, Our Priority Always.
          </p>

            <Link to="/customerSupport" style={{ textDecoration: 'none' }}>
          <button
  className="
    px-3 py-2 text-sm     /* Mobile size */
    px-5 py-3 sm:text-base   /* Desktop size, remains same */
    font-medium text-white rounded-[28px] hover:bg-teal-600 transition max-w-full border-0
  "
  style={{ backgroundColor: "#00A99D", borderRadius: "28px" }}
>
  Consult Now
</button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
