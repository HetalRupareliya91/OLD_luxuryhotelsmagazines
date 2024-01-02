import React, { useState } from "react";
import Hotel from "../../assets/img/hotel1.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaAddressBook, FaChild, FaDatabase, FaEuroSign, FaFacebookSquare, FaGlobe, FaInternetExplorer, FaNewspaper, FaRecycle, FaSignInAlt, FaTrophy } from "react-icons/fa";

function Signup() {
    const [step, setStep] = useState(1);
    const handleNext = () => {
        if (step < 2) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

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
        {step === 1 && (
            <>
                <div className="row mb-3">
                    <div className=" col-lg-6">
                        <input type="text" className="" name="firstname" placeholder=" firstname" />
                    </div>
                    <div className="col-lg-6">
                        <input type="text" className="" name="lastname" placeholder="lastname " />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className=" col-lg-6">
                        <input type="text" className="" name="Username" placeholder=" Username" />
                    </div>
                    <div className="col-lg-6">
                        <input type="email" className="" name="Email" placeholder="Email " />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <input type="date" className="" id="DOB" placeholder="Date Of Birth" />

                    </div>
                    <div className="col-lg-6">
                        <input type="text" className="" id="Gender" placeholder="Gender" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input type="password" className="" id="password" placeholder="Password" />
                    </div>
                    <div className="col-md-6">
                        <input type="password" className="" id="password" placeholder="Confirm Password" />
                    </div>
                </div>
                <Row className="mt-3">
            <Col lg={6}></Col>
            <Col lg={6} className="text-end">
               
                <button type="button" className="btn btn-block btn-default w-50" onClick={handleNext}>
                    Next
                </button>
                </Col>
          </Row>
               

                <div className="footer_line">
                    <h6>SignUp With <span className="page_move_btn" >Facebook /Google</span></h6>
                </div>
            </>
        )}

  

    {step === 2 && (
        <>
           
            <div className=" justify-content-between mt-4 ">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                  <div className="pricingTable m-0">
                      <div className="pricingTable-header">
                          <span className="heading">
                              <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                          </span>
                      </div>
                      <div className="pricing-plans">
                          <span className="price-value"><i className="fa fa-eur" aria-hidden="true"><FaEuroSign/></i><span>199</span></span>
                          <span className="subtitle"><b>Duration : 12 Months</b></span>
                          <h4>Package : Hotel Profile</h4>
                      </div>
                      <div className="pricingContent">
                          
                      </div>

                      <div className="pricingTable-sign-up">
                          <a href="#" className="btn btn-block btn-default">Pay With Card <i aria-hidden="true"><FaSignInAlt/></i></a>  
                      </div>
                  </div>
              </div>

              <div className="col-md-6 col-sm-6">
                  <div className="pricingTable m-0">
                      <div className="pricingTable-header">
                          <span className="heading">
                             <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                          </span>
                      </div>
                      <div className="pricing-plans">
                          <span className="price-value"><i  aria-hidden="true"><FaEuroSign/></i><span>399</span></span>
                          <span className="subtitle"><b>Duration : 12 Months</b></span>
                          <h4>Package : Hotel Profile</h4>
                      </div>
                      <div className="pricingContent">
                          
                      </div>

                      <div className="pricingTable-sign-up">
                          <a href="#" className="btn btn-block btn-default">Pay With Card <i aria-hidden="true"><FaSignInAlt/></i></a> 
                      </div>
                  </div>
              </div>

             
          </div>
          <Row className="mt-3">
            <Col lg={6}></Col>
            <Col lg={6} className="d-flex">
                <button type="button" className="btn btn-block btn-default w-50" onClick={handlePrev}>
                    Previous
                </button>&nbsp;&nbsp;
                <button type="submit" className="btn btn-block btn-default w-50">Submit</button>
                </Col>
          </Row>
                
                
            </div>

        </>
    )}
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