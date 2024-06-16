import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import k1 from "../img/keranjang.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Keranjang = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Keranjang</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Row>
          <Col>
            <h1>Keranjang</h1>
            <hr className="my-4 hr-custom" /> {/* Menambahkan kelas CSS hr-custom */}
          </Col>
        </Row>
        <Row className="shadow m-3">
          <Col md={3}>
            <h2>Produk</h2>
          </Col>
          <Col md={3}>
            <h2>Harga</h2>
          </Col>
          <Col md={3}>
            <h2>Jumlah</h2>
          </Col>
          <Col md={3}>
            <h2>Subtotal</h2>
          </Col>
          <hr className="hr-custom2" />
          <Col md={3} className="mb-3">
            <Form>
              <Form.Check aria-label="option 1" /> <img src={k1} alt="" />
            </Form>
          </Col>
          <Col md={3}>
            <h5>Rp. 1.500.000</h5>
          </Col>
          <Col md={3}>
            <h5>1</h5>
          </Col>
          <Col md={3}>
            <h5>Rp. 1.500.000</h5>
          </Col>
        </Row>
        <Row>
          <h1 className="mt-3">Total keranjang belanja</h1>
          <Col md={4} className="m-3 d-flex flex-column justify-content-between">
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
            <div className="d-flex justify-content-end mt-4">
              <Link to="/checkout">
                {" "}
                <Button variant="warning" className="fw-semibold">
                  Checkout
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Keranjang;
