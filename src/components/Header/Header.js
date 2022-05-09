import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import band_logo from "../../images/logos/band.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark text-center" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={band_logo}
              width="150"
              height="40"
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
                <Link className="nav-link" to="/manageItems">
                  MANAGE ITEMS
                </Link>
                <Link className="nav-link" to="/addItems">
                  ADD ITEMS
                </Link>
                <Link className="nav-link" to="/myItems">
                  MY ITEMS
                </Link>
                <Link className="nav-link" to="/blogs">
                  BLOGS
                </Link>
              </div>
            </Nav>
            <Nav className="mx-end">
              <Link className="nav-link" to="/login">
                {user ? (
                  <Button onClick={handleSignOut} variant="outline-info">
                    LOGOUT
                  </Button>
                ) : (
                  <Button variant="outline-info">LOGIN</Button>
                )}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
