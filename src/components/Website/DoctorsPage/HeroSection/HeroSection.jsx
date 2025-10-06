import doctorImage from "../../../../assets/doctorimage.png";
import doctorImageMobile from "../../../../assets/doctorimageMobiles.png";

import { Link } from "react-router-dom";

import './HeroSection.css'

const HeroSection = () => {
  return (
    <>
      <section
        className="py-0"
        style={{
          backgroundColor: "#fff",
          overflow: "hidden",
          marginTop: "0",
        }}
      >
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-center d-none d-lg-flex">
            <div
              className="col-lg-6 order-lg-1 order-1 py-4 py-lg-0"
              style={{
                paddingLeft: "80px",
                paddingRight: "20px",
              }}
            >
              <div className="d-flex flex-column">
                <h1
                  className="fw-bold mb-3"
                  style={{
                    color: "#1F405E",
                    fontSize: "clamp(1.5rem, 4vw, 4.5rem)",
                  }}
                >
                  Your Healing Starts with the Right Match
                </h1>
                <h5
                  className="mb-4"
                  style={{
                    fontSize: "clamp(0.9rem, 2.5vw, 1.25rem)",
                    fontWeight: "500",
                    lineHeight: "1.5",
                  }}
                >
                  Book a clinic visit or consult online with trusted, experienced doctors
                </h5>
                <Link to="/customerSupport" style={{ textDecoration: 'none' }}>
                <button
                  className="btn btn-primary px-4 py-2 mb-3 mb-lg-0 align-self-start"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "#009982",
                    color: "#fff",
                    border: "none",
                    fontWeight: "400",
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#009982";
                    e.target.style.border = "1px solid #009982";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#009982";
                    e.target.style.color = "#fff";
                    e.target.style.border = "none";
                  }}
                >
                  Consult now
                </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-2 p-0">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={doctorImage}
                  alt="Doctor"
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="d-lg-none position-relative mobile-hero-container"
            style={{ paddingTop: "77px" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "50vh",
                minHeight: "300px",
                maxHeight: "400px",
                overflow: "hidden",
                marginTop: "0",
              }}
            >
              <img
                src={doctorImageMobile}
                alt="Doctor"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />

              <div
                className="mobile-overlay-content"
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "5%",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "left",
                  zIndex: 2,
                }}
              >
                <h1
                  className="fw-bold mb-3 mobile-hero-title"
                  style={{
                    color: "#fff",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                    lineHeight: "1.2",
                  }}
                >
                  Your Healing Starts with the Right Match
                </h1>
                <h5
                  className="mb-4 mobile-hero-subtitle"
                  style={{
                    color: "#fff",
                    fontWeight: "400",
                    lineHeight: "1.4",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                    maxWidth: "90%",
                  }}
                >
                  Book a clinic visit or consult online with trusted, experienced doctors
                </h5>
                  <Link to="/">
                <button
                  className="btn btn-primary mobile-hero-btn"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "#009982",
                    color: "#fff",
                    border: "none",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(0,153,130,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#009982";
                    e.target.style.border = "2px solid #009982";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#009982";
                    e.target.style.color = "#fff";
                    e.target.style.border = "none";
                  }}
                >
                  Consult now
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
