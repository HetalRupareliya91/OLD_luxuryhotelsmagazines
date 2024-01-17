import axios from "axios";
import React, { useEffect, useState } from "react"
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';
import API from "../../../utils";

function Step1() {

    return (
//       <div>
//         <Row className=" mb-3">
  
//           <Col lg={6}>
//             <input className="sidebar-input"
//   type="text"
//   id="hotelName"
//   name="hotelName"
//   placeholder="Hotel Name"
//   required
//   value={formData.hotelName}  
//   onChange={handleInputChange}/>
//           </Col>
  
//           <Col lg={6}>
//             <input className="sidebar-input" type="text" id="hotelWebsite" name="hotelWebsite" placeholder="Hotel Website" required value={formData.hotelWebsite}  
//   onChange={handleInputChange}/>
//           </Col>
//           <Col lg={6}>
//             <input className="sidebar-input" type="text" id="youtubeLink" name="youtubeLink" placeholder="Youtube Link"  value={formData.youtubeLink}  
//   onChange={handleInputChange}/>
//           </Col>
  
//           <Col lg={6}>
//             <div 
//             className="select-option" 
//              id="country"
//       value={formData.country} 
//       onChange={handleInputChange}>
//               <select id="" className="sidebar-input" >
//                 <option value="Kyrgyzstan">Country</option>
//                 <option value="Kyrgyzstan">Kyrgyzstan</option>
//                 <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
//                 <option value="Latvia">Latvia</option>
//                 <option value="Lebanon">Lebanon</option>
//                 <option value="Lesotho">Lesotho</option>
//                 <option value="Liberia">Liberia</option>
//                 <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
//                 <option value="Liechtenstein">Liechtenstein</option>
//                 <option value="Lithuania">Lithuania</option>
//                 <option value="Luxembourg">Luxembourg</option>
//                 <option value="Macao">Macao</option>
//               </select>
//             </div>
//           </Col>
//         </Row>
  
//         <Row className=" mb-3">
  
//           <Col lg={6}>
//             <input className="sidebar-input" type="text" id="location" name="location" placeholder="Location"  value={formData.location} 
//       onChange={handleInputChange}/>
//           </Col>
//           <Col lg={6}>
//             <input className="sidebar-input" type="text" id="contactImformation" name="contactImformation" placeholder="Contact Information"  value={formData.contactInformation} 
//       onChange={handleInputChange} />
//           </Col>
  
//         </Row>

//         <Row className=" mb-3">
//           <Col lg={12}>
//             <input className="sidebar-input" type="text" id="aboutHotel" name="aboutHotel" placeholder="Hotel Image"  value={formData.hotelImage} 
//       onChange={handleInputChange} />
//           </Col>
//         </Row>
//         <Row className=" mb-3">
//           <Col lg={12}>
//             <input className="sidebar-input" type="text" id="aboutHotel" name="aboutHotel" placeholder="About Hotel"  value={formData.aboutHotel} 
//       onChange={handleInputChange} />
//           </Col>
//         </Row>
  
//         <Row className=" mb-3">
//           <Col lg={12}>
//             <input className="sidebar-input" type="text" id="roomsAndSuites" name="roomsAndSuites" placeholder="Rooms And Suites"  value={formData.roomsAndSuites} 
//       onChange={handleInputChange} />
//           </Col>
//         </Row>
  
//         <Row className=" mb-3">
//           <Col lg={12}>
//             <input className="sidebar-input" type="text" id="restaurantsAndBars " name="restaurantsAndBars" placeholder="Restaurents And Bars (Optional)"  value={formData.restaurantsAndBars} 
//       onChange={handleInputChange}/>
//           </Col>
//         </Row>
//         <Row className=" mb-3">
//           <Col lg={12}>
//             <input className="sidebar-input" type="text" id="spaAndWellness " name="spaAndWellness" placeholder="Spa And Wellness (Optional)"  value={formData.spaAndWellness} 
//       onChange={handleInputChange} />
//           </Col>
//         </Row>
//         <Row className=" mb-3">
//           <Col lg={12}>
//             <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)"  value={formData.otherFacilities} 
//       onChange={handleInputChange}/>
//           </Col>
//         </Row>
//         <h5>Hotel Amenities</h5>
//         <Row className="mb-3">
//   <Col lg={6}>
//     <input className="sidebar-input" type="number" id="numberOfRooms" name="numberOfRooms" placeholder="Number Of Rooms" value={formData.numberOfRooms} onChange={handleInputChange} />
//   </Col>

//   <Col lg={6}>
//     <input className="sidebar-input" type="number" id="numberOfRestaurants" name="numberOfRestaurants" placeholder="Number Of Restaurants" value={formData.numberOfRestaurants} onChange={handleInputChange} />
//   </Col>
// </Row>
// <Row className="mb-3">
//   <Col lg={6}>
//     <input className="sidebar-input" type="number" id="outdoorSwimmingPool" name="outdoorSwimmingPool" placeholder="Outdoor Swimming Pool" value={formData.outdoorSwimmingPool} onChange={handleInputChange} />
//   </Col>

//   <Col lg={6}>
//     <input className="sidebar-input" type="number" id="bars" name="bars" placeholder="Bars" value={formData.bars} onChange={handleInputChange} />
//   </Col>
// </Row>

  
//         <Row className="mb-3">
//         {formData.amenitiesList.map((amenity) => (
//           <Col key={amenity.id} lg={3}>
//             <Form.Group controlId={`checkboxGroup-${amenity.id}`} className='d-flex'>
//               <Form.Check
//                 type="checkbox"
//                 id={amenity.id}
//                 name={amenity.name}
//                 className=' me-3'
//                 onChange={handleInputChange}
//               />
//               <label htmlFor={`checkbox-${amenity.id}`}>{amenity.title}</label>
//             </Form.Group>
//           </Col>
//         ))}
//       </Row>
//         <Row className="mb-3">
//           <Col lg={6}>
//             <input className="sidebar-input" type="text" id="otherInformation1" name="otherInformation1" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation1} 
//       onChange={handleInputChange} />
//           </Col>
//           <Col lg={6}>
//             <input className="sidebar-input" type="text" id="otherInformation2" name="otherInformation2" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation2} 
//       onChange={handleInputChange}/>
//           </Col>
//         </Row>

     
//     </div>
  <div></div>
    );
  }
  export default Step1