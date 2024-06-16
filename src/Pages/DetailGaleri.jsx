import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import detailg1 from "../galeri/detailg1.png";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { SlBasketLoaded } from "react-icons/sl";

const DetailGaleri = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="mt-5 mb-5">
            <img src={detailg1} alt="" className="img-fluid" />
          </Col>
          <Col md={5} className="mt-5 mb-5 ms-md-3 bg-deskripsi rounded-3 shadow-lg">
            <h1 className="mb-2">Deskripsi Lukisan</h1>
            <h3 className="p-2">Judul : Nyi Roro Kidul</h3>
            <h3 className="p-2">Ukuran : 148cm X 121cm</h3>
            <h3 className="p-2">Media : Cat minyak di kanvas</h3>
            <h3 className="p-2">Karya : Iwan Suastika</h3>
            <p className="fw-semibold fs-5">
              Dalam lukisan tersebut, sosok Nyi Roro Kidul digambarkan sebagai seorang perempuan Jawa yang cantik dengan baju hijau dan rambut panjang yang tergerai tersapu angin. Sementara di samping dan belakangnya terlihat tujuh ekor
              kuda yang mengiringi.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="text-center m-3">
        <Button variant="dark">
          {" "}
          <AiOutlineMessage size={30} /> HUBUNGI SENIMAN
        </Button>
        <Link to="/keranjang">
          {" "}
          {/* Sesuaikan dengan path yang benar untuk halaman keranjang */}
          <Button variant="dark" className="ms-3">
            <SlBasketLoaded size={30} /> BELI LUKISAN
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DetailGaleri;
