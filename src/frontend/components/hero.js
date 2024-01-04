import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import Hero1 from '../../assets/img/hero/hero-1.jpg';
import Hero2 from '../../assets/img/hero/hero-2.jpg';
import Hero3 from '../../assets/img/hero/hero-3.jpg';
function Hero(){
    return(
  <section className="hero-section">
         <Container >
            <Row >
               <Col lg={6} >
                  <div className="hero-text">
                     <h1>Sona A Luxury Hotel</h1>
                     <p>Here are the best hotel booking sites, including recommendations for international
                        travel and for finding low-priced hotel rooms.
                     </p>
                     <a href="#" className="primary-btn">Discover Now</a>
                  </div>
               </Col>
               <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
               </div>
            </Row>
         </Container>
         <div className="hero-slider ">
         <Carousel>
              <Carousel.Item>
                <img
                  // className="d-block w-100"
                  src={Hero1}
                  alt="First slide"
                  className="slider-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  // className="d-block w-100"
                  src={Hero2}
                  alt="Second slide"
                  className="slider-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  // className="d-block w-100"
                  src={Hero3}
                  alt="Third slide"
                  className="slider-img"
                />
              </Carousel.Item>
            </Carousel>
         </div>
      </section>  
    );
}
export default Hero;