import React from "react";
import mobileImg from "../../../../assets/mobile.png";
import searchIcon from "../../../../assets/search.svg";
import slotIcon from "../../../../assets/slot.svg";
import bookIcon from "../../../../assets/book.svg";
import consultIcon from "../../../../assets/callwork.svg";
import './work.css';

const steps = [
  {
    icon: searchIcon,
    title: "Search Doctor",
    description:
      "Find the right specialist by name, specialty, or condition based on your health needs.",
  },
  {
    icon: slotIcon,
    title: "Select slot",
    description:
      "Choose a convenient date and time from the doctor's available schedule.",
  },
  {
    icon: bookIcon,
    title: "Book Appointments",
    description:
      "Confirm your appointment instantly with just a few taps.",
  },
  {
    icon: consultIcon,
    title: "Visit/ Online Consult",
    description:
      "Attend your appointment in person or connect online from the comfort of your home.",
  },
];

const Works = () => {
  return (
    <section className="w-full lg:py-12 px-4 mt-10">
      <h1 className="text-center font-bold text-3xl mb-8">
        <span className="text-[#013A63]">How </span> it works
      </h1>

      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:gap-12">
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={mobileImg}
            alt="Mobile Booking"
            className="h-[450px] w-[400px] object-contain max-[425px]:h-[150px] max-[425px]:w-[120px]"
          />
        </div>

        <div className="flex flex-col gap-8 md:flex-1">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 p-3">
                <img src={step.icon} alt={step.title} className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#013A63] break-words">
                  {step.title}
                </h3>
                <p className="text-gray-700 break-words">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
