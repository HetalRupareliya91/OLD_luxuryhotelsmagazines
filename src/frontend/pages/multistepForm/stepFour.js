import React, { useState } from "react";
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';

function Step4() {

  const [formData, setFormData] = useState({
    hotel_title:"",

    website: "",
    youtube_link:"",
    email: "",
    password: "",
    confirmPassword: "",
  });   
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
    return (
      <div>
        <Row className='mb-3'>
          <Col>
            <h6>
              Add Hotel to The Home Page Latest News?
            </h6>
            <div className="select-option">
              <select id="" className="sidebar-input">
                <option value="Kyrgyzstan">No</option>
                <option value="">Display For 1 Week (+10 Euro)</option>
                <option value="">Display For 1 Month (+25 Euro)</option>
  
              </select>
            </div>
          </Col>
        </Row>
  
        <Row className='mb-3'>
          <Col>
            <h6>
              Add Hotel to The Home Page Hotel Latest News?
            </h6>
            <div className="select-option">
              <select id="" className="sidebar-input">
                <option value="Kyrgyzstan">No</option>
                <option value="">Display For 1 Week (+10 Euro)</option>
                <option value="">Display For 1 Month (+25 Euro)</option>
  
              </select>
            </div>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <h6 className="third-child">
              Add Special Offer to The Homepage?
            </h6>
            <div className="select-option">
              <select id="" className="sidebar-input">
                <option value="Kyrgyzstan">No</option>
                <option value="">Display For 1 Week (+10 Euro)</option>
                <option value="">Display For 1 Month (+25 Euro)</option>
  
              </select>
            </div>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <h6>
              Add hotel to The Home Page Spotlight?
            </h6>
            <div className="select-option">
              <select id="" className="sidebar-input">
                <option value="Kyrgyzstan">No</option>
                <option value="">Display For 1 Week (+10 Euro)</option>
                <option value="">Display For 1 Month (+25 Euro)</option>
  
              </select>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  export default Step4;