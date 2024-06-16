import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import imgp from "../ProfilComponents/ProjekProfile/imgp.png";
import p1 from "../ProfilComponents/ProjekProfile/p1.png";

const Pesanan = () => {
  const [activeTab, setActiveTab] = useState("pesananMasuk");

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Button variant={activeTab === "pesananMasuk" ? "warning" : "light"} onClick={() => setActiveTab("pesananMasuk")} className="m-1">
            Dikirim
          </Button>
          <Button variant={activeTab === "dikirim" ? "warning" : "light"} onClick={() => setActiveTab("dikirim")} className="m-1">
            Selesai
          </Button>
          <Button variant={activeTab === "dibatalkan" ? "warning" : "light"} onClick={() => setActiveTab("dibatalkan")} className="m-1">
            Dibatalkan
          </Button>
        </Col>
      </Row>
      {activeTab === "pesananMasuk" && (
        <>
          <Row>
            <Col md={10} className="rounded-top border p-3">
              <div className="d-flex justify-content-between align-items-center">
                <span className="d-flex align-items-center">
                  <img src={imgp} alt="" className="me-2" />
                  <div>
                    <h6>Nyi Roro Kidul</h6>
                    <p className="text-karya">Karya: Basoeki Abdullah</p>
                  </div>
                </span>
                <div>Rp1.500.000</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10} className="rounded-bottom border p-3 mb-3">
              {/* <div className="d-flex justify-content-center">
                <Button variant="success" className="me-2">
                  Terima
                </Button>
                <Button variant="danger">Batalkan</Button>
              </div> */}
            </Col>
          </Row>
        </>
      )}
      {activeTab === "dikirim" && (
        <>
          <Row>
            <Col md={10} className="rounded-top border p-3">
              <div className="d-flex justify-content-between align-items-center">
                <span className="d-flex align-items-center">
                  <img src={imgp} alt="" className="me-2" />
                  <div>
                    <h6>Nyi Roro Kidul</h6>
                    <p className="text-karya">Karya: Basoeki Abdullah</p>
                  </div>
                </span>
                <p style={{ color: "red" }}>Rp1.500.000</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10} className="rounded-top border p-3">
              <div className="d-flex justify-content-between align-items-center">
                <span className="d-flex align-items-center">
                  <img src={p1} alt="" className="me-2" />
                  <div>
                    <h6>Pengusaha</h6>
                    <p className="text-karya">Karya: Raden Saleh</p>
                  </div>
                </span>
                <p style={{ color: "red" }}>Rp1.800.000</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10} className="rounded-bottom border p-3 mb-3"></Col>
          </Row>
        </>
      )}
      {activeTab === "dibatalkan" && (
        <>
          <Row>
            <Col md={10} className="rounded-top border p-3">
              <div className="d-flex justify-content-between align-items-center">
                <span className="d-flex align-items-center">
                  <img src={imgp} alt="" className="me-2" />
                  <div>
                    <h6>Nyi Roro Kidul</h6>
                    <p className="text-karya">Karya: Basoeki Abdullah</p>
                  </div>
                </span>
                <p style={{ color: "red" }}>DIBATALKAN</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10} className="rounded-bottom border p-3 mb-3"></Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Pesanan;
