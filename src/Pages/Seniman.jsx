import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import s1 from "../seniman/s1.png";
import s2 from "../seniman/s2.png";
import s3 from "../seniman/s3.png";
import s4 from "../seniman/s4.png";
import s5 from "../seniman/s5.png";
import s6 from "../seniman/s6.png";
import s7 from "../seniman/s7.png";
import s8 from "../seniman/s8.png";
import s9 from "../seniman/s9.png";
import { Helmet } from "react-helmet";

const Seniman = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Seniman</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="bg-image" style={{ display: "flex", alignItems: "center" }}>
        {/* Isi section disini */}
      </section>

      <section>
        <Container>
          <Row>
            <Col className="mt-3" data-aos="fade-up" data-aos-duration="2000">
              <h1>Para Seniman Kami</h1>
              <div className="d-flex flex-wrap justify-content-start">
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={s1} style={{ height: "auto", width: "80%" }} />
                  <Card.Body className="text-center">
                    <Card.Title>Bayu Santoso</Card.Title>
                    <Card.Text>Bayu Studio</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
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
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
                  <Link to="/detailseniman" style={{ textDecoration: "none", color: "black" }}>
                    {" "}
                    {/* Sesuaikan dengan path yang benar untuk halaman detail seniman */}
                    <Card.Img variant="top" className="m-3 img-fluid" src={s4} style={{ height: "auto", width: "80%" }} />
                    <Card.Body className="text-center">
                      <Card.Title>Iwan Suastika</Card.Title>
                      <Card.Text>Iwan 19</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={s5} style={{ height: "auto", width: "80%" }} />
                  <Card.Body className="text-center">
                    <Card.Title>Steven Saifudin</Card.Title>
                    <Card.Text>Steven art</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={s6} style={{ height: "auto", width: "80%" }} />
                  <Card.Body className="text-center">
                    <Card.Title>Dodit Artawan</Card.Title>
                    <Card.Text>Dodit’s Gallery</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={s7} style={{ height: "auto", width: "80%" }} />
                  <Card.Body className="text-center">
                    <Card.Title>Petek Sutrisno</Card.Title>
                    <Card.Text>Sutrisno 38 Gallery</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={s8} style={{ height: "auto", width: "80%" }} />
                  <Card.Body className="text-center">
                    <Card.Title>Dony Agustian</Card.Title>
                    <Card.Text>Studio 191</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="align-items-center zoom-in-image" style={{ width: "70%", maxWidth: "20rem", height: "auto", margin: "0.5rem" }}>
                  <Card.Img variant="top" className="m-3 img-fluid" src={s9} style={{ height: "auto", width: "80%" }} />
                  <Card.Body className="text-center">
                    <Card.Title>Aurora Santika</Card.Title>
                    <Card.Text>Gallery aurora</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Seniman;
