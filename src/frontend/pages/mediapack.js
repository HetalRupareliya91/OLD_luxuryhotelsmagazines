import React from "react";
import Header from "../components/header";
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
function Mediapack() {

    return (
        <>
            <Header />
            <section className="my-5">
                <Container>
                    <h2 className="text-center">MEDIA PACK</h2>
                    <div className="hotel-selection my-4">
                        <p>We are very pleased and proud to be working closely with the below group of Luxury Magazine staff and team members, who are responsible for running our offices and Luxury Hotels Brand around the world. Without them, we're nothing</p>
                    </div>
                </Container>
            </section>

            <section className="my-3">
                <Container>
                   
                </Container>                
            </section>


            <CallToAction />
            <Footer />

        </>
    );
}
export default Mediapack;