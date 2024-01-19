import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { FaPhoneSquare, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Magazines1 from  "../../../assets/img/magazines/magazines.webp"
import Magazines2 from  "../../../assets/img/magazines/magazines2.webp"
import Magazines3 from  "../../../assets/img/magazines/magazines3.webp"
import Hero3 from "../../../assets/img/hero/hero-3.jpg";

 function Advertise(){
    return(
        <>
        <Parallax blur={5} bgImage={Hero3} bgImageAlt="the cat" strength={100} className="advertise-first-section">
        <section>
            <h2 className="text-center text-white mt-4">Advertise With Us</h2>
            <Container className="adv-container">
                <Row>

                    <Col lg={4} className="p-5">
                        <div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <Image src={Magazines1} alt="Paris" />


                                </div>
                                <div class="flip-box-back">
                                    <h3>What included</h3>
                                    <p className="heading">Video Banner exposure to approximately 1 million subscribers
Reach 1.5 million monthly website visitors</p>
<p className="heading">Video Banner exposure to approximately 1 million subscribers
Reach 1.5 million monthly website visitors</p>
<p className="heading">Sharing Hotel Profile with 1 million
</p>
                                </div>
                            </div>

                        </div>
                        <div className="text-heading-button">

<div className="text-center mt-4">
<p className="heading1">€80/month
</p>
<p className="heading">
*Original price 450</p>
<p className="heading">
*Offer valid till 31-12-2023

</p>
</div>

</div>
                    </Col>

                    <Col lg={4} className="p-5">
                        <div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <Image src={Magazines2} alt="Paris" />


                                </div>
                                <div class="flip-box-back">
                                    <h3>What included</h3>
                                    <p className="heading">Sharing Hotel Profile with 1 million subscribers
Adjust Hotel profile at any time within a 6-months term</p>
<p className="heading">Sharing Hotel Profile with 1 million subscribers
Adjust Hotel profile at any time within a 6-months term</p>
<p className="heading">Sharing Hotel Profile with 1 million subscribers
Adjust Hotel profile at any time within a 6-months term</p>

                                </div>
                            </div>

                        </div>
                        <div className="text-heading-button">

                            <div className="text-center mt-4">
                                <p className="heading1">€80/month
                                </p>
                                <p className="heading">
                                    *Original price 450</p>
                                <p className="heading">
                                    *Offer valid till 31-12-2023

                                </p>
                            </div>
                         
                        </div>
                    </Col>


                    <Col lg={4} className="p-5">
                        <div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <Image src={Magazines3} alt="Paris" />
                                </div>
                                <div class="flip-box-back">
                                    <h3>What included</h3>
                                    <p className="heading">Relaunched in 2021 with a higher design spefication, more pages than ever and even further distribution. Our six collectable double issues a year reach an average readership of 100k</p>
                                    <p className="heading">Video Banner exposure to approximately 1 million subscribers
Reach 1.5 million monthly website visitors</p>
                                </div>
                            </div>

                        </div>
                        <div className="text-heading-button">

                            <div className="text-center mt-4">
                                <p className="heading1">€80/month
                                </p>
                                <p className="heading">
                                    *Original price 450</p>
                                <p className="heading">
                                    *Offer valid till 31-12-2023

                                </p>
                            </div>
                         
                        </div>
                    </Col>


                </Row>

            </Container>
        </section>

    </Parallax>

    </>
    );
}
export default Advertise;