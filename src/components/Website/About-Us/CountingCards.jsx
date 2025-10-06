import React from "react";

const stats = [
  {
    value: "10,000+",
    label: "Appointments booked",
  },
  {
    value: "500+",
    label: "Verified doctors onboard",
  },
  {
    value: "40+",
    label: "Cities Served",
  },
];

const StatsSection = () => {
  return (
    <div className="w-full py-8 px-6 sm:px-12 md:px-20 lg:px-32 font-urbanist">
      <div
        className="
          grid grid-cols-1 
          sm:grid-cols-2 
          xl:grid-cols-3 
          gap-4
        "
        style={{ justifyItems: "center" }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 
              flex flex-col items-center justify-center text-center
              w-[220px] h-[120px] sm:w-[240px] sm:h-[130px] md:w-[260px] md:h-[140px] lg:w-[280px] lg:h-[150px]
            "
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              {stat.value}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-teal-600 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
