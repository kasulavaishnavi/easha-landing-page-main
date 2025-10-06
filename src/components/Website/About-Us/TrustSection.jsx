import React from "react";
import DoctorImage from "../../../assets/Doctor1.png";

import { FaCalendarAlt, FaBalanceScale } from "react-icons/fa";
import { FaTruckMedical, FaFingerprint } from "react-icons/fa6";


const features = [
  {
    icon: <FaCalendarAlt className="text-3xl text-teal-600" />,
    text: "Effortless Appointment Booking",
  },
  {
    icon: <FaTruckMedical className="text-3xl text-teal-600" />,
    text: "True 24x7 Care Access",
  },
  {
    icon: <FaBalanceScale className="text-3xl text-teal-600" />,
    text: "Zero-Fee, Fully Transparent",
  },
  {
    icon: <FaFingerprint className="text-3xl text-teal-600" />,
    text: "Single Sign-On For Life",
  },
];

const HealthcareSection = () => {
  return (
    <div className="w-full py-16 px-6 sm:px-12 md:px-20 lg:px-32 font-urbanist">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={DoctorImage}
            alt="Doctors"
            className="rounded-lg  shadow-md w-full max-w-md lg:max-w-lg"
          />
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-600 mb-8">
            Consult Trusted Healthcare, Anytime, Anywhere
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                {feature.icon}
                <p className="mt-3 text-base font-medium text-gray-800">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareSection;
