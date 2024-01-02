import React from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import Logo from "../../assets/img/logo.svg";
import {  FaEnvelope, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
function Header() {
    return(
<header className="header-section">
      <div className="top-nav">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="tn-left">
                    {/* <li><i className="fa fa-phone"></i> (12) 345 67890</li> */}
                <a href="mailto:Info@LuxuryHotelsMagazines.Com"><i ><FaEnvelope/></i>Info@LuxuryHotelsMagazines.Com</a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="tn-right">
                <div className="top-social">
                  <a href="#"><i ><FaFacebook /></i></a>
                  <a href="#"><i  aria-hidden="true"><FaYoutube /></i></a>
                  <a href="#"><i ><FaInstagram /></i></a>
                </div>
                <a href="#" className="bk-btn">Find Hotels</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="menu-item">
        <Container>
          <Row>
            <Col lg={2}>
              <div className="logo">
                <a href="/">
                  <Image src={Logo}  alt="" />
                </a>
              </div>
            </Col>
            <Col lg={10}>
            <div className="nav-menu">
                           <nav className="mainmenu">
                              <ul>
                                 <li className="active"><a href="/">Home</a></li>
                                 <li>
                                    <a href="/blogs">Publish Your News</a>
                                  
                                 </li>
                                 <li>
                                    <a href="/rooms">Luxury Hotels/Resorts</a>
                                   
                                 </li>
                                 <li><a href="/login">Login</a></li>
                                 <li><a href="/userprofile">Create Hotel Profile</a></li>
                              </ul>
                           </nav>
                           <div className="nav-right search-switch">
                              <i className="icon_search"></i>
                           </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
    );
}
export default Header;