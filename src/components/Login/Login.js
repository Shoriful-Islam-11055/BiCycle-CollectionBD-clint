import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import {
  faGithub,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faKey,
  faEnvelope,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import or_sign from "../../images/others/or-line.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="bg-success p-2">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="form-layout"
      >
        <div className="p-3">
          <h2 className="text-center fw-bold section-title">LOGIN FORM</h2>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="10"
              controlId="validationCustomUsername"
              className="mx-auto "
            >
              {/* <Form.Label>User Email</Form.Label> */}
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <FontAwesomeIcon icon={faUser} className="fs-3" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="User Email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="10"
              controlId="validationCustomUsername"
              className="mx-auto"
            >
              {/* <Form.Label>User Password</Form.Label> */}
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <FontAwesomeIcon icon={faKey} className="fs-3" />
                </InputGroup.Text>
                <Form.Control
                  type="Password"
                  placeholder="Password"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter valid password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="10" className="mx-auto">
              <div className="d-flex justify-content-between">
                <Form.Check
                  required
                  label="Remember Me"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
                <p className="text-danger reset-pas">Forget Password??</p>
              </div>
            </Form.Group>
          </Row>

          <div className="text-center">
            <Button className="bg-success px-5 fs-5" type="submit">
              Login
            </Button>
          </div>
        </div>
      </Form>
      <div className="form-layout-down">
        <div className="text-center">
          <img className="w-75" src={or_sign} alt="" />
          <p className="fs-4 fw-bold m-0">Continue</p>
          <p className="fs-5 fw-bold m-0">With your social media account</p>
        </div>
        <div className="text-center">
          <Button className="fs-5 fw-bold me-2">
            <FontAwesomeIcon icon={faGooglePlusSquare} className="fs-4" />
            <span className="ms-1">Google</span>
          </Button>

          <Button className="fs-5 fw-bold me-2 bg-info">
            <FontAwesomeIcon icon={faGithub} className="fs-4" />
            <span className="ms-1">GitHub</span>
          </Button>

          <Button className="fs-5 fw-bold bg-success git-btn">
            <FontAwesomeIcon icon={faEnvelope} className="fs-4" />
            <span className="ms-1">Email</span>
          </Button>
        </div>
        <hr className="w-75 mx-auto" />

        <div className="text-center pb-2">
          <p className="text-bold fs-5">
            Don't have an account?
            <span>
              <Link className="text-decoration-none text-danger" to="/register">
                Register Now!
              </Link>
            </span>
          </p>
          <Button className="fs-5 fw-bold bg-info git-btn">
            <FontAwesomeIcon icon={faRegistered} className="fs-4" />
            <span className="ms-1">
              <Link className="text-decoration-none" to="/register">
                Create an account
              </Link>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
