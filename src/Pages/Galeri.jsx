import React from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import g1 from "../galeri/g1.png";
import g2 from "../galeri/g2.png";
import g3 from "../galeri/g3.png";
import g4 from "../galeri/g4.png";
import g5 from "../galeri/g5.png";
import g6 from "../galeri/g6.png";
import g7 from "../galeri/g7.png";
import g8 from "../galeri/g8.png";
import g9 from "../galeri/g9.png";
import { Helmet } from "react-helmet";

const Gallery = () => {
  const styles = ["Abstrak", "Seni Rupa", "Modern", "Ekspresionisme Abstrak", "Figuratif"];
  const subjects = ["Bunga", "Orang", "Hewan", "Abstrak", "Lanskap", "Potrait"];
  const media = ["Akrilik", "Cat Minyak", "Cat Air", "Tinta", "Gesso", "Cat Semprot"];
  const bahan = ["Kanvas", "Kertas", "Karton"];

  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/detailgaleri/${id}`);
  };

  const artworks = [
    { id: 1, src: g1, title: "Nyi Roro Kidul", price: "Rp 1.500.000" },
    { id: 2, src: g2, title: "A View of Mount", price: "Rp. 2.500.000" },
    { id: 3, src: g3, title: "The Ruins", price: "Rp. 5.000.000" },
    { id: 4, src: g4, title: "Masa Kemerdekaan", price: "Rp. 4.500.000" },
    { id: 5, src: g5, title: "Perburuan Rusa", price: "Rp. 1.000.000" },
    { id: 6, src: g6, title: "Badai Pasti Berlalu", price: "Rp. 5.500.000" },
    { id: 7, src: g7, title: "Pengusaha", price: "Rp. 1.500.000" },
    { id: 8, src: g8, title: "The Death of Socrates", price: "Rp. 3.500.000" },
    { id: 9, src: g9, title: "Perburuan Banteng", price: "Rp. 7.000.000" },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Galeri</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Row className="mt-5 mb-3">
          <Col md={4} className="shadow" data-aos="fade-up" data-aos-duration="1000">
            <h3> Filter</h3>
            <hr />
            <h3>Gaya</h3>
            <Form>
              {styles.map((style) => (
                <div key={`default-${style}`} className="mb-3">
                  <Form.Check type="checkbox" id={`default-${style}`} label={style} />
                </div>
              ))}
              <h3>Subjek</h3>
              {subjects.map((subject) => (
                <div key={`default-${subject}`} className="mb-3">
                  <Form.Check type="checkbox" id={`default-${subject}`} label={subject} />
                </div>
              ))}
              <h3>Media</h3>
              {media.map((mediaItem) => (
                <div key={`default-${mediaItem}`} className="mb-3">
                  <Form.Check type="checkbox" id={`default-${mediaItem}`} label={mediaItem} />
                </div>
              ))}
              <h3>Bahan</h3>
              {bahan.map((bahanItem) => (
                <div key={`default-${bahanItem}`} className="mb-3">
                  <Form.Check type="checkbox" id={`default-${bahanItem}`} label={bahanItem} />
                </div>
              ))}
            </Form>
          </Col>
          <Col md={8}>
            <h1>Galeri</h1>
            <Row>
              {artworks.map((artwork) => (
                <Col md={4} className="mb-4" key={artwork.id} data-aos="fade-up" data-aos-duration="2000">
                  <Card onClick={() => handleImageClick(artwork.id)} className="shadow-sm zoom-in-image" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Card.Img variant="top" src={artwork.src} style={{ width: "90%", height: "auto", margin: "20px auto", objectFit: "cover" }} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title>{artwork.title}</Card.Title>
                      <Card.Text>{artwork.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
