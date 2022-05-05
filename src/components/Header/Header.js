import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import band_logo from "../../images/logos/cycle-logo111.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark text-center" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={band_logo}
              width="150"
              height="70"
              className="d-inline-block align-top rounded-3"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  HOME
                </Link>
                <Link className="nav-link" to="/services">
                  SERVICES
                </Link>
              </div>
            </Nav>
            <Nav className="mx-end">
              <Link className="nav-link" to="/login">
              <button type="button" class="btn btn-outline-light">LOGIN</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
