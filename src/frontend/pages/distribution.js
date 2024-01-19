import React , { useRef } from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaAd, FaAward, FaCalendar, FaGlobe, FaNewspaper, FaShare, FaTrafficLight, FaUser } from "react-icons/fa";
import bgimg from "../../assets/img/news1.jpg"
import AdvertiseTestimonial from "../components/advertiseWithus/advertiseTestimonial";
import magazineImage from "../../assets/img/magazines/magazines.webp"
import { FaPhoneSquare } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Distribution() {

    const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

//    const deals = [
//     {
//       title: "Luxury Hotels Cyprus & Greece  ",
//       image:{magazineImage}
//     },
//     {
//       title: "Mandarin Oriental Guangzou",
//       image:{magazineImage}
//     },
//     {
//       title: "Mandarin Oriental Guangzou",
//       image:{magazineImage}
//     },
//     {
//       title: "Mandarin Oriental Guangzou",
//       image:{magazineImage}
//     },
//     {
//       title: "Mandarin Oriental Guangzou",
//       image:{magazineImage}
//     },
//     {
//       title: "Mandarin Oriental Guangzou",
//       image:{magazineImage}
//     },
//     {
//       title: "Mandarin Oriental Guangzou",
//       phone: "7779020705",
//       description: "Timeless luxury and legendary hospitality in exotic Lombok",
//       valid: "Valid from  05-01-2023 to 28-03-2024",
//     },
//     {
//       title: "Mandarin Oriental Guangzou",
     
//     },
//     {
//       title: "Mandarin Oriental Guangzou",
     
//     },

   
//   ];
    return (
        <>
            <Header />

            <section className="distribution-section spad">
                <Container>

                    <div className="text-center">
                        <div><h2>Distribution</h2></div>

                    </div>
                    <div>
                        <p>Luxury Hotels is a premier publication that produces annual digital [70%] and printed [30%] versions aimed at attracting luxury travelers in specific regions. The high-quality printed editions boast an impressive 100,000 copies distributed worldwide, each containing QR codes of the featured hotel. The digital editions have an impressive 4-5 million downloads annually according to statistics of 2022.</p>
                        <p>The publication's benefits are numerous. Hard and digital copies are distributed and promoted in 89 countries and hard copies are placed in every room of 40 Luxury Hotels in the publishing country. Digital versions are available for download on 5 digital platforms and digital promotion is carried out on 13 social networks, each of which attracts over 13 million monthly users. Hard copies are distributed on 8,500 luxury yachts across 5 European Marinas and 7 Middle East Marinas. Hard copies are also sent to 7,825 VIP clients, while digital copies are sent automatically to over 1 million Luxury Hotels subscribers.</p>
                        <p>The publication's rotation program presents each of the 40 Luxurious Hotels with a unique opportunity to lure clients from other hotels and exchange them with their own esteemed guests, resulting in a continuous influx of bookings. Consequently, each hotel can report a significant upsurge in bookings and room occupancy throughout the year, thereby creating a win-win scenario for all participating hotels.</p>
                        <p>The publication has also implemented AI technology, enabling every newly published hotel to be shared online with their 1 million Luxury Hotels subscribers. Overall, Luxury Hotels provide an excellent platform for Luxury Hotels to showcase their unique offerings and attract high-end clients from around the world.</p>
                    </div>


                </Container>
            </section>


            <section className="our-section-div spad">
                <Container>
                    <div className="text-center mb-4">
                        <h1>Our Services</h1>
                    </div>
                    <Row>
                        
                        <Col lg={3} className="mb-5">
                            <div className="service-include">
                                <div>
                                    <FaAd className="service-logo" />
                                </div>
                                <span>
                                    Printed Version of Luxury Hotels Promoted in 89 Countries

                                </span>
                            </div>
                        </Col>
                        <Col lg={3} className="mb-5">
                            <div className="service-include">
                                <div>
                                    <FaNewspaper className="service-logo" />
                                </div>
                                <span>
                                    Printed Version of Luxury Hotels Promoted in 89 Countries

                                </span>
                            </div>
                        </Col>
                        <Col lg={3} className="mb-5">
                            <div className="service-include">
                                <div>
                                    <FaCalendar className="service-logo" />
                                </div>
                                <span>
                                    Printed Version of Luxury Hotels Promoted in 89 Countries

                                </span>
                            </div>
                        </Col>
                        <Col lg={3} className="mb-5">
                            <div className="service-include">
                                <div>
                                    <FaGlobe className="service-logo" />
                                </div>
                                <span>
                                    Printed Version of Luxury Hotels Promoted in 89 Countries

                                </span>
                            </div>
                        </Col>
                        

 <Col lg={3}>
                            <div className="service-include">
                                <div>
                                    <FaTrafficLight className="service-logo" />
                                </div>
                                <span>
                                    Printed Version of Luxury Hotels Promoted in 89 Countries

                                </span>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="service-include">
                                <div>
                                    <FaUser className="service-logo" />
                                </div>
                                <span>
                                    Printed Version of Luxury Hotels Promoted in 89 Countries

                                </span>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="service-include">
                                <div>
                                    <FaShare className="service-logo" />
                                </div>
                                <span>
                                    Printed Version of Luxury Hotels Promoted in 89 Countries

                                </span>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div className="service-include">
                                <div>
                                    <FaAward className="service-logo" />
                                </div>
                                <span>
                                    Printed Version of Luxury Hotels Promoted in 89 Countries

                                </span>
                            </div>
                        </Col>
                        </Row>
                  
                </Container>
            </section>

{/* 
            <section className="instagram-section">
<Container>

    <div>
        <div className="text-center">
            <h1>Instagram / #Luxuryhotelsbrand</h1>
        </div>
        <div className="d-flex justify-content-between ">

            <div className="d-flex">
                <div className="insta-section-logo">


</div>
<div><p>Luxury Hotels</p>
<p>288 Posts</p></div>

            </div>
            <button className="w-25"> Follow</button>
        </div>

        <AdvertiseTestimonial/>

    </div>
</Container>
            </section> */}

            <section className="forthcoming-editions spad">

                <Container>
                    <div>

                        <div className="text-center mb-4">
                            <h1>Forthcoming Editions</h1>
                        </div>

                        <div className="mb-4 text-left">
<div><h2>(1) Luxury Hotels Dubai And Abu Dhabi</h2></div>
                        <Row>
                            
                            <Col lg={6}>
                                <div>
                                  <Image src={magazineImage}/>
                                </div>
                            </Col>
                            <Col lg={6} className="content-section">    
                                <div className="d-flex justify-content-between mx-4 mt-3">
                                <div>
                                   <p>Hard Copies</p>
                                   <p>120,000</p>
                                </div>
                                <div>
                                   <p>Digital Copies</p>
                                   <p>4,5 Million Readers</p>
                                </div>
                                </div>

                                <div className="listing">
                                    <ul >
                                        <li>
                                        In every Room of 40 Luxury Hotels across Dubai & Abu Dhabi
                                        </li>
                                        <li>
                                        Digital edition garners 4-5 million downloads per Edition
                                        </li>
                                        <li>
                                        romotion extended to 89 countries
                                        </li>
                                        <li>
                                        Digital copies with your Ads sent to our 1 million subscribers
                                        </li>
                                        <li>
                                        our Ads will be Promoted across our 13 Social Networks  reaching 13 Million Subscribers every month
qYour 2 Ads will be Promoted on Lux
                                        </li>
                                        <li>
                                        Your 2 Ads will be Promoted on Luxury Hotels Magazine Online Platform
                                        </li>
<li>Wide distribution on Luxury Yachts in Cyprus, Greece, Monaco, Dubai, and Abu Dhabi Marinas.</li>
<li>Six-months FREE Hotel profile with (Special offer) on Luxury Hotels Magazine Online Platform</li>

<li>Each hotel will be nominated and voted on by our readers as “The Best & Most Luxury Hotel of the Year" with access to data on the voting clients</li>

                                    </ul>
                                </div>

                                <div>
                                <div>
                                   <p>Geographic Spread:</p>
                                   <p>100% Dubai & Abu Dhabi</p>
                                </div>
                                <div>
                                  
                                  <button>Click Here</button>
                                </div>
                                </div>

                            </Col>
                        </Row >
                        </div>

                        <div className="mt-4">
                            <div >
                                <h2>(2) Luxury Hotels Europe</h2>
                            </div>
                        <Row>
                            <Col lg={6} className="order-2">
                                <div>
                                  <Image src={magazineImage}/>
                                </div>
                            </Col>
                            <Col lg={6} className="content-section order-1 ">    
                                <div className="d-flex justify-content-between mx-4 mt-3">
                                <div>
                                   <p>Hard Copies</p>
                                   <p>120,000</p>
                                </div>
                                <div>
                                   <p>Digital Copies</p>
                                   <p>4,5 Million Readers</p>
                                </div>
                                </div>

                                <div className="listing">
                                    <ul >
                                        <li>
                                        In every Room of 40 Luxury Hotels across Dubai & Abu Dhabi
                                        </li>
                                        <li>
                                        Digital edition garners 4-5 million downloads per Edition
                                        </li>
                                        <li>
                                        romotion extended to 89 countries
                                        </li>
                                        <li>
                                        Digital copies with your Ads sent to our 1 million subscribers
                                        </li>
                                        <li>
                                        our Ads will be Promoted across our 13 Social Networks  reaching 13 Million Subscribers every month
qYour 2 Ads will be Promoted on Lux
                                        </li>
                                        <li>
                                        Your 2 Ads will be Promoted on Luxury Hotels Magazine Online Platform
                                        </li>
<li>Wide distribution on Luxury Yachts in Cyprus, Greece, Monaco, Dubai, and Abu Dhabi Marinas.</li>
<li>Six-months FREE Hotel profile with (Special offer) on Luxury Hotels Magazine Online Platform</li>

<li>Each hotel will be nominated and voted on by our readers as “The Best & Most Luxury Hotel of the Year" with access to data on the voting clients</li>

                                    </ul>
                                </div>

                                <div>
                                <div>
                                   <p>Geographic Spread:</p>
                                   <p>100% Dubai & Abu Dhabi</p>
                                </div>
                                <div>
                                  
                                  <button>Click Here</button>
                                </div>
                                </div>

                            </Col>
                        </Row>
                        </div>
                    </div>
                </Container>
            </section>


            <section>
                <Container>

                    {/* <div>
                        <h1>DownLoad Our Full Media Pack</h1>
                    </div> */}

                    {/* <Slider {...sliderSettings} ref={sliderRef}>
          {deals.map((deal, index) => (
            <div key={index} className="text-center exclusive-deals">
              <a>
                <h6>{deal.title}</h6>
              </a>
              <div>
                <FaPhoneSquare className="phone-icon m-0" />
              </div>
              <div>
                <a>
                  <span>{deal.phone}</span>
                </a>
              </div>
              <div>
                <a>
                  <h6>{deal.description}</h6>
                </a>
              </div>
              <div>
                <span className="valid">{deal.valid}</span>
              </div>
              <hr className="m-0"/>
              <div>
                <span>
                  Stay with us for three or five nights at The Oberoi Beach Resort,
                  Lombok. For the holiday of a lifetime.
                </span>
              </div>
            </div>
          ))}
        </Slider> */}
                </Container>


            </section>
        </>
    );
}
export default Distribution;