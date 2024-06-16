import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import g1 from "../galeri/g1.png";
import g2 from "../galeri/g2.png";
import g3 from "../galeri/g3.png";
import g4 from "../galeri/g4.png";
import g5 from "../galeri/g5.png";

const Disukai = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={g1} rounded fluid />
            <h4>Nyi Roro Kidul</h4>
            <p>Rp 1.500.000</p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={g2} rounded fluid />
            <h4>A View of Mount Megamendung</h4>
            <p>Rp. 2.500.000</p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={g3} rounded fluid />
          </Col>
          <Col xs={6} md={4}>
            <Image src={g4} rounded fluid />
          </Col>
          <Col xs={6} md={4}>
            <Image src={g5} rounded fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Disukai;
