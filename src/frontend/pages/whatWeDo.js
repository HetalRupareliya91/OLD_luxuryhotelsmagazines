import React, { useState,useRef } from "react";
import { Col, Container, Form,  Image, Row } from "react-bootstrap";
import Logo from "../../assets/img/logo.svg"
import { FaBook, FaBookOpen, FaHandshake, FaLaptopMedical, FaLeaf, FaQuestionCircle, FaTrophy } from "react-icons/fa";
import MagazineImage from "../../assets/img/magazines/whatwedomagazineimage.png"
import icons from "../../assets/img/magazines/RETAILERS-LOGOS-4.png";
import printImage1 from "../../assets/img//magazines/1.jpg"
import printImage2 from "../../assets/img//magazines/2.jpg"
import printImage3 from "../../assets/img//magazines/4.jpg"
import printImage4 from "../../assets/img//magazines/5.jpg"
import printImage5 from "../../assets/img//magazines/3 (1).jpg"
import printImage6 from "../../assets/img//magazines/6.jpg"
import magazineImage from "../../assets/img/advertise/advmagazineimg.png"
import Tabs from "../components/tabs";
import ClientLogo from "../components/clientLogo";
import advimg1 from "../../assets/img/advertise/advertiseAustria.png"
import advimg2 from "../../assets/img/advertise/advertiseGreece.png"
import advimg3 from "../../assets/img/advertise/advertiseTasMania.png"
import advimg4 from "../../assets/img/advertise/advTaiwan.png"
import advimg5 from "../../assets/img/advertise/advbelize.png"
import { FaPhoneSquare, FaStar } from "react-icons/fa";
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News5 from '../../assets/img/news5.jpg'
import Slider from "react-slick";
import CallToAction from "../components/callToAction";
import Footer from "../components/footer";
import Magazines1 from  "../../assets/img/magazines/magazines.webp"
import Magazines2 from  "../../assets/img/magazines/magazines2.webp"
import Magazines3 from  "../../assets/img/magazines/magazines3.webp"
import Magazines4 from  "../../assets/img/magazines/magazines4.webp"
import Header from "../components/header";
import AdvertiseTestimonial from "../components/advertiseWithus/advertiseTestimonial";

