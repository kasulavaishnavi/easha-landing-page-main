import React, { useRef, useState, useEffect, useCallback } from "react";
import Doctor from "../../../../assets/meet-doctor.png";
import "./Doctors.css";

const doctors = [
  {
    name: "Dr Chinchcu Chan",
    specialty: "Gynecologist",
    image: Doctor,
  },
];

export default function MeetOurDoctors() {
  const scrollRef = useRef(null);
  const [translate, setTranslate] = useState(0);
  const [greenLineWidth, setGreenLineWidth] = useState(574);
  const rightGap = 32;
  
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setGreenLineWidth(200);
      } else if (window.innerWidth < 1024) {
        setGreenLineWidth(350);
      } else {
        setGreenLineWidth(574);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  const handleScroll =  useCallback(() => {
    const container = scrollRef.current;
    if (container) {
      const scrollPercentage =
        container.scrollLeft /
        (container.scrollWidth - container.clientWidth);

      const maxTranslate =
        container.clientWidth - greenLineWidth - rightGap;

      setTranslate(scrollPercentage * maxTranslate);
    }
  }, [greenLineWidth, rightGap]);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <section className="py-10 bg-white">
      <div className="w-full">
        <div className=" header-margin px-4 md:px-10 mb-6">
          <h1 className=" heading font-bold text-center mb-3" style={{color:'#013A63'}}>
            Meet Our <span className="text-black">Doctors</span>
          </h1>

          <div className="relative w-full h-[14px]  rounded-full overflow-hidden">
            <div
              className="greenLineHeight  rounded-full absolute left-0"
              style={{
                width: `${greenLineWidth}px`,
                transform: `translateX(${translate}px)`,
                transition: "transform 0.1s linear",
                backgroundColor:'#00A99D'
              }}
            ></div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className=" image-gap flex gap-6  px-4 " >
            {Array(6)
              .fill(doctors[0])
              .map((doc, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 image-container"
                >
                  <div className=" card-image absolute bottom-0.5 left-1.5 lg:bottom-4 lg:left-6 text-white">
                    <span className="name"
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                      }}
                    >
                      {doc.name}
                    </span>
                    <p className="speciality text-[24px]">{doc.specialty}</p>
                  </div>
                </div>
              ))}
                          <div style={{ width: "1px", flexShrink: 0 }}></div>

          </div>

        </div>
      </div>
    </section>
  );
}
