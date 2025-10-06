import React from "react";
import Assay from "../../../../assets/assay.png";
import Pill from "../../../../assets/pill.svg";
import Health from "../../../../assets/health.png";

const services = [
  {
    icon: Assay,
    title: "Lab Test Bookings",
    description: "Book lab tests at your doorstep or nearest center.",
  },
  {
    icon: Pill,
    title: "Medicine Reminder",
    description: "Set up daily medicine alerts and get notified on time.",
  },
  {
    icon: Health,
    title: "Pharmacy",
    description: "Order and receive your prescriptions at home quickly.",
  },
];

const HealthServices = () => {
  return (
    <div className="w-full py-16 px-6 sm:px-12 md:px-20 lg:px-32 font-urbanist">
      <style>{`
        @media (min-width: 1024px) and (max-width: 1100px) {
          .force-3-cols {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
          .card-width-adjust {
            width: 240px !important; /* reduced width */
            height: 190px !important; /* adjust proportionally */
          }
        }
      `}</style>

      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-12">
        Explore More Health Services
      </h2>

      <div
        className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 force-3-cols
        "
        style={{ marginTop: "9px", justifyItems: "center" }}
      >
        {services.map((service, index) => (
<div
  key={index}
  className={`
    bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 
    flex flex-col items-center text-center
    w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px]
    min-h-[160px] sm:min-h-[190px] md:min-h-[200px] lg:min-h-[213px]
    card-width-adjust
    ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
  `}
>
  <img
    src={service.icon}
    alt={service.title}
    className="object-contain mt-6"
    style={{ width: "40px", height: "55px" }}
  />
  <h4 className="mt-3 text-justify text-sm sm:text-base md:text-lg font-semibold text-gray-900">
    {service.title}
  </h4>
  <p className="mt-1 text-justify text-xs sm:text-sm text-gray-600 leading-relaxed px-4">
    {service.description}
  </p>
</div>

        ))}
      </div>
    </div>
  );
};

export default HealthServices;
