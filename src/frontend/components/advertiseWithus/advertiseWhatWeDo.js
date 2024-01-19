import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function AdvertiseWhatWeDo(){

    return(
        <section >
        <Row>
            <Col lg={6} className="what-we-do p-0">
                <div className="hovermaindiv">
                    <div className="inner-div">
                        <div className="text-center">
                            <p>Continue Reading</p></div>
                        <div className="text-center">
                            <h2><a href="what-we-do" style={{ color: "#e41d25" }}>WHAT WE DO</a></h2>
                        </div>
                    </div>
                </div>

            </Col>

            <Col lg={6} className="contact-us p-0">
                <div className="hovermaindivtwo">
                    <div className="inner-div">
                        <div className="text-center">
                            <p>Looks Great?</p></div>
                        <div className="text-center">
                            <h2><a>CONTACT US</a></h2>
                        </div>
                    </div>
                </div>

            </Col>
        </Row>

    </section>
    )

}
export default AdvertiseWhatWeDo;