import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineMessage } from "react-icons/ai";
import k1 from "../seniman/k1.png";
import k4 from "../seniman/k4.png";
import k5 from "../seniman/k5.png";
import k6 from "../seniman/k6.png";

const DetailLukisan = () => {
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
          <Row className="align-items-center">
            <Col md={6} className="mb-3 mt-3" data-aos="fade-up" data-aos-duration="1000">
              <img src={k1} alt="Lukisan Anak Kecil" className="img-fluid" style={{ width: "100%", height: "auto" }} />
            </Col>
            <Col md={6} className="bg-deskripsi p-4 rounded-3 shadow-lg" data-aos="fade-up" data-aos-duration="1000">
              <h1 className="mb-3">Deskripsi Lukisan</h1>
              <h3 className="mb-3">Judul: Anak Kecil</h3>
              <h3 className="mb-3">Ukuran: 148cm X 121cm</h3>
              <h3 className="mb-3">Media: Cat minyak di kanvas</h3>
              <h3 className="mb-3">Karya: Iwan Suastika</h3>
              <p className="fw-semibold fs-5">
                Lukisan ini menampilkan seorang anak kecil yang memegang pensil dan kuas lukis, seakan-akan siap untuk menuangkan imajinasinya ke dalam bentuk seni. Meskipun matanya tertutup, memberi kesan bahwa dia menggambar dan melukis
                dari dalam pikirannya atau hatinya. Papan catur di atasnya melambangkan pemikiran logis dan strategi.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="text-center m-3" data-aos="fade-up" data-aos-duration="1000">
        <Button variant="dark" size="lg">
          <AiOutlineMessage size={30} /> HUBUNGI SENIMAN
        </Button>
      </div>
      <section>
        <Container>
          <Row>
            <Col className="mb-3" data-aos="fade-up" data-aos-duration="1000">
              <h1>Karya Lainnya</h1>
              <img src={k4} className="m-1 zoom-in-image" alt="Karya 4" style={{ width: "350px", height: "auto" }} />
              <img src={k5} className="m-1 zoom-in-image" alt="Karya 5" style={{ width: "350px", height: "auto" }} />
              <img src={k6} className="m-1 zoom-in-image" alt="Karya 6" style={{ width: "350px", height: "auto" }} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default DetailLukisan;
