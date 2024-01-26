import React from 'react';
import News4 from '../../assets/img/news4.jpg';
import News5 from '../../assets/img/news5.jpg';
import News6 from '../../assets/img/news6.jpg';
import News7 from '../../assets/img/news7.jpg';
import { Col, Container, Row ,Image} from 'react-bootstrap';

function Collections() {
    return(
        <section className="services-section spad">
        <Container >
           <h1 className="text-center mb-5">Best Luxury Hotels Of The Year</h1>
            
              <Row className="mt-3">
                <Col lg={3} md={6}>
                   <figure>
                       <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                      <div className="thumbnail">
                         <div><a href='/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux' className="readmore">Read More</a></div>
                         <Image src={News4}/>
                      </div>
                   </figure>
                </Col>
                <Col lg={3} md={6}>
                   <figure>
                       <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                     
                      <div className="thumbnail">
                         <div><a href='/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux' className="readmore">Read More</a></div>
                         <Image src={News5}/>
                      </div>
                   </figure>
                </Col>
                <Col lg={3} md={6}>
                   <figure>
                       <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                      <div className="thumbnail">
                         <div><a href='/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux' className="readmore">Read More</a></div>
                         <Image src={News6}/>
                      </div>
                   </figure>
                </Col>
                <div className="col-lg-3 col-md-6">
                   <figure>
                       <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                      <div className="thumbnail">
                         <div><a href='/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux' className="readmore">Read More</a></div>
                         <Image src={News7}/>
                      </div>
                   </figure>
                </div>
             </Row>
            
            
        </Container>
    </section>
    );
}
export default Collections;