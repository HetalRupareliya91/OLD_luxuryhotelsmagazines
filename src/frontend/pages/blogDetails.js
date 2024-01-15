import React, { useEffect, useState } from "react";
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
import { useLocation, useParams } from "react-router-dom";
import API from "../../utils";
import axios from "axios";
import CallToAction from "../components/callToAction";
 function BlogDetails() {

    const { news_id } = useParams();
  console.log(news_id);

  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a POST request with the id
        const response = await axios.post(
          `${API.BASE_URL}${API.ENDPOINTS.viewNews}`,
          { news_id: news_id },
          {
            headers: {
              Authorization: 'hXuRUGsEGuhGf6KM',
            },
          }
        );

        const responseData = response.data;

        if (responseData.status === true) {
          setPostData(responseData.data);
        } else {
          console.error('Failed to fetch post data');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    if (news_id) {
      fetchData();
    }
  }, [news_id]);
    return(
        
        <><Header />
        <section className="room-details-section spad">
            <div className="container">
            {postData ? (
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <h3 className="mt-0">{postData.news_title}</h3>
                               
                                {/* <div className="location"> <p><i ><FaMapMarker/></i> Courtyard by Marriott Nashik, Mumbai Naka, Mumbai-Agra National Highway, Nashik, 422001 Nashik, India</p></div> */}
                            </div>
                        </div>
                        <Row className="mb-5">
                            <Col lg={12} >
                            <Image src={postData.news_image} alt="postData.news_image" />
                            </Col>
                           
                        </Row>

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

                    </div>
                    <div className="col-lg-4">
                    {/* <h4 >Categories</h4>  */}
                    <h4 className="mb-3">Catagaries</h4>
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

                       
                        </div>
                    </div>
                   
                </div>
        ) : (   <p>Loading...</p>
        )}
                <Row className=" mt-5">
                    <Col lg={8} >
                    
                        <div className="rd-text">
                            <div className="rd-title">
                                <i className="fa fa-share-alt" aria-hidden="true"></i> Share This
                            </div>

                            <Row >
                                <Col lg={8} className="col-lg-8"><p className="f-para sharethis mt-2"><i aria-hidden="true"><FaFacebook /></i>
                                    <i aria-hidden="true"><FaTwitter /></i><i aria-hidden="true"><FaWhatsapp /></i><i aria-hidden="true"><FaTelegram /></i><i aria-hidden="true"><FaLinkedin /></i><i aria-hidden="true"><FaSnapchat /></i><i aria-hidden="true"><FaEnvelope /></i>
                                </p></Col>
                                <Col lg={4} className="col-lg-4 text-end">
                                    <p className="f-para likeview mt-2">
                                        <i aria-hidden="true">&nbsp;5 <FaEye /></i>
                                        <i aria-hidden="true">&nbsp;10 <FaHeart /></i>
                                        </p>
                                </Col>
                            </Row>


                        </div> 

                    </Col>

                </Row >
                <div className="alternate-hotels mt-3">
                            <div className="text-left m-4">
                                <h2>You May Also Like</h2>
                            </div>
                            <div className="card-deck">
                                
                                <div className="slider d-flex">   
                                    <div className="item">
                                        <div className="card">
                                            <img className="card-img-top" src={News5} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Hotel Taj</h5>
                                                <h6 className="card-title">India</h6>
                                                <p className="card-text">7.8/10 (Good)</p>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card">
                                            <img className="card-img-top" src={News1} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Hotel Taj</h5>
                                                <h6 className="card-title">England</h6>
                                                <p className="card-text">7.8/10 (Good)</p>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card">
                                            <img className="card-img-top" src={News2} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Hotel Taj</h5>
                                                <h6 className="card-title">Dubai</h6>
                                                <p className="card-text">7.8/10 (Good)</p>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card">
                                            <img className="card-img-top" src={News5} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Hotel Taj</h5>
                                                <h6 className="card-title">India</h6>
                                                <p className="card-text">7.8/10 (Good)</p>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        
        </section>
        <CallToAction/>
        <Footer />
    </>
    );
    
 }
 export default BlogDetails;