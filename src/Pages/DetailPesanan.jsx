import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const DetailPesanan = () => {
  return (
    <div>
      <Container>
        <Row className="p-3">
          <Col>
            <h3>Pesanan Diterima</h3>
            <p>Terimakasih Pesanan Anda Telah Diterima</p>
          </Col>
        </Row>
        <Row className="p-3">
          <Col md={2} className="separator">
            <h5>Nomor Pesanan</h5>
            <p>25220</p>
          </Col>
          <Col md={2} className="separator">
            <h5>Tanggal</h5>
            <p>18 Mei, 2024</p>
          </Col>
          <Col md={2} className="separator">
            <h5>Total</h5>
            <p>Rp. 1.500.000</p>
          </Col>
          <Col md={4}>
            <h5>Metode Pembayaran</h5>
            <p>Direct bank transfer</p>
          </Col>
        </Row>
        <Row className="p-3">
          <Col>
            <h5>Detail Bank Kami</h5>
            <h6>Lukman Zen</h6>
          </Col>
        </Row>
        <Row className="ms-3">
          <Col md={1} className="separator">
            <h6>Bank</h6>
            <p className="fw-bold">BCA</p>
          </Col>
          <Col md={3}>
            <h6>Nomor Rekening</h6>
            <p className="fw-bold">1480715943</p>
          </Col>
        </Row>
        <Row className="p-3">
          <Col md={6} className="mt-3">
            <ListGroup className="shadow fs-5">
              <ListGroup.Item className="justify-content-between d-flex">
                Produk <h5>Total</h5>
              </ListGroup.Item>
              <ListGroup.Item className="justify-content-between d-flex">
                Subtotal <h6>Rp. 1.500.000</h6>
              </ListGroup.Item>
              <ListGroup.Item className="justify-content-between d-flex">
                Pengiriman <h6>Pengiriman Gratis</h6>
              </ListGroup.Item>
              <ListGroup.Item className="justify-content-between d-flex">
                Metode Pembayaran <h6>Direct bank transfer</h6>
              </ListGroup.Item>
              <ListGroup.Item className="justify-content-between d-flex">
                Total <h6>Rp. 1.500.000</h6>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPesanan;
