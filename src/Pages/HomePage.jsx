import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../asset/image3.png"; // Pastikan Anda mengganti path dengan path gambar yang benar
import s1 from "../seniman/s1.png";
import s2 from "../seniman/s2.png";
import s3 from "../seniman/s3.png";
import g1 from "../asset/g1.png";
import g2 from "../asset/g2.png";
import g3 from "../asset/g3.png";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="image-section1 hero-container d-flex align-items-center">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="fw-bold animate__animated animate__fadeInUp">Temukan makna tersembunyi di balik setiap karya seni.</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <h1 className="text-center m-3" data-aos="fade-up">
        Selamat Datang di Kisah Kanvas
      </h1>
      {/* Section Dua */}
      <div className="linear-gradient">
        <Container>
          <Row>
            <Col md={6} className="d-flex align-items-center" data-aos="fade-up">
              <div>
                <h1 className="fw-semibold">
                  Nikmati keindahan seni tempat di mana setiap sapuan kuas menceritakan kisah unik. Jelajahi koleksi karya seni dari berbagai seniman berbakat, temukan inspirasi, dan temukan mahakarya yang memikat hati Anda.
                </h1>
              </div>
            </Col>
            <Col md={6} className="background-image" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "300px", backgroundSize: "cover" }}></Col>
          </Row>
        </Container>
      </div>

      {/* Section Tiga */}
      <div>
        <Container>
          <Row>
            <Col className="mt-3" data-aos="fade-up" data-aos-duration="1000">
              <h1>Para Seniman Kami</h1>
              <div className="d-flex flex-wrap justify-content-center">
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "60%", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={s1} style={{ height: "auto", width: "80%" }} />
                  <Card.Body className="text-center">
                    <Card.Title>Bayu Santoso</Card.Title>
                    <Card.Text>Bayu Studio</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "60%", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={s2} style={{ height: "auto", width: "80%" }} />
                  <Card.Body className="text-center">
                    <Card.Title>Naufal Abshar</Card.Title>
                    <Card.Text>Gallery Naufal</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={s3} style={{ height: "auto", width: "80%" }} />
                  <Card.Body className="text-center">
                    <Card.Title>Sinta Tantra</Card.Title>
                    <Card.Text>Art Sintatan</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3" data-aos="fade-up" data-aos-duration="1000">
              <h1>Galeri</h1>
              <div className="d-flex flex-wrap justify-content-center">
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={g1} style={{ height: "auto", width: "80%" }} />
                </Card>
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={g2} style={{ height: "auto", width: "80%" }} />
                </Card>
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "70%", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={g3} style={{ height: "auto", width: "80%" }} />
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
