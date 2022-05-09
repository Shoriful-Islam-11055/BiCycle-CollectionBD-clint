import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./Login.css";
import or_sign from "../../images/others/or-line.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

//Import React Fontawesome//
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

import React, { useState } from "react";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
 

  const handleLoginEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleLoginPassword = (event) => {
    setPassword(event.target.value);
  };

  //Login with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //Reset password
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  //Login With google account
  const [signInWithGoogle, user2] = useSignInWithGoogle(auth);

  //Location setup
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const handleLoginSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
    setValidated(true);
  };

  if (user || user2) {
    navigate(from, { replace: true });
  }

  return (
    <div className="bg-success p-2">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleLoginSubmit}
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
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <FontAwesomeIcon icon={faUser} className="fs-3" />
                </InputGroup.Text>
                <Form.Control
                  onBlur={handleLoginEmail}
                  type="email"
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
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <FontAwesomeIcon icon={faKey} className="fs-3" />
                </InputGroup.Text>
                <Form.Control
                  onBlur={handleLoginPassword}
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
                <p
                  onClick={async () => {
                    await sendPasswordResetEmail(email);
                    alert("Sent email");
                  }}
                  className="text-danger reset-pas"
                >
                  Forget Password??
                </p>
              </div>
            </Form.Group>
          </Row>

          <div className="text-center">
            <Button className="bg-success px-5 fs-5" type="submit">
              Login
            </Button>
          </div>
          
          {loading && <p>Loading....</p>}
        </div>
      </Form>
      <div className="form-layout-down">
        <div className="text-center">
          <img className="w-75" src={or_sign} alt="" />
          <p className="fs-4 fw-bold m-0">Continue</p>
          <p className="fs-5 fw-bold m-0">With your social media account</p>
        </div>
        <div className="text-center">
          <Button
            onClick={() => signInWithGoogle()}
            className="fs-5 fw-bold me-2"
          >
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