function WhatWeDo() {


    const sliderRef = useRef(null);

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

const deals = [
    {
        title: advimg1,
        stars:  "\f149",
        description: "“Wanderlust are the ideal partner to work with for the UK market, with excellent editorial standards, and a loyal audience of avid travellers. When working with them we decided to promote an off-the-beaten path destination, in the region of Thrace and the result well-and-truly impressed us! Wanderlust is the best avenue when presenting a new destination/experience/offer to the world!”",
    },
    {
        title: advimg2,
        stars: "*****",
        description: " “Wanderlust interpreted our ideas and suggestions brilliantly to come up with a very impactful piece of collateral that portrayed Tasmania’s adventure product in a way that had not been achieved in the UK before.”						",
    },
    {
        title: advimg3,
        stars: "*****",
        description: " “Wanderlust are the ideal partner to work with for the UK market, with excellent editorial standards, and a loyal audience of avid travellers. When working with them we decided to promote an off-the-beaten path destination, in the region of Thrace and the result well-and-truly impressed us! Wanderlust is the best avenue when presenting a new destination/experience/offer to the world!”						",
    },
    {
        title: advimg4,
        stars: "*****",
        description: " “The Taiwan Tourism Board needed to find a UK media partner that is well respected, widely known and able to deliver campaigns that satisfy challenging briefs. Wanderlust was able to exceed expectations on all these points and we look forward to working with them again in the future.”	",
    },
    {
        title: advimg5,
        stars: "*****",
        description: "“Our campaign with Wanderlust exceeded all expectations (212% of proposed target engagement). We were incredibly pleased with the results and will continue to work with Wanderlust on other campaigns.”",
    },

]
    const [activeTab, setActiveTab] = useState("Zoom");

    const openLink = (animName) => {
        setActiveTab(animName);
    }


    return (
        <>
        <Header/>
            <section className="what-we-do-section">
                <Container>
                   
                    <div className="main-div">


                        <div className="w-100 " >


                            <div className="text-center title-subtitle">
                                Leading the way in authentic, experiential and adventurous travel
                            </div>

                            <div className="text-center liner-continer">
                                <span className="left-line"></span>
                                <span className="woodmart-title-container ">Since 1993</span>
                                <span className="right-line"></span>
                            </div>

                            <Row>
                                <Col lg={3}></Col>
                                <Col lg={6}> 
                                   <div className="text-center wpb_wrapper">

                                    <p>Whether you are looking to reach Wanderlust’s audience of active, engaged travellers or want to find out how targeted, inspirational travel content can support your brand, we’re the perfect partner to work with.</p>
                                </div></Col>
                            </Row>

                            <div>
                                <Row>
                                    <Col lg={3} className="what-we-do-col">
                                        <div>
                                            <div>
                                                <FaTrophy className="element-icon m-0" />
                                            </div>
                                            <h4 className="title">AWARD-WINNING   </h4>
                                        </div>
                                        <div >
                                            <p>Over 100 awards </p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="what-we-do-col">
                                        <div>
                                            <div>
                                                <FaHandshake className="element-icon m-0" />
                                            </div>
                                            <h4 className="title">AWARD-WINNING   </h4>
                                        </div>
                                        <div>
                                            <p>Over 100 awards </p>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="what-we-do-col">
                                        <div>
                                            <div>
                                                <FaLaptopMedical className="element-icon m-0" />
                                            </div>
                                            <h4 className="title">AWARD-WINNING   </h4>
                                        </div>
                                        <div>
                                            <p>Over 100 awards </p>
                                        </div>
                                    </Col>

                                    <Col lg={3} className="what-we-do-col">
                                        <div>
                                            <div>
                                                <FaLeaf className="element-icon m-0" />
                                            </div>
                                            <h4 className="title">AWARD-WINNING   </h4>
                                        </div>
                                        <div>
                                            <p>Over 100 awards </p>
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                            <div className="title-subtitle text-center">
                                Learn about our campaign options
                            </div>
                            <div className="liner-continer">
                                <span className="left-line"></span>
                                <span className="woodmart-title-container title  woodmart-font-weight-">Choose your interest</span>
                                <span className="right-line"></span>
                            </div>

                            <div className="d-flex justify-content-around mb-5">
                                <button>
                                    PRINT CAMPAIGNS

                                </button>
                                <button>DIGITAL CAMPAIGNS</button>
                            </div>
                        </div>

                    </div>

                </Container>

            </section>
          
            <section className="what-we-do-print-section">

                <Container>

                    <div className="main-div text-center ">
                        <div className="title-subtitle">PRINT</div>

                        <div className="liner-continer">
                            <span className="left-line"></span>
                            <span className="woodmart-title-container title ">Take a look at some of our print options below</span>
                            <span className="right-line"></span>
                        </div>

                        <div>
                            <Row>
                                <Col lg={6} >
                                    <div>
                                        <Image src={Magazines1}></Image>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="vc_column-inner text-left">
                                        <div className="mb-4">
                                            <h3>WANDERLUST MAGAZINE</h3>
                                        </div>
                                        <div className="mb-4">
                                            <p>With a new redesign, a readership of 100,000 and a bigger, higher-quality magazine than ever before, Wanderlust’s six collectable double issues a year take its engaged readers on a journey all across the world. Covering everywhere from the far-flung, undiscovered corners of the world to hidden sides of well-known destinations, our award-winning magazine inspires our audience of super travellers through powerful photography and expert-written copy and gives them a real insight into diversity of cultures, histories, people and nature from across the globe.</p>
                                        </div>
                                        <div>
                                            <p>6 times a year Readership – 100,000 </p>
                                               <p> (average per issue in 2020)</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="available-in">
                            <span className="left-line"></span>
                            <div>
                                <h6>AVAILABLE  IN</h6>
                            </div>


                        </div>
                        <div className="logos">
                            <Image src={icons}></Image>
                        </div>

                        <Row>
                            <Col lg={6}>
                                <div>
                                    <h2>Request your FREE digital sample to see why people love us.</h2>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <button><FaBookOpen className="m-0"/>  Request Digital Sample    </button>
                                </div>
                            </Col>
                        </Row>

                        <div className="available-in">
                            <span className="right-line"></span>
                        </div>
                    </div>

                </Container>
            </section>


            <section className="print-campaign-options">

                <Container>
                   <div className="text-center">
                        <Image src={Logo} className="print-campaign-logo"></Image>
                    </div>
                    <div className="title-subtitle text-center ">

                        Print Campaign Options
                    </div>

                    <div className="liner-continer">
                        <span className="left-line"></span>
                        <span className="woodmart-title-container title ">Hover over the options to see more information</span>
                        <span className="right-line"></span>
                    </div>


                    <Row className="image-flip-div">
                        <Col lg={3} className="p-5">
                            <div className="text-center">
                                <h3>Books</h3>

                            </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines1} />


                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">From bookazines and beautiful coffee table books to a ‘how to’ series and a quiz book, Wanderlust has numerous titles under its belt. We can work with you to publish high-quality evergreen content in book form. </p>
                                    </div>
                                </div>

                            </div>

                        </Col>

                        <Col lg={3} className="p-5">
                            <div className="text-center">
                                <h3>Sponsorship</h3> </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines2} />


                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">Sponsor one of our regular features to consistently get in front of our audience of serious travellers. Not only will this raise brand awareness but gives you an opportunity to show your expertise to our readers</p>
                                    </div>
                                </div>

                            </div>

                        </Col>


                        <Col lg={3} className="p-5">
                            <div className="text-center">
                                <h3>Supplements</h3> </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines1} />
                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">Wanderlust can produce a bespoke, high-quality print supplement for you that gives you the space to showcase all that your brand has to offer in a long-form piece with expert-written copy and stunning visuals.</p>
                                    </div>
                                </div>

                            </div>

                        </Col>

                        <Col lg={3} className="p-5">
                            <div className="text-center">
                                <h3>Display Advertising</h3> </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines2} />


                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">Where better to advertise your brand than in our relaunched magazine? With a higher design specification and even further distribution (including many of the top UK high street stores).</p>
                                    </div>
                                </div>

                            </div>

                        </Col>

                    </Row>

                    <div className="btn-div text-center ">
                        <button><FaQuestionCircle className="m-0 w-25 "/> More information</button>
                    </div>

                </Container>
            </section>


            <section className="what-we-do-digital-section">

                <Container>

                    <div className="main-div text-center ">
                        <div className="title-subtitle">DIGITAL</div>

                        <div className="liner-continer">
                            <span className="left-line"></span>
                            <span className="woodmart-title-container title ">Take a look at some of our print options below</span>
                            <span className="right-line"></span>
                        </div>

                        <div>
                            <Row>
                                <Col lg={6} >
                                    <div>
                                        <Image src={Magazines2}></Image>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="vc_column-inner text-left">
                                        <div className="mb-5">
                                            <h3>WANDERLUST MAGAZINE</h3>
                                        </div>
                                        <div className="mb-5">
                                            <p>Generating 1.2 million page views a month from an average of 682,000 unique users, our website is currently going through a re-design, offering a platform for you to reach serious travellers across the world with creative, interactive and inspiring online campaigns that can combine written content with video, audio, interactivity and much more.</p>
                                        </div>
                                        <div>

                                            <Row>
                                                <Col lg={6}>
                                                    <p className="mb-5">1.2 million page views a month
                                                        (average in 2020)
                                                        682k users per month (average
                                                        peak in 2020)</p>
                                                    <div className="mb-5"> <button><FaBookOpen className="m-0"/>Request Digital Issue</button></div>

                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <section className="special spad tabs-section" data-scrollax-parent="true">



                            <div className="content tabcontainer2">
                                <div>
                                    <div className="w3-sidebar w3-bar-block  w3-card">
                                        <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom')}><i className="fa fa-globe" aria-hidden="true"></i> Spain</button>
                                        <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom2' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom2')}><i className="fa fa-globe" aria-hidden="true"></i> Queensland</button>
                                        <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom3' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom3')}><i className="fa fa-globe" aria-hidden="true"></i> Great American West</button>
                                    </div>
                                    <div className="zoom-content">
                                        <div id="Zoom" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom' ? '' : 'hidden'}`}>
                                            <img src={Logo} alt="" className="w-50" />
                                            <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/D0UnqGm_miA?si=PdW4fKdvAkI6E_Oc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                        <div id="Zoom2" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom2' ? '' : 'hidden'}`}>
                                            <img src={Logo} alt="" className="w-50" />
                                            <p className="">industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
                                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/D0UnqGm_miA?si=PdW4fKdvAkI6E_Oc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                        <div id="Zoom3" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom3' ? '' : 'hidden'}`}>
                                            <img src={Logo} alt="" className="w-50" />
                                            <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/D0UnqGm_miA?si=PdW4fKdvAkI6E_Oc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>

                </Container>
            </section>



            <section className="digital-campaign-options">

