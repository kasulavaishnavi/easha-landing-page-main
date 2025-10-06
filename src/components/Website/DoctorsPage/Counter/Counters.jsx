import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";

function CountersCardSection() {
  const counterData = [
    { value: 100,suffix:'+', label: "Specialised Support" },
    { value: 856,suffix:'+', label: "Happy Patients" },
    { value: 200,suffix:'+', label: "Qualified Doctors" },
  ];

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-nowrap g-1">
          {counterData.map((item, index) => (
        <div key={index} className="card text-center border-0 h-100 mx-2" >
              <div className="card text-center border-0 h-100 " >
                <div className="card-body py-3 px-2">
                  <h1
                    className="mb-1 fw-bold"
                    style={{
                      fontSize: "lg:!text-[41px] md:!text-2xl !text-[14px]",
                    }}
                  >
                    <CountUp start={0} 
                    end={item.value}
                    duration={2}
                    suffix={item.suffix}/>
                  </h1>
                  <p
                      className="mb-0 text-muted md:!text-[16px] !text-[12px] lg:!text-[18px]"

                  >
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountersCardSection;
