import React from "react";
import mobileImg from "../../assets/mobile.png";
import searchIcon from "../../assets/searchicon.svg";
import date from '../../assets/date.svg';
import done from '../../assets/done.svg';
import './ServicesWork.css';

const steps = [
  {
    icon: searchIcon,
    title: "Find a Doctor",
    description:
      "Explore verified professionals across various specialties to find the one that fits your needs.",
  },
  {
    icon: done,
    title: "Check Doctor Profile",
    description:
      "Check experience, patient reviews, consultation modes, and availability in one place.",
  },
  {
    icon: date,
    title: "Book Appointment",
    description:
      "Choose your preferred time and consultation method—clinic visit or virtual—and confirm.",
  },
  
];

const ServicesWork = () => {
  return (
    <section className="w-full py-12">
      <h1 className="!text-center  font-bold   ">
       How  it works
      </h1>

      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:gap-12">
        <div className=" Mobile flex justify-center md:justify-start">
          <img
            src={mobileImg}
            alt="Mobile Booking"
            className="h-[450px] w-[400px] object-contain
                       max-[425px]:h-[150px] max-[425px]:w-[120px]"
          />
        </div>

        <div className="Text flex flex-col gap-8 mt-8 md:mt-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className=" circle flex-shrink-0  flex items-center justify-cente rounded-full">
                <img src={step.icon} alt={step.title}  />
              </div>
              <div className="step-box">
                <h3 className=" step-title text-lg font-semibold text-![#252525]">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWork;