<Container>
 <div className="text-center">
                        <Image src={Logo} className="digital-campaign-logo"></Image>
                    </div>
    <div className="title-subtitle text-center ">

    Digital  Campaign Options
    </div>

    <div className="liner-continer">
        <span className="left-line"></span>
        <span className="woodmart-title-container title ">Hover over the options to see more information</span>
        <span className="right-line"></span>
    </div>


    <Row className="image-flip-div">
        <Col lg={4} className="p-5">
            <div className="text-center">
                <h3>Video</h3>

            </div>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <Image src={Magazines1} />


                    </div>
                    <div class="flip-box-back">
                        <p className="heading">From bookazines and beautiful coffee table books to a ‘how to’ series and a quiz book, Wanderlust has numerous titles under its belt. We can work with you to publish high-quality evergreen content in book form. </p>
                    </div>
                </div>

            </div>

        </Col>

        <Col lg={4} className="p-5">
            <div className="text-center">
                <h3>E-Newsletters</h3> </div>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <Image src={Magazines2} />


                    </div>
                    <div class="flip-box-back">
                        <p className="heading">Sponsor one of our regular features to consistently get in front of our audience of serious travellers. Not only will this raise brand awareness but gives you an opportunity to show your expertise to our readers   Sponsor one of our regular features to consistently get in front of our audience of serious travellers. Not only will this raise brand awareness but gives you an opportunity to show your expertise to our readers Sponsor one of our regular features to consistently get in front of our audience of serious travellers. Not only will this raise brand awareness</p>
                    </div>
                </div>

            </div>

        </Col>


        <Col lg={4} className="p-5">
            <div className="text-center">
                <h3>Virtual Events</h3> </div>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <Image src={Magazines1} />
                    </div>
                    <div class="flip-box-back">
                        <p className="heading">Wanderlust can produce a bespoke, high-quality print supplement for you that gives you the space to showcase all that your brand has to offer in a long-form piece with expert-written copy and stunning visuals.</p>
                    </div>
                </div>

            </div>

        </Col>

    </Row>

    <div className="btn-div text-center ">
        <button><FaQuestionCircle className="m-0 w-25 "/> More information</button>
    </div>

