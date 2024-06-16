import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../img/img1.png"; // Pastikan ekstensi file benar
import img2 from "../img/img2.png"; // Pastikan ekstensi file benar
import img3 from "../img/img3.png"; // Pastikan ekstensi file benar
import img4 from "../img/img4.png"; // Pastikan ekstensi file benar
import img5 from "../img/img5.png"; // Pastikan ekstensi file benar
import img6 from "../img/img6.png"; // Pastikan ekstensi file benar
import iwan from "../seniman/s4.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Bootstrap CSS diimpor
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import k1 from "../seniman/k1.png";
import k2 from "../seniman/k2.png";
import k3 from "../seniman/k3.png";
import k4 from "../seniman/k4.png";
import k5 from "../seniman/k5.png";
import k6 from "../seniman/k6.png";
import k7 from "../seniman/k7.png";
import k8 from "../seniman/k8.png";
import k9 from "../seniman/k9.png";

const DetailSeniman = () => {
  return (
    <div>
      <section className="bg-image1 d-flex align-items-center justify-content-center">
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <h1 className="color-font display-1 fw-bold animate__animated animate__fadeInUp">IWAN SUASTIKA</h1>
            <h1 className="color-font display-4 fw-bold animate__animated animate__fadeInUp">ART STUDIO 21</h1>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="mt-5" data-aos="fade-up" data-aos-duration="1000">
            <Col>
              <Card>
                <Card.Body className="d-flex flex-wrap justify-content-center">
                  <img src={img1} className="card-img-top mt-3 me-2 img-fluid zoom-in-image" alt="..." style={{ width: "150px" }} />
                  <img src={img2} className="card-img-top mt-3 me-2 img-fluid zoom-in-image" alt="..." style={{ width: "150px" }} />
                  <img src={img3} className="card-img-top mt-3 me-2 img-fluid zoom-in-image" alt="..." style={{ width: "150px" }} />
                  <img src={img4} className="card-img-top mt-3 me-2 img-fluid zoom-in-image" alt="..." style={{ width: "150px" }} />
                  <img src={img5} className="card-img-top mt-3 me-2 img-fluid zoom-in-image" alt="..." style={{ width: "150px" }} />
                  <img src={img6} className="card-img-top mt-3 me-2 img-fluid zoom-in-image" alt="..." style={{ width: "150px" }} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <h1 className="m-3 text-center">Iwan Suastika</h1>
      <section>
        <Container>
          <Row data-aos="fade-up" data-aos-duration="1000">
            <Col md={4} className="m-3">
              <img src={iwan} alt="" className="img-fluid" />
            </Col>
            <Col md={4} className="m-3">
              <h4>Konsep Karya:</h4>
              <p>aku alam semesta, engkau adalah alam semesta, dan kita adalah alam semesta</p>
              <h4>Alamat Studio:</h4>
              <p>Kompl. Gading Tutuka 1 blok B2 No 34-35 RT 03 RW 12 Desa Cingcin Kec Soreang Kab. Bandung</p>
            </Col>
            <Col md={2} className="m-3">
              <p className="fw-semibold">
                <CiInstagram size={30} className="me-3" />
                Iwan Suastika
              </p>
              <p className="fw-semibold">
                <CiFacebook size={30} className="me-3" />
                Iwan Suastika 21
              </p>
              <p className="fw-semibold">
                <BsTelephone size={30} className="me-3" />
                0811289561515
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mt-3">
              <Link to="/detaillukisan">
                {" "}
                <img src={k1} alt="" className="img-fluid zoom-in-image" />
              </Link>
            </Col>
            <Col md={4} className="mt-3">
              <img src={k2} alt="" className="img-fluid zoom-in-image" />
            </Col>
            <Col md={4} className="mt-3">
              <img src={k3} alt="" className="img-fluid zoom-in-image" />
            </Col>
            <Col md={4} className="mt-3">
              <img src={k4} alt="" className="img-fluid zoom-in-image" />
            </Col>
            <Col md={4} className="mt-3">
              <img src={k5} alt="" className="img-fluid zoom-in-image" />
            </Col>
            <Col md={4} className="mt-3">
              <img src={k6} alt="" className="img-fluid zoom-in-image" />
            </Col>
            <Col md={4} className="mt-3 mb-3">
              <img src={k7} alt="" className="img-fluid zoom-in-image" />
            </Col>
            <Col md={4} className="mt-3">
              <img src={k8} alt="" className="img-fluid zoom-in-image" />
            </Col>
            <Col md={4} className="mt-3">
              <img src={k9} alt="" className="img-fluid zoom-in-image" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default DetailSeniman;
