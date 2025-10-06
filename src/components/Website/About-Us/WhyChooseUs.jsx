import React from "react";
import specialistDoctors from "../../../assets/specialist-doctors.png";

const WhyChooseUs = () => (
  <section className="container py-0 mobile-bottom-space">
    <style>
      {`
        @media (max-width: 374.98px) {
          .mobile-bottom-space {
            margin-bottom: 180px;
          }
        }
           @media (min-width: 374px) and (max-width: 424.98px) {
          .mobile-bottom-space {
          margin-top: 80px;
            margin-bottom: 180px;
          }
        }
           @media (min-width: 425px) and (max-width: 767.98px) {
          .mobile-bottom-space {
          margin-top: 140px;
            margin-bottom: 180px;
          }
        }
         @media (min-width: 768px) and (max-width: 1023.98px)  {
          .mobile-bottom-space {
            margin-top: -150px;
          }
        }
          @media (min-width: 1024px) and (max-width: 1439.98px) {
          .mobile-bottom-space {
            margin-top: -310px;
          }
        }
          @media (min-width: 1440px) and (max-width: 2559.98px) {
          .mobile-bottom-space {
            margin-top: 0px;
          }
        }
      `}
    </style>

    <div className="row align-items-center">
      <div className="col-12 col-md-6 order-md-2 text-center mb-3 mb-md-0">
        <img
          src={specialistDoctors}
          alt="Specialist Doctors"
          className="img-fluid rounded shadow-lg"
        />
      </div>

      <div className="col-12 col-md-6 order-md-1 text-center text-md-start">
        <h2 className="h2 fw-bold mb-4 text-dark">Why Choose Us?</h2>
        <ul className="list-unstyled">
          <li className="d-flex align-items-start mb-3">
            <span
              className="me-3 mt-1 rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#14b8a6",
                flexShrink: 0,
              }}
            ></span>
            <span className="text-secondary fs-5">Free patient registration.</span>
          </li>
          <li className="d-flex align-items-start mb-3">
            <span
              className="me-3 mt-1 rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#14b8a6",
                flexShrink: 0,
              }}
            ></span>
            <span className="text-secondary fs-5">Simple, user-friendly platform.</span>
          </li>
          <li className="d-flex align-items-start mb-3">
            <span
              className="me-3 mt-1 rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#14b8a6",
                flexShrink: 0,
              }}
            ></span>
            <span className="text-secondary fs-5">Wide doctor/hospital network.</span>
          </li>
          <li className="d-flex align-items-start mb-3">
            <span
              className="me-3 mt-1 rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#14b8a6",
                flexShrink: 0,
              }}
            ></span>
            <span className="text-secondary fs-5">
              Affordable, with no gateway fees.
            </span>
          </li>
        </ul>
      </div>
    </div>
    <style>
  {`
    @media (max-width: 374.98px) {
      .mobile-bottom-space {
        margin-bottom: 180px;
      }
    }
    @media (min-width: 374px) and (max-width: 424.98px) {
      .mobile-bottom-space {
        margin-top: 80px;
        margin-bottom: 180px;
      }
    }
    @media (min-width: 425px) and (max-width: 767.98px) {
      .mobile-bottom-space {
        margin-top: 140px;
        margin-bottom: 180px;
      }
    }
    /* Tablets: set margin-top to 40px */
    @media (min-width: 768px) and (max-width: 1023.98px) {
      .mobile-bottom-space {
        margin-top: 40px;
      }
    }
    @media (min-width: 1024px) and (max-width: 1439.98px) {
      .mobile-bottom-space {
        margin-top: 0px;
      }
    }
    @media (min-width: 1440px) and (max-width: 2559.98px) {
      .mobile-bottom-space {
        margin-top: 0px;
      }
    }
  `}
</style>

  </section>
  
);

export default WhyChooseUs;
