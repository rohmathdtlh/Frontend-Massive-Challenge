import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../asset/logo.png";
import image from "../asset/image.png";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center p-5">
          <div className="text-center">
            <img src={logo} alt="Logo" style={{ width: "100px", margin: "0 auto" }} />
            <h1 className="mt-3">SELAMAT DATANG</h1>
          </div>
          <Form className="w-100 mt-4">
            <Row className="justify-content-between">
              <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom01">
                <Form.Control size="lg" className="border-black" required type="text" placeholder="Nama Depan" />
              </Form.Group>
              <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom02">
                <Form.Control size="lg" className="border-black" required type="text" placeholder="Nama Belakang" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="fs-5">Email</Form.Label>
              <Form.Control size="lg" className="border-black" type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="fs-5">Kata Sandi</Form.Label>
              <Form.Control size="lg" className="border-black" type="password" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="Saya menyetujui Perjanjian Pengguna dan Kebijakan Privasi yang Berlaku" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="dark" size="lg">
                Masuk
              </Button>
            </div>
          </Form>
          <div className="text-center m-3">
            Sudah punya akun? <a href="/">Login disini</a>
          </div>
        </Col>
        <Col md={6} className="d-none d-md-block p-0">
          <img src={image} alt="" className="img-fluid h-100 w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
