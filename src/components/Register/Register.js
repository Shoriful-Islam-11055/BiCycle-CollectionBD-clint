import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import {
  faGithub,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../components/Login/Login.css";
import or_sign from "../../images/others/or-line.png";
import { Link, useNavigate } from "react-router-dom";

import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";


const Register = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [matchError, setMatchError] = useState("");
  const navigate = useNavigate();

  const handleEmailRegister = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordRegister = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordRegister = (event) => {
    setRepeatPassword(event.target.value);
  };

  //Create/ Registration with Email and password
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  //Create/ Registration with Google Account
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if(password !== repeatPassword){
      setMatchError("Did't match password");
      event.preventDefault();
      return;
    }
    createUserWithEmailAndPassword(email, password);
    // setEmail('');
    // setPassword('')
    // setRepeatPassword('')
    setValidated(true);
  };

  if (user) {
    navigate("/login");
  }

  return (
    <div className="bg-success p-2">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="form-layout"
      >
        <div className="p-3">
          <h2 className="text-center fw-bold form-title">Registration Form</h2>
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
                  onBlur={handleEmailRegister}
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
                  onBlur={handlePasswordRegister}
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
                  onBlur={handleRepeatPasswordRegister}
                  type="Password"
                  placeholder="Repeat Password"
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
             <p style={{ color: "red" }}>{matchError}</p>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
          </Row>

          <div className="text-center">
            <Button className="bg-success px-5 fs-5" type="submit">
              Register
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
            Already have account?
            <span>
              <Link className="text-decoration-none text-danger" to="/login">
                Login Now!
              </Link>
            </span>
          </p>
          <Button className="fs-5 fw-bold bg-info git-btn">
            <span className="ms-1">
              <Link className="text-decoration-none" to="/login">
                Login
              </Link>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
