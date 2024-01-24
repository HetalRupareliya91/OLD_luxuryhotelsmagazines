import React from 'react';
import News4 from '../../assets/img/news4.jpg';
import News5 from '../../assets/img/news5.jpg';
import News6 from '../../assets/img/news6.jpg';
import News7 from '../../assets/img/news7.jpg';
import { Col, Container, Image, Row } from 'react-bootstrap';
function LatestNews() {
    return (
        <section className="spad">
        <Container >
           <h1 className="text-center mb-5">Latets News</h1>
           
              <Row className=" mt-3">
                <Col lg={3} md={6}>
                   <figure>
                   <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                      <div className="thumbnail">
                         <div><button className="readmore">Read More</button></div>
                         <Image src={News5} alt=''/>
                      </div>
                   </figure>
                </Col>
                <Col lg={3} md={6}>
                   <figure>
                      
                   <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                      <div className="thumbnail">
                         <div><button className="readmore">Read More</button></div>
                         <Image src={News4}/>
                      </div>
                   </figure>
                </Col>
                <Col lg={3} md={6}>
                   <figure>
                   <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                      <div className="thumbnail">
                         <div><button className="readmore">Read More</button></div>
                         <Image src={News6} alt=''/>
                      </div>
                   </figure>
                </Col>
                <Col lg={3} md={6}>
                   <figure>
                   <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                      <div className="thumbnail">
                         <div><button className="readmore">Read More</button></div>
                         <Image src={News7}/>
                      </div>
                   </figure>
                </Col>
             </Row>
            
            
        </Container>
    </section>
    );
}
export default LatestNews