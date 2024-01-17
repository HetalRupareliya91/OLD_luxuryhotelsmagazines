import React, { useState } from "react";
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';

function Step4() {
  const [formData, setFormData] = useState({
    addHotelToHomePageLatestNews: "",
    addHotelToHomePageHotelLatestNews: "",
    addSpecialOfferToHomepage: "",
    addHotelToHomePageSpotlight: "",
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
          <Col>
            <h6>
              Add Hotel to The Home Page Latest News?
            </h6>
            <div className="select-option">
              <select id="" className="sidebar-input" value={formData.addHotelToHomePageLatestNews}
              onChange={(e) => handleChange("addHotelToHomePageLatestNews", e.target.value)}>
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
              <select id="" className="sidebar-input" value={formData.addHotelToHomePageHotelLatestNews}
              onChange={(e) => handleChange("addHotelToHomePageHotelLatestNews", e.target.value)}
            >
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
              <select id="" className="sidebar-input"  value={formData.addSpecialOfferToHomepage}
              onChange={(e) => handleChange("addSpecialOfferToHomepage", e.target.value)}>
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
              <select id="" className="sidebar-input" value={formData.addHotelToHomePageSpotlight}
              onChange={(e) => handleChange("addHotelToHomePageSpotlight", e.target.value)}
>
                <option value="Kyrgyzstan">No</option>
                <option value="">Display For 1 Week (+10 Euro)</option>
                <option value="">Display For 1 Month (+25 Euro)</option>
  
              </select>
            </div>
          </Col>
        </Row>
        <butto onClick={printData}>print</butto>
      </div>
    );
  }
  export default Step4;