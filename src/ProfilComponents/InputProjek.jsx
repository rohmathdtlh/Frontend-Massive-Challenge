import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const InputProjek = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container>
        <Row>
          <Col md={4}>
            <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Unggah File</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Judul</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Keterangan</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Gaya</Form.Label>
                <Form.Control as="select" className="border-dark" required>
                  <option>Abstrak</option>
                  <option>Seni Rupa</option>
                  <option>Modern</option>
                  <option>Ekspresionisem Abstrak</option>
                  <option>Figuratif</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Subjek</Form.Label>
                <Form.Control as="select" className="border-dark" required>
                  <option>Bunga</option>
                  <option>Orang</option>
                  <option>Hewan</option>
                  <option>Abstrak</option>
                  <option>Landscape</option>
                  <option>Potrait</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Media</Form.Label>
                <Form.Control as="select" className="border-dark" required>
                  <option>Akrilik</option>
                  <option>Cat Minyak</option>
                  <option>Cat Air</option>
                  <option>Tinta</option>
                  <option>Gossa</option>
                  <option>Cat Semprot</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Bahan</Form.Label>
                <Form.Control as="select" className="border-dark" required>
                  <option>Kanvas</option>
                  <option>Kertas</option>
                  <option>Karton</option>
                  <option>Tinta</option>
                  <option>Lainnya</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Harga</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button variant="dark" className="m-3">
                Unggah
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InputProjek;
