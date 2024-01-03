import React, { useState } from "react";
import Hotel from "../../assets/img/hotel1.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaAddressBook, FaChild, FaDatabase, FaEuroSign, FaFacebookSquare, FaGlobe, FaInternetExplorer, FaNewspaper, FaRecycle, FaSignInAlt, FaTrophy } from "react-icons/fa";
import MultiStep from "react-multistep";
import StepOne from "./signupMultistepForm/stepOne";
import StepTwo from "./signupMultistepForm/stepTwo";

function Signup() {
    const [step, setStep] = useState(1);
   

    return (
        <>
            <Header />
            <Container className="container ">
                <Row>
                    <Col lg={6}><div className="image-container">
                    <Image src={Hotel} alt="Login Image" />
                </div></Col>
                    <Col lg={6}>  <div className="">

<div id="Log_in">
    <h2>Signup up</h2>
    <form
        className={`user_login authsection active step-${step}`}
        id="userlogin"
        
    >
       <MultiStep activeStep={0} >
    <StepOne title='Signup Details'/>
    <StepTwo title='Subscription Plan'/></MultiStep>
      </form>
</div>


</div></Col>
                </Row>
                

              
                <div className="row mt-3 ">
           <div className="col-lg-4">
             <div className="icon-box">
               <i className="fa fa-repeat"><FaNewspaper/></i>
               <h4 className="my-2">Each Edition Rotation Program</h4>
               <p>
                 Your hotel will be one of the top 40 most luxurious hotels which will guarantee the flow of bookings and occupancy ranging from 800,000 to 1 million tourists annually.
               </p>
             </div>
           </div>
           <div className="col-lg-4"><div className="icon-box">
              <i className="fa fa-recycle mb-2" ><FaRecycle/></i>
               <h4 className="my-2">Zero commission charges</h4>
               <p>
                The hotel receives the full amount from all bookings made.
               </p>
             </div></div>
           <div className="col-lg-4"><div className="icon-box">
               <i className="fa fa-globe mb-2" ><FaGlobe/></i>
               <h4 className="my-2">Global exposure</h4>
               <p>
               Utilizing our AI technology, your hotel profile will be automatically shared with our extensive network of over 1 million subscribers.
               </p>
             </div></div>
         </div>
         <div className="row mt-3">
           <div className="col-lg-4">
             <div className="icon-box">
               <i className="fa fa-child"><FaChild/></i>
               <h4 className="my-2">Global Reach</h4>
               <p>
                 Published & Promoted in 89 countries, integrating online (70%) and print (30%) components.
               </p>
             </div>
           </div>
           <div className="col-lg-4"><div className="icon-box">
              <i className="fa fa-internet-explorer mb-2" ><FaInternetExplorer/></i>
               <h4 className="my-2">Extensive Digital Presence</h4>
               <p>
                Our magazines are available as free downloads on 5 independent digital platforms, attracting 4-5 million readers per edition.
               </p>
             </div></div>
           <div className="col-lg-4"><div className="icon-box">
               <i className="fa fa-facebook-square" ><FaFacebookSquare/></i>
               <h4 className="my-2">Social Media Engagement</h4>
               <p>
              We actively promote all of our hotels on 13 social networks, engaging with 13 million monthly users.
               </p>
             </div></div>
         </div>
         <div className="row mt-3">
           <div className="col-lg-4">
             <div className="icon-box">
               <i className="fa fa-newspaper-o"><FaNewspaper/></i>
               <h4 className="my-2">Flexibility to add Exclusive Offers</h4>
               <p>
                 Could be published & changed any time during the year.
               </p>
             </div>
           </div>
           <div className="col-lg-4"><div className="icon-box">
              <i className="fa fa-address-book mb-2" ><FaAddressBook/></i>
               <h4 className="my-2">Effortless Bookings</h4>
               <p>
               Every hotel ad in the printed version is accompanied by QR codes with direct access to your website for easy bookings.
               </p>
             </div></div>
           <div className="col-lg-4"><div className="icon-box">
               <i className="fa fa-database mb-2" ><FaDatabase/></i>
               <h4 className="my-2">Data Analysis</h4>
               <p>
             Demonstrate that this program has increased direct bookings for each hotel by an impressive 60%.
               </p>
             </div></div>
         </div>
         <div className="row mt-3 mb-3">
           <div className="col-lg-3">
            
           </div>
           <div className="col-lg-6"><div className="icon-box">
              <i className="fa fa-trophy mb-2" ><FaTrophy/></i>
               <h4 className="my-2">Recognition</h4>
               <p>
              Each hotel could be nominated by our readers as "The Best Luxury Hotel of the Year," and Hotel could have access to data on the voting clients.
               </p>
             </div></div>
           <div className="col-lg-3"></div>
         </div>
            </Container>
            

         <div className="row mt-3  counter-row w-100" >
           <div className="col-lg-3">
             <div className="counter-box ">
              
               <h4 className="my-2">550K+</h4>
               <p>
                 Explore over 570,000 luxury hotel listings worldwide, with 50 new additions every day
               </p>
             </div>
           </div>
           <div className="col-lg-3">
            <div className="counter-box ">
              
               <h4 className="my-2">89+</h4>
               <p>
             Monthly users will see your Hotel Profile on our 13 Social Networks, ensuring unparalleled exposure and visibility for your Hotel
               </p>
             </div>
          </div>
           <div className="col-lg-3">
            <div className="counter-box ">
               
               <h4 className="my-2">13M+</h4>
               <p>
             We will promote your hotel to our over 1 Million subscribers, allowing them to book directly without your hotel paying any commissions to us
               </p>
             </div>
          </div>
             <div className="col-lg-3">
               <div className=" counter-box lastcounter">
               <h4 className="my-2">1M+</h4>
               <p>
             Demonstrate that this program has increased direct bookings for each hotel by an impressive 60%.
               </p>
             </div>
          </div>
         </div>
            <Footer />
        </>

    );
}
export default Signup;