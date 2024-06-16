import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { RiPencilFill } from "react-icons/ri";

const AboutProfile = () => {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showHapusAkunModal, setShowHapusAkunModal] = useState(false);

  const handleClose = () => {
    setShowEditProfileModal(false);
    setShowChangePasswordModal(false);
    setShowHapusAkunModal(false);
  };

  return (
    <div>
      <Container>
        {/* Edit Profil */}
        <Row className="mt-5">
          <Col className="shadow-sm rounded" style={{ border: "1px solid gray", padding: 0 }}>
            <div className="d-flex justify-content-between p-3" onClick={() => setShowEditProfileModal(true)}>
              <h3>Edit Profil</h3> <RiPencilFill />
            </div>
          </Col>
        </Row>

        {/* Modal untuk Edit Profil */}
        <Modal show={showEditProfileModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Informasi Alamat</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group controlId="formTentang" className="mt-3">
                <Form.Label>Tentang</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Masukkan informasi tentang Anda" />
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
        {/* Akhir Modal untuk Edit Profil */}

        {/* Kata Sandi */}
        <Row className="mt-5">
          <Col className="shadow-sm rounded" style={{ border: "1px solid gray", padding: 0 }}>
            <div className="d-flex justify-content-between p-3" onClick={() => setShowChangePasswordModal(true)}>
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
              <Form.Group controlId="formNewPassword">
                <Form.Label>Masukkan Kata Sandi Baru</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword">
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
            <div className="d-flex justify-content-between p-3" onClick={() => setShowHapusAkunModal(true)}>
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
      </Container>
    </div>
  );
};

export default AboutProfile;
