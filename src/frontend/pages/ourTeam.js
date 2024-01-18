import React from "react";
import Header from "../components/header";
import { Col, Container, Row } from "react-bootstrap";
import Team1 from "../../assets/img/team/team1.jpg";
import Team2 from "../../assets/img/team/team2.jpg";
import Team3 from "../../assets/img/team/team3.jpg";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
function OurTeam() {

    return (
        <>
            <Header />
            <section className="my-5">
                <Container>
                    <h2 className="text-center">MEET THE TEAM</h2>
                    <div className="hotel-selection my-4">
                        <p>We are very pleased and proud to be working closely with the below group of Luxury Magazine staff and team members, who are responsible for running our offices and Luxury Hotels Brand around the world. Without them, we're nothing</p>
                    </div>
                </Container>
            </section>

            <section className="my-3">
                <Container>
                    <Row >
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team1} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">TANYA</h5>
                                        <div className="d-flex">
                                            <p>CEO</p></div>
                                    </div>
                                </div>
                            </a>
                        </Col>

                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member ">
                                    <img src={Team2} alt="image"/>
                                    <div className="px-3">
                                        <h5 className="mt-3">JOHN</h5>
                                        <div className="d-flex">
                                            <p>EDITOR</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member ">
                                    <img src={Team3} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">ALINA</h5>
                                        <div className="d-flex">
                                            <p>WRITER</p></div>
                                    </div>
                                </div>
                            </a>
                        </Col>

                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team1} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">CHRIS</h5>
                                        <div className="d-flex">
                                            <p>Kuwait</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>


                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team2} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">RICHARD</h5>
                                        <div className="d-flex">
                                            <p>DEVELOPER</p></div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team3} alt="image"/>
                                    <div className="px-3" >
                                        <h5 className="mt-3">DENISH</h5>
                                        <div className="d-flex">
                                            <p>UK OFFICE DIRECTOR</p></div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team1} alt="image" />
                                    <div className="px-3" >
                                        <h5 className="mt-3">ALINA</h5>
                                        <div className="d-flex">
                                            <p>SUPPORTER</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team2} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">KELLY</h5>
                                        <div className="d-flex">
                                            <p>DESIGNER</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team3} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">ALEX</h5>
                                        <div className="d-flex">
                                            <p>CONTENT EDITOR</p></div>

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
export default OurTeam;