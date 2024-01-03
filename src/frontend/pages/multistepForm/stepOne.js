import React from "react"
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';

function Step1() {
    return (
      <div>
        <Row className=" mb-3">
  
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="hotelName" name="hotelName" placeholder="Hotel Name" required />
          </Col>
  
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="hotelWebsite" name="hotelWebsite" placeholder="Hotel Website" required />
          </Col>
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="YoutubeLink" name="YoutubeLink" placeholder="Youtube Link" required />
          </Col>
  
          <Col lg={6}>
            <div className="select-option">
              <select id="" className="sidebar-input" >
                <option value="Kyrgyzstan">Country</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
              </select>
            </div>
          </Col>
        </Row>
  
        <Row className=" mb-3">
  
          <Col lg={6}>
            <div className="select-option">
              <select id="" className="sidebar-input">
                <option value="Kyrgyzstan">State</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
              </select>
            </div>           </Col>
  
          <Col lg={6}>
            <div className="select-option">
              <select id="" className="sidebar-input">
                <option value="Kyrgyzstan">City</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row className=" mb-3">
  
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="location" name="location" placeholder="Location" />
          </Col>
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="contactImformation" name="contactImformation" placeholder="Contact Information" required />
          </Col>
  
        </Row>
        <Row className=" mb-3">
          <Col lg={12}>
            <input className="sidebar-input" type="text" id="aboutHotel" name="aboutHotel" placeholder="About Hotel" required />
          </Col>
        </Row>
  
        <Row className=" mb-3">
          <Col lg={12}>
            <input className="sidebar-input" type="text" id="roomsAndSuites" name="roomsAndSuites" placeholder="Rooms And Suites" required />
          </Col>
        </Row>
  
        <Row className=" mb-3">
          <Col lg={12}>
            <input className="sidebar-input" type="text" id="restaurantsAndBars " name="restaurantsAndBars" placeholder="Restaurents And Bars (Optional)" />
          </Col>
        </Row>
        <Row className=" mb-3">
          <Col lg={12}>
            <input className="sidebar-input" type="text" id="spaAndWellness " name="spaAndWellness" placeholder="Spa And Wellness (Optional)" />
          </Col>
        </Row>
        <Row className=" mb-3">
          <Col lg={12}>
            <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)" />
          </Col>
        </Row>
        <h5>Hotel Amenities</h5>
        <Row className="mb-3">
          <Col lg={6}>
            <input className="sidebar-input" type="number" id="numberOfRooms " name="numberOfRooms" placeholder="Number Of Rooms" />
          </Col>
  
          <Col lg={6}>
            <input className="sidebar-input" type="number" id="numberOfRestaurents" name="numberOfRestaurents" placeholder="Number Of Restaurents" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col lg={6}>
            <input className="sidebar-input" type="number" id="outdoorSwimmingPool " name="outdoorSwimmingPool" placeholder="Outdoor Swimming Pool" />
          </Col>
  
          <Col lg={6}>
            <input className="sidebar-input" type="number" id="bars" name="bars" placeholder="Bars" />
          </Col>
        </Row >
  
        <Row className="mb-3">
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex '>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Spa</label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Gym</label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Indoor Pool</label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Private Beach</label>
            </Form.Group>
          </Col>
  
        </Row>
        <Row className="mb-3">
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex '>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Concierge Service </label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Sport classNamees</label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Tennis</label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Water Sports</label>
            </Form.Group>
          </Col>
  
        </Row>
        <Row className="mb-3">
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex '>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Concierge Service </label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Sport classNamees</label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Tennis</label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Water Sports</label>
            </Form.Group>
          </Col>
  
        </Row>
        <Row className="mb-3">
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex '>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Sun Beds</label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Beach Cabanas</label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Room Service</label>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group controlId="checkboxGroup" className='d-flex'>
              <Form.Check type="checkbox" id="checkbox1" className=' me-3' />
              <label htmlFor="checkbox1">Private Driver</label>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="otherInformation" name="otherInformation" placeholder="Other Information (40 Characters Maximum)" />
          </Col>
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="otherInformation" name="otherInformation" placeholder="Other Information (40 Characters Maximum)" />
          </Col>
        </Row>
      </div>
    );
  }
  export default Step1