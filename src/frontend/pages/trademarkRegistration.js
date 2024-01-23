import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import BrandingRegistrationPDF from '../../assets/pdf/Branding-Registration.pdf';
import TrademarkUKPDF from '../../assets/pdf/TradeMarkUK.pdf';
import CallToAction from "../components/callToAction";

function TrademarkRegistration() {

    return (
        <>
            <Header />
            <section className="py-5">
                <Container>
                    <div>
                        <h1>Luxury Hotels Brand Recognition And Countries Coverage</h1>
                    </div>

                    <Row>
                        <h2 className="py-5">Trademark Registration Uk</h2>
                        <Col md={12}>
                            <center><embed type="application/pdf" src={TrademarkUKPDF + "#toolbar=0&navpanes=0&scrollbar=0"} width="500" height="500" />
                            </center>
                        </Col>
                        <h2 className="py-5">Branding Registration</h2>
                        <Col md={12}>
                            <center><embed type="application/pdf" src={BrandingRegistrationPDF + "#toolbar=0&navpanes=0&scrollbar=0"} width="500" height="500" />
                            </center>
                        </Col>
                    </Row>

                </Container>
            </section>
            <CallToAction/>
            <Footer />
        </>

    );
}
export default TrademarkRegistration;