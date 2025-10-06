import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full">

      <div className="w-full h-[160px] bg-[#1F4053] flex justify-center items-center hidden lg:flex">
        <h2 className="text-white text-3xl md:text-4xl lg:text-[41px] font-bold font-urbanist">
          About Us
        </h2>
      </div>

      <div className="w-full text-left px-6 sm:px-12 md:px-20 lg:px-[186px] py-10">
        <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-center font-bold font-urbanist mb-4 mt-4 lg:mt-0 !mt-10 lg:!mt-0">
  About eAsha 24×7 Healthcare Pvt Ltd
</h3>

        <p className="text-sm sm:text-base text-gray-700 font-urbanist leading-relaxed">
          We're a digital-first OP care platform offering seamless doctor appointments,
          teleconsultations, and doorstep medicine delivery. With AI diagnostics,
          Aadhaar OTP, and DigiLocker integration, we connect patients, pharmacies,
          and emergency services—all in one place.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