</Container>
</section>

<section className="what-are-you-intersted-in spad">
<Container>
<div>
<div className="title-subtitle m-0">
What are you interested in?
                            </div>
                            <div className="woodmart-title-container w-25">
                            Submit the form below and we'll get back to you with the information you requested along with some great examples
                            </div>
                            <Form>

                                <Form.Label>
                                    What Is Your Name
                                </Form.Label>
                                <Form.Control
                                type="text"   
                                className="mb-3"                     
                                            >
                                    
                                </Form.Control>
                                <Form.Label>
                                Your work email 
                                </Form.Label>
                                <Form.Control
                                type="text" 
                                className="mb-3"                       
                                            >
                                    
                                </Form.Control>
                                <Form.Label>
                                Which Tourism Board are you representing?
                                </Form.Label>
                                <Form.Control
                                type="text"   
                                className="mb-3"                     
                                            >
                                    
                                </Form.Control>
                                <Form.Label>
                                    What Is Your Name
                                </Form.Label>
                                <Form.Control
                                type="text"  
                                className="mb-3"                      
                                            >
                                    
                                </Form.Control>
                                <Form.Label>
                                    What Is Your Name
                                </Form.Label>
                                <Form.Control
                                type="text" 
                                className="mb-3"                       
                                            >
                                    
                                </Form.Control>
                                <Form.Label>
                                Would you like to request a sample of our latest magazine issue?
                                </Form.Label>
                                <div className="d-flex mb-3">
            <Form.Check
                type="checkbox"
                
                name="sampleRequest"
                id="sampleRequestYes"
                className="pe-3"
            />
           <Form.Label className="pe-3">YES</Form.Label>
            <Form.Check
                type="checkbox"
                name="sampleRequest"
                id="sampleRequestNo"
                className="pe-3"
            />
            <Form.Label>NO</Form.Label>
        </div>


        <Form.Label>
            Select the campaign options you would like more information on
        </Form.Label>

        <div className="d-flex">
            <Form.Check
                type="checkbox"
                label="Sponsorship (print)"
                id="campaignSponsorship"
                className="pe-4"
            />
            <Form.Check
                type="checkbox"
                label="Supplements (print)"
                id="campaignSupplements"
                className="pe-4"
            />

  <Form.Check
                type="checkbox"
                label="Display Advertising (print)"
                id="campaignSupplements"
                className="pe-4"
            />
              <Form.Check
                type="checkbox"
                label="Book (print)"
                id="campaignSupplements"
                 className="pe-4"
                />
          


                     </div>     
                     <button className="mt-4 w-25">submit</button> 
                       </Form>
  
