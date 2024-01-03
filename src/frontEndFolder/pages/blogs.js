import React from "react"
import Search from "../components/search";
import Blog1 from "../../assets/img/blog/blog-1.jpg"
import Blog2 from "../../assets/img/blog/blog-2.jpg"
import Blog3 from "../../assets/img/blog/blog-3.jpg"
import Blog4 from "../../assets/img/blog/blog-4.jpg"
import Blog5 from "../../assets/img/blog/blog-5.jpg"
import Blog6 from "../../assets/img/blog/blog-6.jpg"
import Blog7 from "../../assets/img/blog/blog-7.jpg"
import Blog8 from "../../assets/img/blog/blog-8.jpg"
import Blog9 from "../../assets/img/blog/blog-9.jpg"
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";


function Blogs (){
    return(
<>
<Header/>
 <Hero/>
 <Search/>
 <div className="breadcrumb-section">
        <Container>
            <Row >
                <Col lg={12} >
                    <div className="breadcrumb-text">
                        <h2>Blogs</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
 
    <section className="blog-section blog-page spad">
        <Container className="container">
            <div className="row">
                <Col lg={4} md={6}>
                    <div className="blog-item set-bg" >
                        <img src={Blog1} />
                        <div className="bi-text">
                            <span className="b-tag">Travel Trip</span>
                            <h4><a href="./blog-details.html">Tremblant In Canada</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 15th April, 2019 </div>
                            <a href="room-details.html" className="primary-btn mt-3">More Details</a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="blog-item set-bg" >
                    <img src={Blog2} />
                        <div className="bi-text">
                            <span className="b-tag">Camping</span>
                            <h4><a href="./blog-details.html">Choosing A Static Caravan</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 15th April, 2019</div>
                            <a href="room-details.html" className="primary-btn mt-3">More Details</a>

                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="blog-item set-bg" >
                    <img src={Blog3} />
                        <div className="bi-text">
                            <span className="b-tag">Event</span>
                            <h4><a href="./blog-details">Copper Canyon</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 21th April, 2019</div>
                            <a href="room-details.html" className="primary-btn mt-3">More Details</a>

                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="blog-item set-bg" >
                    <img src={Blog4} />
                        <div className="bi-text">
                            <span className="b-tag">Trivago</span>
                            <h4><a href="./blog-details">A Time Travel Postcard</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 22th April, 2019</div>
                            <a href="room-details.html" className="primary-btn mt-3">More Details</a>

                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="blog-item set-bg" >
                    <img src={Blog5} />
                        <div className="bi-text">
                            <span className="b-tag">Camping</span>
                            <h4><a href="./blog-details.html">A Time Travel Postcard</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 25th April, 2019</div>
                            <a href="room-details.html" className="primary-btn mt-3">More Details</a>

                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="blog-item set-bg" >
                    <img src={Blog6} />
                        <div className="bi-text">
                            <span className="b-tag">Travel Trip</span>
                            <h4><a href="./blog-details.html">Virginia Travel For Kids</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 28th April, 2019</div>
                            <a href="room-details.html" className="primary-btn mt-3">More Details</a>

                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="blog-item set-bg" >
                    <img src={Blog7} />
                        <div className="bi-text">
                            <span className="b-tag">Travel Trip</span>
                            <h4><a href="./blog-details.html">Bryce Canyon A Stunning</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 29th April, 2019</div>
                            <a href="room-details.html" className="primary-btn mt-3">More Details</a>

                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="blog-item set-bg" >
                    <img src={Blog8} />
                        <div className="bi-text">
                            <span className="b-tag">Event & Travel</span>
                            <h4><a href="./blog-details.html">Motorhome Or Trailer</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 30th April, 2019</div>
                            <a href="room-details.html" className="primary-btn mt-3">More Details</a>

                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="blog-item set-bg" >
                    <img src={Blog9} />
                        <div className="bi-text">
                            <span className="b-tag">Camping</span>
                            <h4><a href="./blog-details.html">Lost In Lagos Portugal</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 30th April, 2019</div>
                            <a href="room-details.html" className="primary-btn mt-3">More Details</a>

                        </div>
                    </div>
                </Col>
                <Col lg={12} >
                    <div className="load-more">
                        <a href="#" className="primary-btn">Load More</a>
                    </div>
                </Col>
            </div>
        </Container>
    </section>
    <Footer/>
 </>
    );
}
export default Blogs;