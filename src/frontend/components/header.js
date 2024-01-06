import React, { useState } from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import Logo from "../../assets/img/logo.svg";
import {  FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaToggleOn, FaToggleOff, FaBars } from 'react-icons/fa';
function Header() {
   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
     setMobileMenuOpen(!isMobileMenuOpen);
   };
   const closeMobileMenu = () => {
      setMobileMenuOpen(false); 
    };
    return(
<>
     
   <div className={`offcanvas-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} ></div>
   <div className="canvas-open" onClick={toggleMobileMenu} >
        {isMobileMenuOpen ? <FaBars /> : <FaBars />}
        
      </div>
      {isMobileMenuOpen && (
      <div className="offcanvas-menu-wrapper show-offcanvas-menu-wrapper">
      <div className="canvas-close"  onClick={closeMobileMenu}>
         <i className="icon_close">X</i>
      </div>
      <div className="search-icon  search-switch">
         <i className="icon_search"></i>
      </div>
      <div className="header-configure-area">
         <a href="/rooms" className="bk-btn">Find Hotels</a>
      </div>
      <nav className="mainmenu mobile-menu">
         <ul> 
            <li className="active"><a href="/">Home</a></li>
            <li>
               <a href="/">Hotels</a>
            </li>
            <li><a href="/blog">Blogs</a></li>
            <li><a href="/blog">Create Hotel Profile</a></li>
            <li><a href="/contact">Contact</a></li>
         </ul>
      </nav>
      <div id="mobile-menu-wrap"></div>
      <div className="top-social">
         <a href="#"><i ><FaFacebook/></i></a>
         <a href="#"><i  aria-hidden="true"><FaYoutube/></i></a>
         <a href="#"><i ><FaInstagram/></i></a>
      </div>
      <ul className="top-widget">
         <li><a href="mailto:Info@LuxuryHotelsMagazines.Com"><i className="fa fa-envelope"></i> Info@LuxuryHotelsMagazines.Com</a></li>
      </ul>
   </div>
    )}
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
                <a href="/rooms" className="bk-btn">Find Hotels</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="menu-item">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="logo">
                <a href="/">
                  <Image src={Logo}  alt="" />
                </a>
              </div>
            </Col>
            <Col lg={9}>
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
                                 <li><a href="/userprofile">Create Hotel/Blog Profile</a></li>
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
    </>
    );
}
export default Header;