import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MeetDoctor from "../../../assets/MeetDoctor.png";
import "bootstrap/dist/css/bootstrap.min.css";

const MeetWithOurDoctor = () => {
  const doctors = [
    { name: "Dr Chinchcu Chan", specialty: "Gynecologist" },
    { name: "Dr Chinchcu Chan", specialty: "Gynecologist" },
    { name: "Dr Chinchcu Chan", specialty: "Gynecologist" },
    { name: "Dr Chinchcu Chan", specialty: "Gynecologist" },
  ];

  return (
    <>
      <style>
  {`
    .mt-mobile-only {
      margin-top: 120px;
    }
    @media (min-width: 375px) and (max-width: 767.98px) {
      .mt-mobile-only {
        margin-top: 170px;
      }
    }
    @media (min-width: 768px) {
      .mt-mobile-only {
        margin-top: 0;
      }
      .doctor-heading {
        margin-bottom: 40px;
        margin-top: 0px;
      }
    }

    .doctor-info {
      display: flex;
      flex-direction: column;   /* stack name and specialty */
      align-items: center;      /* center horizontally */
      justify-content: center; 
      width: 100%;
      text-align: center;
    }

    /* Name font sizes */
    .doctor-name {
      font-weight: 600;
      margin: 0;
      font-size: 13px; /* default mobile */
    }
    @media (min-width: 576px) {
      .doctor-name { font-size: 14px; }
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
      .doctor-name { font-size: 13px !important; }  /* smaller in tablets */
    }
    @media (min-width: 992px) {
      .doctor-name { font-size: 16px; }
    }

    /* Specialty font sizes */
    .doctor-specialty {
      margin: 0;
      color: #333;
      font-size: 11px; /* default mobile */
    }
    @media (min-width: 576px) {
      .doctor-specialty { font-size: 12px; }
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
      .doctor-specialty { font-size: 13px !important; } /* smaller in tablets */
    }
    @media (min-width: 992px) {
      .doctor-specialty { font-size: 14px; }
    }
  `}
</style>


      <section className="mt-mobile-only">
        <Container>
          <h2 className="text-center fw-semibold doctor-heading">
            Meet With Our Doctor
          </h2>

          <Row className="g-4 justify-content-center">
            {doctors.map((doc, index) => (
              <Col key={index} xs={6} md={3} className="mt-4 mt-md-0">
                <div className="position-relative rounded overflow-hidden">
                  <img
                    src={MeetDoctor}
                    alt={doc.name}
                    className="img-fluid w-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.85)",
                      minHeight: "60px",
                      padding: "6px",
                    }}
                  >
                    <div className="doctor-info">
                      <p className="doctor-name">{doc.name}</p>
                      <p className="doctor-specialty">{doc.specialty}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MeetWithOurDoctor;
