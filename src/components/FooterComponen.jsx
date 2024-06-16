import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import ifooter from "../asset/i-footer.png";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const FooterComponen = () => {
  return (
    <footer className="bg-color py-4">
      <Container>
        <Row>
          <Col md={3} className="mb-4 mb-md-0">
            <Image src={ifooter} rounded fluid />
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h3>Jelajah</h3>
            <a href="/navbar" className="text-dark fs-5 d-block">
              Seniman
            </a>
            <a href="/navbar" className="text-dark fs-5 d-block">
              Twitter
            </a>
            <a href="/navbar" className="text-dark fs-5 d-block">
              Instagram
            </a>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h3>Kontak</h3>
            <p className="fs-5">kanvas9731@gmail.com</p>
            <p className="fs-5">+62 81502346345</p>
            <p className="fs-5">Jalan Hadari Nawawi, Gang Cempaka No. 38</p>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h3>Ikuti Kami</h3>
            <CiInstagram size={40} />
            <CiFacebook size={40} />
            <CiTwitter size={40} />
            <CiYoutube size={40} />

            {/* Tambahkan ikon media sosial atau tautan */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponen;
