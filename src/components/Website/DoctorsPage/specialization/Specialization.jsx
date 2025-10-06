import React from "react";
import Gynacalogy from "../../../../assets/Gynacalogy.png";
import GeneralPhysician from "../../../../assets/GeneralPhysician.png";
import Dermatologist from "../../../../assets/Dermatologist.png";
import Pediatrician from "../../../../assets/Pediatrician.png";

const specializations = [
  {
    title: "Gynacology",
    desc: "Support for women’s reproductive health, from routine care to specific treatments.",
    img: Gynacalogy,
  },
  {
    title: "General Physician",
    desc: "Your go-to doctor for everyday health concerns, checkups, and basic treatments.",
    img: GeneralPhysician,
  },
  {
    title: "Dermatologist",
    desc: "Expert care for skin, hair, and nail conditions, both cosmetic and clinical.",
    img: Dermatologist,
  },
  {
    title: "Pediatrician",
    desc: "Compassionate care for children’s health—from newborns to teens.",
    img: Pediatrician,
  },
];

const Specializations = () => {
  return (
    <div className="py-4">
      <div className="w-full  px-4">
<h2 className="block w-full text-start md:!text-center !font-semibold mb-4 sm:!text-[20px] md:!text-[25px] lg:!text-[31px] !text-[16px]">
  Specializations Covered
</h2>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {specializations.map((item, index) => (
    <div
  key={index}
  className="bg-white rounded-3xl p-3 border border-[#EEEEEE] 
             flex flex-col w-full h-[355px]"
>

      <img
        src={item.img}
        alt={item.title}
        className="rounded-lg w-full h-[190px] object-cover"
      />

      <div className="mt-4  flex flex-col flex-grow">
        <h5 className="font-semibold sm:!text-[16px] md:!text-[20px] lg:!text-[24px] !text-[14px]">
          {item.title}
        </h5>
        <p className="sm:!text-[14px] md:!text-[16px] lg:!text-[18px] !text-[13px] mt-1  flex-grow">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
  );
};

export default Specializations;
