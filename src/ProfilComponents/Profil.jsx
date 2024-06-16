import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { RiPencilFill } from "react-icons/ri";

const Profil = () => {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showHapusAkunModal, setShowHapusAkunModal] = useState(false);

  const handleClose = () => {
    setShowEditProfileModal(false);
    setShowChangePasswordModal(false);
    setShowHapusAkunModal(false);
  };

  const handleShowEditProfile = () => setShowEditProfileModal(true);
  const handleShowChangePassword = () => setShowChangePasswordModal(true);
  const handleShowHapusAkun = () => setShowHapusAkunModal(true);

  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="shadow-sm rounded" style={{ border: "1px solid gray", padding: 0 }}>
            <div className="d-flex justify-content-between p-3" onClick={handleShowEditProfile}>
              <h2>Suzy Astuti</h2> <RiPencilFill />
            </div>
            <p className="ms-3">088978567123</p>
            <div className="ms-3">
              <h6>Informasi Alamat:</h6>
              <p>Jalan Danau Sentarum No. 34</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col md={6} className="shadow-sm rounded" style={{ border: "1px solid gray", padding: 0 }}>
            <div className="d-flex justify-content-between p-3" onClick={handleShowEditProfile}>
              <h6 style={{ marginBottom: "5px" }}>Tentang</h6> <RiPencilFill />
            </div>
            <p className="ms-3" style={{ marginTop: "5px" }}>
              Saya sangat menyukai seni terutama seni lukis. Seni bukan hanya hobi bagi saya, tetapi juga cara saya berkomunikasi dengan dunia.
            </p>
          </Col>
        </Row>
      </Container>

      <Modal show={showEditProfileModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formTelepon" className="mt-3">
              <Form.Label>Nomor Telepon</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formAlamat" className="mt-3">
              <Form.Label>Informasi Alamat</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formTentang" className="mt-3">
              <Form.Label>Tentang</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Kata Sandi */}
      <Row className="mt-5">
        <Col className="shadow-sm rounded" style={{ border: "1px solid gray", padding: 0 }}>
          <div className="d-flex justify-content-between p-3" onClick={handleShowChangePassword}>
            <h3>Kata Sandi</h3> <RiPencilFill />
          </div>
        </Col>
      </Row>

      {/* Modal untuk Kata Sandi */}
      <Modal show={showChangePasswordModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kata Sandi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCurrentPassword">
              <Form.Label>Kata Sandi Saat ini</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group controlId="formNewPassword" className="mt-3">
              <Form.Label>Masukkan Kata Sandi Baru</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Konfirmasi Kata Sandi</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Akhir Modal untuk Kata Sandi */}

      {/* Hapus Akun */}
      <Row className="mt-5 mb-5">
        <Col className="shadow-sm rounded" style={{ border: "1px solid gray", padding: 0 }}>
          <div className="d-flex justify-content-between p-3" onClick={handleShowHapusAkun}>
            <h3>Hapus Akun</h3>
            <p style={{ color: "red" }}>Hapus</p>
          </div>
        </Col>
      </Row>

      {/* Modal untuk Hapus Akun */}
      <Modal show={showHapusAkunModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hapus Akun</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCurrentPassword">
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control type="password" placeholder="Masukkan kata sandi untuk mengkonfirmasi" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Hapus Akun
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Akhir Modal untuk Hapus Akun */}
    </div>
  );
};

export default Profil;
