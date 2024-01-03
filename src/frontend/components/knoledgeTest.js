import React from "react";
import News4 from '../../assets/img/news4.jpg';
import News5 from '../../assets/img/news5.jpg';
import News6 from '../../assets/img/news6.jpg';
import News7 from '../../assets/img/news7.jpg';
import { Col, Container, Row } from "react-bootstrap";
function KnoledgeTest(){
    return(
<section className="spad">
          <Container >
            <h2 className="text-center mb-4">Test your travel knowledge</h2>
            <Row >
               <Row className=" mt-3">
                 <Col lg={3} md={6} >
                    <figure>
                        {/* <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div> */}
                       <div className="thumbnail">
                          <div><button className="readmore">Read More</button></div>
                          <img src={News4}/>
                       </div>
                    </figure>
                 </Col>
                 <Col lg={3} md={6}>
                    <figure>
                        {/* <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div> */}
                        
                       <div className="thumbnail">
                          <div><button className="readmore">Read More</button></div>
                          <img src={News5}/>
                       </div>
                    </figure>
                 </Col>
                 <Col lg={3} md={6}>
                    <figure>
                        {/* <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div> */}
                       <div className="thumbnail">
                          <div><button className="readmore">Read More</button></div>
                          <img src={News6}/>
                       </div>
                    </figure>
                 </Col>
                 <Col lg={3} md={6}>
                    <figure>
                        {/* <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div> */}
                       <div className="thumbnail">
                          <div><button className="readmore">Read More</button></div>
                          <img src={News7}/>
                       </div>
                    </figure>
                 </Col>
              </Row>
             
             </Row>
          </Container>
      </section>
    );
}
export default KnoledgeTest;