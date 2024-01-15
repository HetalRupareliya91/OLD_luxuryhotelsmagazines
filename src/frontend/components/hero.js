import React, { useEffect, useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import Hero1 from '../../assets/img/hero/hero-1.jpg';
import Hero2 from '../../assets/img/hero/hero-2.jpg';
import Hero3 from '../../assets/img/hero/hero-3.jpg';
import axios from "axios";
import API from "../../utils";
function Hero(){
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetchMagazines();
  }, []);
  const fetchMagazines = async () => {
    const token = localStorage.getItem("token");



    try {
      const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allMagazines}`, {
        headers: {
          "Authorization": "Bearer " + token,
        }
      });
      const data = response.data;
      if (data.status === true) {
        setSliderData(data.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
 
    return(
  <section className="hero-section">
         <Container >
         
         <div className="hero-slider ">
          <Row>
            <Col lg={4} className="mt-3">
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
            </Col>
            <Col lg={8} className="mt-3">
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
            </Col>
          </Row>
    
         </div>
         </Container>
      </section>  
    );
}
export default Hero;