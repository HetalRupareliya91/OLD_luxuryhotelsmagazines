import React from "react";
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';

function Step3() {

    return (
  
      <div>
        <Row className='mb-3'>
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="offerTitle" name="offerTitle" placeholder="Offer Title" required />
          </Col>
          <Col lg={6}>
            <input className="sidebar-input" type="tel" id="phoneNumber" name="phoneNumber" placeholder="Contact Phone Nunmber" required />
          </Col>
        </Row>
  
        <Row className='mb-3'>
          <Col lg={6}>
            <input className="sidebar-input" type="date" id="offerValidFrom" name="offerValidFrom" value="Offer Valid From " required />
          </Col>
          <Col lg={6}>
            <input className="sidebar-input" type="date" id="offerValidTo" name="offerValidTo" value="Offer Valid To" required />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col lg={12}>
            <textarea className="sidebar-input" rows={4} required />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col lg={12}>
            <input type="text" id='redeemLink' name='redeemLink' className="sidebar-input" placeholder='Redeem Link' required />
          </Col>
        </Row>
      </div>
    );
  }
  export default Step3;