import React, { useState } from "react";
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';

function Step2() {

  const [formData, setFormData] = useState({
  
  });

  const handleChange = (contact, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [contact]: {
        ...prevData[contact],
        [field]: value,
      },
    }));
  };

  const printData = () => {
    console.log(JSON.stringify(formData, null, 2));
    // You can use the data as needed, for example, sending it to an API or displaying it in the UI.
  };
    return (
      <div>
        <Row className="mb-3">
          <h4>Contact 1 </h4>
          <Col lg={4}>
            <input
            className="sidebar-input"  
            type="text"
            id="name"
            name="name"
            placeholder=" Name"
            value={formData.contact1.name}
            onChange={(e) => handleChange("contact1", "name", e.target.value)}
            required/>
          </Col>
          <Col lg={4}>
            <input  className="sidebar-input"
            type="email"
            id="email"
            name="email"
            placeholder=" Email"
            value={formData.contact1.email}
            onChange={(e) => handleChange("contact1", "email", e.target.value)}
            required />
          </Col>
          <Col lg={4}>
            <input className="sidebar-input"
            type="text"
            id="contactInformation"
            name="contactInformation"
            placeholder="Contact Information"
            value={formData.contact1.contactInformation}
            onChange={(e) => handleChange("contact1", "contactInformation", e.target.value)}
            required/>
          </Col>
        </Row>
  
        <Row className="mb-3">
          <h4>Contact 2 </h4>
          <Col lg={4}>
            <input  className="sidebar-input"  
            type="text"
            id="name"
            name="name"
            placeholder=" Name"
            value={formData.contact1.name}
            onChange={(e) => handleChange("contact1", "name", e.target.value)} />
          </Col>
          <Col lg={4}>
            <input type="email"
            id="email"
            name="email"
            placeholder=" Email"
            value={formData.contact2.email}
            onChange={(e) => handleChange("contact2", "email", e.target.value)} />
          </Col>
          <Col lg={4}>
            <input  type="text"
            id="contactInformation"
            name="contactInformation"
            placeholder="Contact Information"
            value={formData.contact2.contactInformation}
            onChange={(e) => handleChange("contact2", "contactInformation", e.target.value)}
             />
          </Col>
        </Row>
  
        <Row className="mb-3">
          <h4 className="third-child">Contact 3 </h4>
          <Col lg={4}>
            <input  className="sidebar-input"  
            type="text"
            id="name"
            name="name"
            placeholder=" Name"
            value={formData.contact3.name}
            onChange={(e) => handleChange("contact3", "name", e.target.value)} />
          </Col>
          <Col lg={4}>
            <input type="email"
            id="email"
            name="email"
            placeholder=" Email"
            value={formData.contact3.email}
            onChange={(e) => handleChange("contact3", "email", e.target.value)}  />
          </Col>
          <Col lg={4}>
            <input type="text"
            id="contactInformation"
            name="contactInformation"
            placeholder="Contact Information"
            value={formData.contact3.contactInformation}
            onChange={(e) => handleChange("contact3", "contactInformation", e.target.value)}/>
          </Col>
        </Row>
        <button onClick={printData}>Print Data in JSON</button>
      </div>
    );
  }
  export default Step2;