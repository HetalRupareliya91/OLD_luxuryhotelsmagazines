import React from 'react'
import Header from '../components/header';
import Search from '../components/search';
import Footer from '../components/footer';
import Hero from '../components/hero';
import { Col, Container, Row } from 'react-bootstrap';
import Rooms4 from "../../assets/img/room/room-4.jpg"
import Rooms5 from "../../assets/img/room/room-5.jpg"
import Rooms6 from "../../assets/img/room/room-6.jpg"
import News5 from '../../assets/img/news5.jpg'
import News6 from '../../assets/img/news6.jpg'
import News7 from '../../assets/img/news7.jpg'

function Rooms(){
    return (
        <>
 <Header/>
 <Hero/>
 <Search/>

 <h1 className="text-center mt-5">Our Hotels</h1>
    <section className="rooms-section spad mt-5">
        <Container>
            <Row >
            <Col lg={6} ><h5 style={{lineHeight: "3",marginRight: "6px"}}>Showing 1–12 of 33 results
Default sorting</h5>
</Col>
            <div className="col-lg-6 text-right">
                  <div className="dropdown text-end ">
            <span className="dropdown-span" style={{lineHeight: "3",marginRight: "6px"}}>Sort By : </span>

            <div className="select-option shortdrop" style={{float: "right" ,width: "40%"}}>
                      <select className="select-id">
                         <option value="Afghanistan">Country</option>
                         <option value="Afghanistan">Afghanistan</option>
                         <option value="Åland Islands">Åland Islands</option>
                         <option value="Albania">Albania</option>
                         <option value="Algeria">Algeria</option>
                         <option value="American Samoa">American Samoa</option>
                         
                      </select>
                   </div>
          </div>
            </div>
        </Row>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <a href="room-details.html"><div className="room-item">
                        <img src={News5} alt=""/>
                        <div className="ri-text">
                            <h4>Jumeirah Al Qasr Hotel, Dubai</h4>
                              
                            <a href="room-details.html" className="primary-btn">More Details</a>
                        </div>
                    </div></a>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src={News6} alt=""/>
                        <div className="ri-text">
                            <h4>Jumeirah Al Qasr Hotel, Dubai</h4>
                             
                            <a href="room-details.html" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src={News7} alt=""/>
                        <div className="ri-text">
                            <h4>Jumeirah Al Qasr Hotel, Dubai</h4>
                             
                            <a href="room-details.html" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src={Rooms4} alt=""/>
                        <div className="ri-text">
                            <h4>Luxury Room</h4>
                             
                          
                            <a href="room-details.html" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src={Rooms5} alt=""/>
                        <div className="ri-text">
                            <h4>Symphony Style Hotel, Quorvus Collection</h4>
                             
                           
                            <a href="room-details.html" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src={Rooms6}alt=""/>
                        <div className="ri-text">
                            <h4>David Citadel Hotel  </h4>
                             
                           
                            <a href="room-details.html" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="room-pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">Next <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    <Footer/>
 </>
    );
}
export default Rooms;