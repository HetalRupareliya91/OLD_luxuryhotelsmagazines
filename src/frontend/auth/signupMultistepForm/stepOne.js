import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

function StepOne() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      
    return(
        <>
        <Row className="row ">
            <div className=" col-lg-6 mt-3">
                <input type="text" className="" name="name" placeholder="Name"value={formData.name}
            onChange={handleInputChange} />
            </div>
            <div className="col-lg-6 mt-3">
                <input type="email" className="" name="Email" placeholder="Email "  value={formData.email}
            onChange={handleInputChange} />
            </div>
        </Row>
     
        <Row >
            <Col md={6} className="mt-3">
                <input type="password" className="" id="password" placeholder="Password"  value={formData.password}
            onChange={handleInputChange} />
            </Col>
            <Col md={6} className=" mt-3">
                <input type="password" className="" id="password" placeholder="Confirm Password" value={formData.confirmPassword}
            onChange={handleInputChange}  />
            </Col>
        </Row>
        <Row className="re-captcha mt-3 ">
            <Col lg={12}>
            <ReCAPTCHA
                      sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                    //   onChange={handleVerification}
                    />
            </Col>
        </Row>
    
    
  <div className="footer_line mt-3">
                              <h6>Already have an account? <a className="page_move_btn" href="/login">Login</a></h6>
                           </div>
    </>
    );
}
export default StepOne;