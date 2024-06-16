import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import img1 from "../ProfilComponents/ProjekProfile/img1.png";
import img2 from "../ProfilComponents/ProjekProfile/img2.png";
import img3 from "../ProfilComponents/ProjekProfile/img3.png";
import img4 from "../ProfilComponents/ProjekProfile/img4.png";
import img5 from "../ProfilComponents/ProjekProfile/img5.png";
import img6 from "../ProfilComponents/ProjekProfile/img6.png";

const ProjekProfile = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={img1} rounded fluid className="m-3" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={img2} rounded fluid className="m-3" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={img3} rounded fluid className="m-3" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={img4} rounded fluid className="m-3" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={img5} rounded fluid className="m-3" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={img6} rounded fluid className="m-3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjekProfile;
