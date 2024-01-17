import React, { useState } from "react";
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';

function Step3() {

  const [formData, setFormData] = useState({
    offerTitle: "",
    phoneNumber: "",
    offerValidFrom: "",
    offerValidTo: "",
    description: "",
    redeemLink: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const printData = () => {
    console.log(JSON.stringify(formData, null, 2));
    // You can use the data as needed, for example, sending it to an API or displaying it in the UI.
  };

    return (
  
      <div>
        <Row className='mb-3'>
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="offerTitle" name="offerTitle" placeholder="Offer Title"  value={formData.offerTitle}
            onChange={(e) => handleChange("offerTitle", e.target.value)}  />
          </Col>
          <Col lg={6}>
          <Form.Control
            className="sidebar-input"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Contact Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
          />
          </Col>
        </Row>
  
        <Row className='mb-3'>
          <Col lg={6}>
            <Form.Control 
            className="sidebar-input" 
            type="date" 
            id="offerValidFrom"
             name="offerValidFrom"  
            value={formData.offerValidFrom}
            onChange={(e) => handleChange("offerValidFrom", e.target.value)} />
          </Col>
          <Col lg={6}>
            <Form.Control className="sidebar-input" type="date" id="offerValidTo" name="offerValidTo" value={formData.offerValidTo}
            onChange={(e) => handleChange("offerValidTo", e.target.value)}  />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col lg={12}>
            <textarea className="sidebar-input" rows={4} placeholder="Description"  value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}  />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col lg={12}>
            <input type="text" id='redeemLink' name='redeemLink' className="sidebar-input" placeholder='Redeem Link' value={formData.redeemLink}
            onChange={(e) => handleChange("redeemLink", e.target.value)}
             />
          </Col>
        </Row>
        <button onClick={printData}>Print Data in JSON</button>
      </div>
    );
  }
  export default Step3;