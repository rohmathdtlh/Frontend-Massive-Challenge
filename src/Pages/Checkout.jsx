import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Checkout</h1>
            <hr className="my-4 hr-custom" />
          </Col>
        </Row>
        <h3>Detail tagihan</h3>
        <Col md={8}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="email" className="border-dark" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Alamat</Form.Label>
              <Form.Control as="textarea" rows={3} className="border-dark" />
            </Form.Group>
          </Form>
        </Col>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Provinsi</Form.Label>
              <Form.Control as="select" className="border-dark" required>
                <option>Pilih Provinsi</option>
                <option>Jawa Barat</option>
                <option>Jawa Tengah</option>
                <option>Jawa Timur</option>
                <option>DKI Jakarta</option>
                <option>Daerah Istimewa Yogyakarta</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Kota</Form.Label>
              <Form.Control type="text" className="border-dark" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telepon</Form.Label>
              <Form.Control type="text" className="border-dark" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" className="border-dark" required />
            </Form.Group>
          </Col>
          <Col md={4} className="ms-5 mt-4">
            <ListGroup className="shadow fs-5">
              <ListGroup.Item className="justify-content-between d-flex">
                Subtotal <h6>Rp. 1.500.000</h6>
              </ListGroup.Item>
              <ListGroup.Item className="justify-content-between d-flex">
                Pengiriman <h6>Pengiriman Gratis</h6>
              </ListGroup.Item>
              <ListGroup.Item className="justify-content-between d-flex">
                Total <h6>Rp. 1.500.000</h6>
              </ListGroup.Item>
            </ListGroup>
            <div className="d-flex justify-content-center mt-4">
              <Link to="/detailpesanan">
                <Button variant="warning" className="fw-semibold">
                  Buat Pesanan
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
