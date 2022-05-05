import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import './Login.css'

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
    <div className="bg-success vh-100">
      <Form noValidate validated={validated} onSubmit={handleSubmit} className = 'form-layout'>
        <div className="p-3">
        <h2 className="text-center">LOGIN</h2>
        <Row className="mb-3">
          <Form.Group as={Col} md="10" controlId="validationCustomUsername" className="mx-auto ">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
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
          <Form.Group as={Col} md="10" controlId="validationCustomUsername" className="mx-auto">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
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
          <Form.Group as={Col} md="10" className="mx-auto">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          /> 
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="10" className="mx-auto">
          <Button type="submit">Submit form</Button>
          </Form.Group>
        </Row>
        </div>
      </Form>
    </div>
  );
};

export default Login;
