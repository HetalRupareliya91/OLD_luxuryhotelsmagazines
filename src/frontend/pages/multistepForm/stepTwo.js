import React from "react";
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';

function Step2() {
    return (
      <div>
        <Row className="mb-3">
          <h4>Contact 1 </h4>
          <Col lg={4}>
            <input className="sidebar-input" type="text" id="name" name="name" placeholder=" Name" required />
          </Col>
          <Col lg={4}>
            <input className="sidebar-input" type="email" id="email" name="email" placeholder=" Email" required />
          </Col>
          <Col lg={4}>
            <input className="sidebar-input" type="text" id="contactInformation" name="contactInformation" placeholder="Contact Information" required />
          </Col>
        </Row>
  
        <Row className="mb-3">
          <h4>Contact 2 </h4>
          <Col lg={4}>
            <input className="sidebar-input" type="text" id="name" name="name" placeholder=" Name" required />
          </Col>
          <Col lg={4}>
            <input className="sidebar-input" type="email" id="email" name="email" placeholder=" Email" required />
          </Col>
          <Col lg={4}>
            <input className="sidebar-input" type="text" id="contactInformation" name="contactInformation" placeholder="Contact Information" required />
          </Col>
        </Row>
  
        <Row className="mb-3">
          <h4 className="third-child">Contact 3 </h4>
          <Col lg={4}>
            <input className="sidebar-input" type="text" id="name" name="name" placeholder=" Name" required />
          </Col>
          <Col lg={4}>
            <input className="sidebar-input" type="email" id="email" name="email" placeholder=" Email" required />
          </Col>
          <Col lg={4}>
            <input className="sidebar-input" type="text" id="contactInformation" name="contactInformation" placeholder="Contact Information" required />
          </Col>
        </Row>
      </div>
    );
  }
  export default Step2;