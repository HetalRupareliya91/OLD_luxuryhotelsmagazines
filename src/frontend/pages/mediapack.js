import React from "react";
import Header from "../components/header";
import { Col, Container, Row } from "react-bootstrap";
import SocialImage from "../../assets/img/mediapack/social.png";
import DigitalImage from "../../assets/img/mediapack/degitalpack.jpg";
import Team2 from "../../assets/img/team/team2.jpg";
import Team3 from "../../assets/img/team/team3.jpg";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
function Mediapack() {

    return (
        <>
            <Header />
            <section className="my-5">
                <Container>
                    <h2 className="text-center">MEDIA PACK</h2>
                </Container>
            </section>

            <section className="my-3">
                <Container>
                    <Row >
                        <Col lg={6} md={6}  >
                            <a href="">
                                <div>
                                    <img src={SocialImage} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Social Network Content Management, Influencer and Ambassador Program...</h5>
                                    </div>
                                </div>
                            </a>
                        </Col>

                        <Col lg={6} md={6}  >
                            <a href="">
                                <div >
                                    <img src={DigitalImage} alt="image"/>
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Hotels Media Kit- Luxury Hotels Digital and Printed version 2024...</h5>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={6} md={6}  >
                            <a href="">
                                <div>
                                    <img src={SocialImage} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Social Network Content Management, Influencer and Ambassador Program...</h5>
                                    </div>
                                </div>
                            </a>
                        </Col>

                        <Col lg={6} md={6}  >
                            <a href="">
                                <div >
                                    <img src={DigitalImage} alt="image"/>
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Hotels Media Kit- Luxury Hotels Digital and Printed version 2024...</h5>
                                    </div>
                                </div>
                            </a>
                        </Col><Col lg={6} md={6}  >
                            <a href="">
                                <div>
                                    <img src={SocialImage} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Social Network Content Management, Influencer and Ambassador Program...</h5>
                                    </div>
                                </div>
                            </a>
                        </Col>

                        <Col lg={6} md={6}  >
                            <a href="">
                                <div >
                                    <img src={DigitalImage} alt="image"/>
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Hotels Media Kit- Luxury Hotels Digital and Printed version 2024...</h5>
                                    </div>
                                </div>
                            </a>
                        </Col><Col lg={6} md={6}  >
                            <a href="">
                                <div>
                                    <img src={SocialImage} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Social Network Content Management, Influencer and Ambassador Program...</h5>
                                    </div>
                                </div>
                            </a>
                        </Col>

                        <Col lg={6} md={6}  >
                            <a href="">
                                <div>
                                    <img src={DigitalImage} alt="image"/>
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Hotels Media Kit- Luxury Hotels Digital and Printed version 2024...</h5>
                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>                
            </section>


            <CallToAction />
            <Footer />

        </>
    );
}
export default Mediapack;