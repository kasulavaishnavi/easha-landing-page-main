import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const VisionMission = () => {
  return (
    <Container fluid className="py-5 px-4" style={{ backgroundColor: "#e6f2f3" }}>
      <Row className="gx-0 mb-4">
        <Col xs={12} md={7} className="ms-auto">
          <div
            style={{
              backgroundColor: "#00A99D",
              borderRadius: "100px 0 0 100px",
              padding: "60px 60px",
              color: "white",
              textAlign: "Center",
            }}
          >
            <h4 style={{ margin: 0 }}>Our Vision</h4>
            <p style={{ margin: 0, fontSize: "14px" }}>
              Smart, Secure, And Accessible Healthcare—Powered By Innovation.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="gx-0">
        <Col xs={12} md={7} className="me-auto">
          <div
            style={{
              backgroundColor: "#00A99D",
              borderRadius: "0 100px 100px 0",
              padding: "60px 60px",
              color: "white",
              textAlign: "Center",
            }}
          >
            <h4 style={{ margin: 0 }}>Our Mission</h4>
            <p style={{ margin: 0, fontSize: "14px" }}>
              Outpatient Care, Simplified For Everyone, Everywhere.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VisionMission;
