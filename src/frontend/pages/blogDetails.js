import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import {  FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram, FaLinkedin, FaSnapchat, FaEye, FaHeart, FaMapMarker, FaBuilding, FaSpaceShuttle, FaHome, FaList, FaPencilAlt } from 'react-icons/fa';

import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News3 from '../../assets/img/news3.jpg'
import News4 from '../../assets/img/news4.jpg'
import News5 from '../../assets/img/news5.jpg'
import News6 from '../../assets/img/news6.jpg'
import Logo from "../../assets/img/logo.svg"

import { Col, Container, Image, Row } from "react-bootstrap";
 function BlogDetails() {

    return(
        <><Header />
        <section className="room-details-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <h3 className="mt-0">Commercial + Residential Apartments Off-Plan Project With 50% ROI Located On A Sea Front In Cyprus</h3>
                               
                                {/* <div className="location"> <p><i ><FaMapMarker/></i> Courtyard by Marriott Nashik, Mumbai Naka, Mumbai-Agra National Highway, Nashik, 422001 Nashik, India</p></div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <img src={News5} alt="" />
                            </div>
                           
                        </div>

                    </div>
                    <div className="col-lg-4 ">
                    <h4 className="mb-3">You May ALso Like</h4>
 
                        <div className="also-like">
                          <Row className="mb-2">
                            <Col lg={6}>
                            <img className="contentcollection_itemimage2" src={News1} />
                            </Col>
                            <Col>
                            <h7 className="contentcollection_itemtext2">Commercial off-plan Project on a Sea...</h7>
                            </Col>

                          </Row>
                          <Row className="mb-2">
                            <Col lg={6}>
                            <img className="contentcollection_itemimage2" src={News3} />
                            </Col>
                            <Col>
                            <h7 className="contentcollection_itemtext2">Gili Air Hotel, Indonesia ...</h7>
                            </Col>

                          </Row>
                          <Row className="mb-2">
                            <Col lg={6}>
                            <img className="contentcollection_itemimage2" src={News4} />
                            </Col>
                            <Col>
                            <h7 className="contentcollection_itemtext2">Grand Opening ceremony, Royal Dubai...</h7>
                            </Col>

                          </Row>
                          <Row className="mb-2">
                            <Col lg={6}>
                            <img className="contentcollection_itemimage2" src={News5} />
                            </Col>
                            <Col>
                            <h7 className="contentcollection_itemtext2">Cyprus & Greece Magazine 2023 ....</h7>
                            </Col>
                          </Row>
                          <Row className="mb-2">
                            <Col lg={6}>
                            <img className="contentcollection_itemimage2" src={News6} />
                            </Col>
                            <Col>
                            <h7 className="contentcollection_itemtext2">Commercial off-plan Project on a Sea...</h7>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                            <img className="contentcollection_itemimage2" src={News1} />
                            </Col>
                            <Col>
                            <h7 className="contentcollection_itemtext2">Commercial off-plan Project with 50% ROI located on a Sea...</h7>
                            </Col>
                          </Row>
                        </div>
                        <div>


                        </div>
                    </div>
                </div>
        
                <div className="row mt-5">
                    <div className="col-lg-8">
                        <div className="rd-text">
                           
                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>
                        <div className="rd-text">
                         
                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>
                        <div className="rd-text">
                           
                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>
                        <div className="rd-text">
                         
                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>
                        {/* <div className="rd-text">
                            <div className="rd-title">
                                <i  aria-hidden="true"><FaHome/></i> Spa & Wellness
                            </div>


                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div> */}
                        {/* <div className="rd-text">
                            <div className="rd-title">
                                <i  aria-hidden="true"><FaList/></i> Other Facilities
                            </div>


                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>
                        <div className="rd-text">
                            <div className="rd-title">
                                <i  aria-hidden="true"><FaPencilAlt/></i>  Additional information
                            </div>


                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>*/}
                        <div className="rd-text">
                            <div className="rd-title">
                                <i className="fa fa-share-alt" aria-hidden="true"></i> Share This
                            </div>

                            <div className="row">
                                <div className="col-lg-8"><p className="f-para sharethis mt-2"><i aria-hidden="true"><FaFacebook /></i>
                                    <i aria-hidden="true"><FaTwitter /></i><i aria-hidden="true"><FaWhatsapp /></i><i aria-hidden="true"><FaTelegram /></i><i aria-hidden="true"><FaLinkedin /></i><i aria-hidden="true"><FaSnapchat /></i><i aria-hidden="true"><FaEnvelope /></i>
                                </p></div>
                                <div className="col-lg-4 text-end">

                                    <p className="f-para likeview mt-2">
                                        <i aria-hidden="true">&nbsp;5 <FaEye /></i>
                                        <i aria-hidden="true">&nbsp;10 <FaHeart /></i>
                                        </p>
                                </div>
                            </div>


                        </div> 

                    </div>
                    <div className="col-lg-4">
                    {/* <h4 >Categories</h4>  */}
                    <div className="category-div">
                        
                        <Row className="mt-2 mb-2">
                            <Col lg={12}>
                           <a><span>Super Cars</span></a>
                           <hr/>
                            </Col>
                            <Col lg={12}>
                            <a><span>Boutiques & Jewellery</span></a>  
                            <hr/>                     
                             </Col>
                             <Col lg={12}>
                            <a><span>Spa & Beauty</span></a>  
                            <hr/>                     
                             </Col>
                             <Col lg={12}>
                            <a><span>Hotels & Resorts</span></a>   
                            <hr/>                    
                             </Col>
                             <Col lg={12}>
                            <a><span>Properties</span></a>     
                            <hr/>                 
                             </Col>
                             <Col lg={12}>
                            <a><span>Restaurants/Bars</span></a>                       
                             </Col>


                          </Row>
                        </div>
                        <div className="hotel-logo mt-3">
                            <img src={Logo} alt="" className="w-50" />
                        </div>
                        <div className=" ">
                            <form action="#" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h5 className="text-center px-4 mt-0">VOTE FOR THE BEST LUXURY HOTELS OF THE YEAR</h5>
                                        <input type="text" placeholder="Your Full Name" />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" placeholder="Your Email" />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Describe Your Experience"></textarea>
                                        <button type="submit" className=" btn-default">Submit Now</button>
                                    </div>
                                </div>
                            </form>

                            <div className="youtube-video mt-3">
                                <iframe width="100%" height="200" src="https://www.youtube.com/embed/D0UnqGm_miA?si=qnB4y7REmVnd-Lyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>

                            {/* <div className="locationmap mt-3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29759.049789885605!2d72.75953112132576!3d21.196876856223426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c351ceae251%3A0x1d35b30f855a2c36!2sAdajan%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703916461865!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                            </div>
                            <div className="row  ">
                                <div className="col-lg-6 mt-3 text-center"><button className=" btn-default w-100">Book Online</button></div>
                                <div className="col-lg-6 mt-3 text-center"><button className=" btn-default w-100">Visit Website</button>

                                </div>
                                <div className="col-lg-12 mt-3 text-center"><a href="/pricing-plan"><button className=" btn-default w-100">Claim Listing</button></a>
                                </div>


                            </div> */}
                        </div>
                    </div>







                </div>
            </div>
        </section>
        <Footer />
    </>
    );
    
 }
 export default BlogDetails;