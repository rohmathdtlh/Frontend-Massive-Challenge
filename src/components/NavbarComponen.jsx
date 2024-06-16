import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../asset/logo.png";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink, Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMessage } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames";

const NavbarComponent = () => {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === "/");

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location]);

  return (
    <div>
      <Navbar expand="lg" className="bg-custom">
        <img src={logo} alt="logo" style={{ width: "50px", height: "50px" }} className="img-fluid ms-5" />
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={({ isActive }) => (
                  <NavLink to="/beranda" className={classNames("fw-semibold nav-link", { active: isActive })} style={{ fontSize: "20px" }}>
                    Beranda
                  </NavLink>
                )}
              />
              <Nav.Link
                as={({ isActive }) => (
                  <NavLink to="/seniman" className={classNames("fw-semibold nav-link", { active: isActive })} style={{ fontSize: "20px" }}>
                    Seniman
                  </NavLink>
                )}
              />
              <Nav.Link
                as={({ isActive }) => (
                  <NavLink to="/galeri" className={classNames("fw-semibold nav-link", { active: isActive })} style={{ fontSize: "20px" }}>
                    Galeri
                  </NavLink>
                )}
              />
              <Nav.Link
                as={({ isActive }) => (
                  <NavLink to="/keranjang" className={classNames("fw-semibold nav-link", { active: isActive })} style={{ fontSize: "20px" }}>
                    Keranjang
                  </NavLink>
                )}
              />
            </Nav>

            {isHomePage && (
              <div className="d-flex">
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Daftar
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/register">
                      Daftar sebagai Seniman
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/register">
                      Daftar sebagai Kolektor Seni
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button as={Link} to="/login" variant="dark" className="justify-content-end ms-2">
                  Masuk
                </Button>
              </div>
            )}
            {!isHomePage && (
              <Link to="/chatpage">
                <MdOutlineMessage size={30} className="ms-3" style={{ color: "black" }} />
              </Link>
            )}
            {/* {!isHomePage && <MdOutlineMessage size={30} className="ms-3" />} */}
            {!isHomePage && (
              <Link to="/profile">
                <CgProfile size={30} className="ms-3" style={{ color: "black" }} />
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
