import React from "react";
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News3 from '../../assets/img/news3.jpg'
import News4 from '../../assets/img/news4.jpg'
import News5 from '../../assets/img/news5.jpg'
import News6 from '../../assets/img/news6.jpg'
import News7 from '../../assets/img/news7.jpg'
import about1 from '../../assets/img/about/about-1.jpg'
import about2 from '../../assets/img/about/about-2.jpg'
import HeroImage from '../../assets/img/hero/hero-2.jpg'
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
function AboutUs() {

    return(
        <>
            <section className="aboutus-section spad">
        <Container>
          <div className="hp-room-items">
            <h1 className="text-center mb-4">New Arrivals</h1>
            <Row>
              <Col lg={3} md={6}>
                <figure>
                  {/* <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div> */}
                  <div className="thumbnail">
                    <div>
                      <Button className="readmore">Read More</Button>
                    </div>
                    <Image src={News1} alt="" />
                  </div>
                </figure>
              </Col>
              <Col lg={6} md={6}>
                <figure>
                  {/* <div className="img-dec img-center">Jumeirah Al Qasr Hotel, Dubai</div> */}
                  <div className="thumbnail">
                    <div><Button className="readmore">Read More</Button></div>
                    <Image src={News2} alt="" />
                  </div>
                </figure>
              </Col>
              <Col lg={3} md={6}>
                <figure>
                  {/* <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div> */}
                  <div className="thumbnail">
                    <div><Button className="readmore">Read More</Button></div>
                    <Image src={News3} alt=""/>
                  </div>
                </figure>
              </Col>
            </Row>
              <Row className=" mt-3">
                 <Col lg={3} md={6}>
                    <figure>
                        {/* <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div> */}
                       <div className="thumbnail">
                          <div><button className="readmore">Read More</button></div>
                          <Image src={News4} alt=""/>
                       </div>
                    </figure>
                 </Col>
                 <Col lg={3} md={6}>
                    <figure>
                        {/* <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div> */}
                       
                       <div className="thumbnail">
                          <div><button className="readmore">Read More</button></div>
                          <Image src={News5} alt=""/>
                       </div>
                    </figure>
                 </Col>
                 <Col lg={3} md={6}>
                    <figure>
                        {/* <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div> */}
                       <div className="thumbnail">
                          <div><button className="readmore">Read More</button></div>
                          <Image src={News6} alt=""/>
                       </div>
                    </figure>
                 </Col>
                 <Col lg={3} md={6}>
                    <figure>
                        {/* <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div> */}
                       <div className="thumbnail">
                          <div><button className="readmore">Read More</button></div>
                          <Image src={News7} alt=""/>
                       </div>
                    </figure>
                 </Col>
              </Row>
           </div>
        
        </Container>
     </section>

     <Parallax blur={5} bgImage={HeroImage} bgImageAlt="the cat" strength={350}>

     <section className="special spad" >
         <div className="content">
            <div className="container">
               <div className="row ">
                  <div className="col-lg-6">
                     <div className="about-text">
                        <div className="section-title  ">
                           <span className="text-white">About Us</span>
                           <h2 className="text-white">Intercontinental LA <br />Westlake Hotel</h2>
                        </div>
                        <p className="f-para text-white">Sona.com is a leading online accommodation site. We’re passionate about
                           travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41
                           languages.
                        </p>
                        <p className="s-para text-white">So when it comes to booking the perfect hotel, vacation rental, resort,
                           apartment, guest house, or tree house, weve got you covered.
                        </p>
                        <a href="#" className="primary-btn about-btn text-white">Read More</a>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="about-pic">
                        <div className="row">
                           <div className="col-sm-6 col-6">
                              <Image src={about1} alt=""/>
                           </div>
                           <div className="col-sm-6 col-6">
                              <Image src={about2}alt=""/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
      </section>
      </Parallax>
      
</>
    );
}
export default AboutUs;