</div>

</Container>

</section>
<ClientLogo/>

<section className="what-we-do-slider-section ">
                <Container>
                 <AdvertiseTestimonial/>
                </Container>
            </section>


            <section className="case-study spad">   <Container>
                <div className="alternate-hotels mt-3">
                            <div className="text-center m-4">
                                <h2>Case Studies</h2>
                            </div>
                            <div className="card-deck">
                                <Row>
                                    <Col lg={4}>
                                        <div className="card">
                                            <img className="card-img-top" src={News5} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Hotel Taj</h5>
                                                <h6 className="card-title">India</h6>
                                                <p className="card-text">7.8/10 (Good)</p>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="card">
                                            <img className="card-img-top" src={News1} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Hotel Taj</h5>
                                                <h6 className="card-title">England</h6>
                                                <p className="card-text">7.8/10 (Good)</p>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="card">
                                            <img className="card-img-top" src={News2} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Hotel Taj</h5>
                                                <h6 className="card-title">Dubai</h6>
                                                <p className="card-text">7.8/10 (Good)</p>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div></Container></section>


                     
            <section >
                <Row>
                    <Col lg={6} className="what-we-do p-0">
                        <div className="hovermaindiv">
                        <div className="inner-div">
                            <div className="text-center">
                                <p>Continue Reading</p></div>
                            <div className="text-center">
                                <h2><a>ABOUT US</a></h2>
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
            <CallToAction/>
            <Footer/>
        </>
    );
}
export default WhatWeDo;