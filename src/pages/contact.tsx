import PrimaryLayout from '../layouts/PrimaryLayout';
import { Form, Button } from 'react-bootstrap';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default () => {
  return (
    <PrimaryLayout>
      <Row>
        <Col>
          <h1>Contact</h1>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="exampleForm.Submit">
              <Button>Submit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </PrimaryLayout>
  );
};
