import React from "react";
import choosedoctor from "../../../../assets/ChooseDoctor.png";
import Check from "../../../../assets/Check_fill.svg";

function ChooseDoctor() {
  return (
    <>
      <div className="container mx-auto !my-0 lg:!my-10 px-4 sm:px-5 md:!px-3 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-start !items-center gap-10 justify-center md:gap-5 lg:gap-10">
          <div className="flex-shrink-0">
            <img
              src={choosedoctor}
              alt="Choose Doctor"
              className="choose-img w-[380px] h-[350px] sm:w-[450px] sm:h-[480px] md:w-[400px] md:h-[450px] lg:w-[588px] lg:h-[548px]"
            />
          </div>

          <div className="max-w-[469px] !text-start">
            <h1 className="mb-4 font-bold lg:!text-3xl xl:!text-[41px] !text-[17px] !font-bold sm:!text-2xl md:!text-2xl">
              Why Choose our Doctors
            </h1>
            <p className="mb-4 font-normal sm:text-lg text-[12px]">
              Our team of doctors is committed to delivering trusted, accessible,
              and high-quality care — designed around your needs.
            </p>

            <ul className="list-none font-medium space-y-3 md:space-y-4 !pl-0">
              {[
                "Verified and qualified professionals",
                "Patient-first approach",
                "Available online and offline",
                "Support for all major health concerns",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex !items-center md:!items-start lg:!items-start gap-1 text-[12px] sm:text-xl"
                >
                  <img src={Check} alt="check" height={24} width={24} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 480px) {
          .choose-img {
            width: 300px !important;
            height: auto !important;
          }
        }
      `}</style>
    </>
  );
}

export default ChooseDoctor;
