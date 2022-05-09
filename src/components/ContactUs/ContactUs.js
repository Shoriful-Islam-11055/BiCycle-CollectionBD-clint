import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./ContactUs.css";
const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  const [notification, setNotification] = useState()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    setNotification('Thank You! We will give you all update.')
  };
  return (
    <div className="container background-info p-3 mb-3 mt-3">
      <p className="section-title text-center py-3 mt-3 fs-2 background-info">
        Contact us for more information
      </p>
      <div class="card mb-3 border-0 py-3 bg-light">
        <div>
          <div class="row g-0">
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">Stay with us and know updated</h5>
                <p class="card-text">
                  Collecting various domestic and foreign bicycles is our hobby
                  and profession. Every week at our Crazy Collection Warehouse
                  we import high quality and popular bicycles from abroad and
                  the bicycles are made in our own factory. We export our
                  manufactured bicycles to different countries through different
                  agents. Bicycles made by us and bicycles imported from abroad
                  are distributed in various reputed bicycle showrooms of the
                  country. Stay tuned for updates on new collections every week.
                  To find out more about us, fill out the form and submit. We
                  will tell you more details about us. Thank you.
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="10" controlId="validationCustom03">
                    <Form.Control
                      className="p-3"
                      type="text"
                      placeholder="User Name"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Username.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="10" controlId="validationCustom03">
                    <Form.Control
                      className="p-3"
                      type="text"
                      placeholder="Your Address"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="10" controlId="validationCustom03">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Please provide feedback about us"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide feedback.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <div className="text-center Subscribe">
                  <Button variant="outline-dark fs-5 w-100 p-2" type="submit">
                    Subscribe
                  </Button>
                </div>
              </Form>
              <p className="text-center fs-4 fw-bold text-success">{notification}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
