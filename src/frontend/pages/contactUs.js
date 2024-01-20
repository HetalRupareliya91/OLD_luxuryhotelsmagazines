import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import bg2 from "../../assets/img/magazines/bg4.jpg"
import { Parallax } from "react-parallax";
import Header from "../components/header";
import Footer from "../components/footer";
import ReCAPTCHA from "react-google-recaptcha";
import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function ContactUs() {

    return (
<>
        <Header/>
        <Parallax blur={0} bgImage={bg2} bgImageAlt="the cat" strength={300}>
            <section className="Contact-us-section spad">
                <Container>

                    <div className="text-center mb-4">
                        <h1>Contact Us</h1>
                    </div>
                    <Row>
                       
                       <Col lg={7}>
                        <Form >
                          
                            <Form.Label>
                                Full Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                className="mb-3"
                                placeholder="Enter Your Full Name"
                            >

                            </Form.Control>
                            <Form.Label>
                              Email
                            </Form.Label>
                            <Form.Control
                                type="text"
                                className="mb-3"
                                placeholder="Enter Your Email"
                            >

                            </Form.Control>

<Form.Label>
    message
</Form.Label>
<Form.Control
    as="textarea"
    rows={4}
    className="mb-3"
    placeholder="Type your message here..."
>

</Form.Control>
<div className="text-center">
<ReCAPTCHA
                      sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                    //   onChange={handleVerification}
                    />
</div>
                           <div >
                            <button className="mt-4 w-25">SUBMIT</button>

                            </div>
                            <hr></hr>
                       
                        </Form>
                       
                        </Col>

                        <Col lg={5} className="connect-with-us">
                        <Form>
   
                        <div><h3>Connect With Us </h3></div>
                        <div className="fa-social">
                            <div><a href="#" className="fa-link"><i ><FaFacebook/></i></a><a>@LuxuryHotelsMagazines </a></div>
<div>
                          <a href="Info@LuxuryHotelsMagazines.Com" className="fa-link"><i ></i><FaEnvelope/></a> <a> info@luxuryhotelsmagazines.com</a></div>
                        <div>  <a href="#" className="fa-link"><i ><FaInstagram/></i></a><a>@LuxuryHotelsBrand</a></div>
                      <div>    <a href="#" className="fa-link"><i ></i><FaYoutube/></a><a>info@luxuryhotelsmagazines.com</a></div>
                       </div>
                       <hr></hr>
                       <div>
                        <div><a>Subscribe To Receive News
                            </a>
                            </div>
                            <div><a>Subscribe To Digital Copy
                            </a>
                            </div>
                            <div><a>Subscribe To Printed Copy
                            </a>
                            </div>
                          

                       </div>
                        </Form>
                        </Col>
                    </Row>

                    

                </Container>

            </section>
        </Parallax>

        <Footer/>
        </>

    );


}
export default ContactUs;