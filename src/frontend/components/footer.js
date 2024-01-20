import React from "react";
import Logo from "../../assets/img/logo.svg";
import { FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaInstagram,FaTwitter,FaTripadvisor} from 'react-icons/fa';
import { Col, Container, Row } from "react-bootstrap";

function Footer(){

    return(
        <>
        <footer className="footer-section">
         
        <Container >
           
           <div className="footer-text">
              <Row className="row">
                 <Col lg={3} >
                    <div className="ft-about">
                       <div className="logo">
                          <a href="/">
                             <img src={Logo} alt="" className="footer-logo"/>
                                                     </a>
                       </div>
                       <p>BRAND RECOGNITION</p>
                      
                       <ul>
                          <li className="mb-4"><a href="#">Trademark Registry</a></li>
                          <li><a href="#">Branding Registration</a></li>
                       </ul>
                       <div className="fa-social">
                          <a href="#"><i ><FaFacebook/></i></a>
                          {/* <a href="Info@LuxuryHotelsMagazines.Com"><i ></i><FaEnvelope/></a> */}
                          <a href="#"><i ><FaInstagram/></i></a>
                          <a href="#"><i ></i><FaYoutube/></a>
                       </div>
                    </div>
                 </Col>
                 <Col lg={3}>
                    <div className="ft-newslatter">
                       <h6>About Us</h6>
                       <p><a href="/our-team" className="footer-links">Our Team</a></p>
                       <p><a href="/aboutus" className="footer-links">About Us</a></p>
                    <p><a href="hotels-selection" className="footer-links">Luxury Hotel Selection</a></p>
                    <p><a href="hotels-editions" className="footer-links">Luxury Hotels Editions</a></p>
                    </div>
                 </Col>
                 <Col lg={3}>
                    <div className="ft-newslatter">
                       <h6>ADVERTISERS</h6>
                       <p><a href="distribution" className="footer-links">Distribution</a></p>
                       <p><a href="userprofile" className="footer-links">Publish Your News/PR</a></p>
                       <p><a href="mediapack" className="footer-links">Media Pack</a></p>
                       <p><a href="advertise-with-us" className="footer-links">Advertise With Us</a></p>
                       <p><a href="signup" className="footer-links">Create Hotel Profile</a></p>
                    </div>
                 </Col>
                 <Col lg={3}>
                    <div className="ft-contact">
                       <h6>Contact Us</h6>
                       <ul>
                          <li><a href="">(12) 345 67890</a></li>
                          <li><a href="mailto:info@luxuryhotelsmagazines.com">Info@LuxuryHotelsMagazines.Com</a></li>
                          <li><a href="contact-us">Contact </a></li>
                       </ul>
                       <ul>
                          <li><a href="subscribe-to-news">Subscribe To Receive News </a></li>
                          <li ><a href="subcribe-digital-copy">Subscribe To Digital Copy</a></li>
                          <li><a href="subcribe-digital-copy">Subscribe To Printed Copy</a></li>
                       </ul>
                    </div>
                 </Col>
                 
              </Row>
           </div>
        </Container>
        <div className="copyright-option">
           <div className="container">
              <Row >
                 <Col lg={7}>
                    <ul>
                       <li><a href="#">Terms of use</a></li>
                       <li><a href="#">Privacy</a></li>
                       {/* <li><a href="#">Environmental Policy</a></li> */}
                    </ul>
                 </Col>
                 <Col lg={5} >
                    <div >
                       <p className="co-text">
                          © 2023 Copyright: Luxury Hotels Magazines.
                       </p>
                    </div>
                 </Col>
              </Row>
           </div>
        </div>
     </footer>
   
     <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
           <div className="search-close-switch"><i className="icon_close"></i></div>
           <form className="search-model-form">
              <input type="text" id="search-input" placeholder="Search here....."/>
           </form>
        </div>
     </div>
     </>
    );
}
export default Footer;