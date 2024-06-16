import React, { useState } from "react";
import { Container, Row, Col, Image, Tab, Tabs, Button, Modal, Form } from "react-bootstrap";
import profile from "../seniman/profile.png";
import InputProjek from "../ProfilComponents/InputProjek";
import AboutProfile from "../ProfilComponents/AboutProfile";
import { Helmet } from "react-helmet";
import ProjekProfile from "../ProfilComponents/ProjekProfile";
import Disukai from "../ProfilComponents/Disukai";
import EditProfil from "../ProfilComponents/EditProfil";
import Pesanan from "../ProfilComponents/Pesanan";
import Profil from "../ProfilComponents/Profil";
import imgp1 from "../ProfilComponents/ProjekProfile/imgp1.png";

const ProfileComponent = () => {
  const [editMode, setEditMode] = useState(false);
  const [showEditPhotoModal, setShowEditPhotoModal] = useState(false);

  const handleShowEditPhotoModal = () => setShowEditPhotoModal(true);
  const handleCloseEditPhotoModal = () => setShowEditPhotoModal(false);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Row className="d-flex justify-content-center align-items-center m-3">
        <Col className="text-center">
          <Image src={imgp1} roundedCircle />
          <h3>Suzy Astuti</h3>
          <Button variant="dark" onClick={handleShowEditPhotoModal}>
            Edit Foto
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="tentang" id="profile-tabs" className="mb-3 custom-tabs">
            <Tab eventKey="Favorit" title="Favorit" className="custom-tab">
              <ProjekProfile />
            </Tab>
            <Tab eventKey="orders" title="Riwayat Transaksi" className="custom-tab">
              <Pesanan />
            </Tab>
            {/* <Tab eventKey="editProfile" title="Edit Profile" className="custom-tab" onClick={() => setEditMode(true)}>
              <EditProfil />
            </Tab> */}
            <Tab eventKey="profil" title="Profil" className="custom-tab" onClick={() => setEditMode(true)}>
              <Profil />
            </Tab>
          </Tabs>
        </Col>
      </Row>

      <Modal show={showEditPhotoModal} onHide={handleCloseEditPhotoModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Foto Profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Foto Baru</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="dark" type="submit" onClick={handleCloseEditPhotoModal}>
              Simpan
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProfileComponent;
