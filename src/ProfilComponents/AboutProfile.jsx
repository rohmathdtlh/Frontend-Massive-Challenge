import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutProfile = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col className="shadow rounded" style={{ border: "2px solid gray", padding: 0 }}>
            <div className="d-flex justify-content-between p-3" style={{ backgroundColor: "#E4C59E", width: "100%", boxSizing: "border-box" }}>
              <h3>Konsep Karya</h3>
              <Button variant="dark">Edit</Button>
            </div>
            <p className="p-3">berinteraksi dan berpikir tentang ruang, warna, dan identitas.</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="shadow rounded" style={{ border: "2px solid gray", padding: 0 }}>
            <div className="d-flex justify-content-between p-3" style={{ backgroundColor: "#E4C59E", width: "100%", boxSizing: "border-box" }}>
              <h3>Alamat Studio</h3>
              <Button variant="dark">Edit</Button>
            </div>
            <p className="p-3">Jl. Padat Karya No.03</p>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col className="shadow rounded" style={{ border: "2px solid gray", padding: 0 }}>
            <div className="d-flex justify-content-between p-3" style={{ backgroundColor: "#E4C59E", width: "100%", boxSizing: "border-box" }}>
              <h3>Media Sosial</h3>
              <Button variant="dark">Edit</Button>
            </div>
            <p className="p-3"></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutProfile;
