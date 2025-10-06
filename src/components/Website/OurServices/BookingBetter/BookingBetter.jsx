import React from "react";

const BookingBetter = () => {
  return (
    <div className="bg-[#077E8C1A] h-303px w-full py-10 px-8  md:px-20 lg:px-40 font-urbanist">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
 
        <div className="md:w-1/2 text-center md:text-right pr-0 md:pr-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-snug">
            What Makes Our <br /> Booking Better
          </h2>
        </div>

        <div className="hidden md:block w-px h-28 bg-gray-300"></div>

        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
            We offer a seamless booking experience with real-time availability, 
            instant confirmations, and flexible options for both online and 
            in-clinic appointments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingBetter;
