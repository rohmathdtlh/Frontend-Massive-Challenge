import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../asset/logo.png";
import image from "../asset/image.png";
import icon from "../asset/google-icon.png";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
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
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="fs-5">Email</Form.Label>
              <Form.Control size="lg" className="border-black" type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="fs-5">Kata Sandi</Form.Label>
              <Form.Control size="lg" className="border-black" type="password" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Row className="m-3">
                <Col xs={6}>
                  <Form.Check type="checkbox" label="Ingat saya" className="" />
                </Col>
                <Col xs={6}>
                  <div className="text-end">
                    <a href="/">Lupa Kata Sandi?</a>
                  </div>
                </Col>
              </Row>
            </Form.Group>
            <div className="d-grid gap-2">
              <Link to="/beranda" className="d-grid text-decoration-none">
                <Button variant="dark" size="lg">
                  Login
                </Button>
              </Link>
              <Button variant="light" size="lg" className="border border-dark mt-3">
                <img src={icon} alt="" style={{ width: "20px", margin: "5px" }} /> Masuk dengan Google
              </Button>
            </div>
          </Form>
          <div className="text-center m-3">
            Belum punya akun? <a href="/">Daftar disini</a>
          </div>
        </Col>
        <Col md={6} className="d-none d-md-block p-0">
          <img src={image} alt="" className="img-fluid h-100 w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
