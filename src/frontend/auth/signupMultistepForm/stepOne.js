import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaAddressBook, FaChild, FaDatabase, FaEuroSign, FaFacebookSquare, FaGlobe, FaInternetExplorer, FaNewspaper, FaRecycle, FaSignInAlt, FaTrophy } from "react-icons/fa";

function StepOne(params) {
    return(
        <>
        <div className="row ">
            <div className=" col-lg-6 mt-3">
                <input type="text" className="" name="firstname" placeholder=" firstname" />
            </div>
            <div className="col-lg-6 mt-3">
                <input type="text" className="" name="lastname" placeholder="lastname " />
            </div>
        </div>
        <div className="row ">
            <div className=" col-lg-6 mt-3">
                <input type="text" className="" name="Username" placeholder=" Username" />
            </div>
            <div className="col-lg-6 mt-3">
                <input type="email" className="" name="Email" placeholder="Email " />
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 mt-3">
                <input type="date" className="" id="DOB" placeholder="Date Of Birth" />

            </div>
            <div className="col-lg-6 mt-3">
                <input type="text" className="" id="Gender" placeholder="Gender" />
            </div>
        </div>
        <div className="row ">
            <div className="col-md-6 mt-3">
                <input type="password" className="" id="password" placeholder="Password" />
            </div>
            <div className="col-md-6 mt-3">
                <input type="password" className="" id="password" placeholder="Confirm Password" />
            </div>
        </div>
        <Row className="mt-3">
    <Col lg={6}></Col>
    <Col lg={6} className="text-end">
       
        </Col>
  </Row>
       

  <div className="footer_line mt-3">
                              <h6>Already have an account? <a className="page_move_btn" href="/login">Login</a></h6>
                           </div>
    </>
    );
}
export default StepOne;