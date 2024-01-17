import React, { useState } from "react";
import Hotel from "../../assets/img/hotel1.jpg";
import { Col, Container, Image, Row, Form, ProgressBar } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaAddressBook, FaChild, FaDatabase, FaEuroSign, FaFacebookSquare, FaGlobe, FaInternetExplorer, FaNewspaper, FaRecycle, FaSignInAlt, FaTrophy } from "react-icons/fa";
import MultiStep from "react-multistep";
import StepOne from "./signupMultistepForm/stepOne";
import StepTwo from "./signupMultistepForm/stepTwo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import API from "../../utils";

function Signup() {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);

    const nextStep = () => {
        setStep(step + 1);
        updateProgress(); // Update progress when moving to the next step
    };

    const prevStep = () => {
        setStep(step - 1);
        updateProgress(); // Update progress when moving to the previous step
    };

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async () => {

        try {
            const response = await axios.post(
                `${API.BASE_URL}${API.ENDPOINTS.signup}`,
                JSON.stringify(formData),
                {
                    headers: {
                        Authorization: "hXuRUGsEGuhGf6KM",
                    },
                }
            );

            if (response.data.status === true) {
                console.log("signup successful:");
            } else {
                console.error("signup failed:");
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const [validationErrors, setValidationErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...validationErrors };

        // Validate Name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
            isValid = false;
        } else {
            newErrors.email = "";
        }

        // Validate Password
        if (formData.password.length < 6) {
            newErrors.password = "Password do not match";
            isValid = false;
        } else {
            newErrors.password = "";
        }

        // Validate Confirm Password
        if (formData.confirm_password !== formData.password) {
            newErrors.confirm_password = "Passwords do not match";
            isValid = false;
        } else {
            newErrors.confirm_password = "";
        }

        setValidationErrors(newErrors);
        return isValid;
    };

    const handleSignupClick = () => {
        const isValid = validateForm();

        if (isValid) {
            handleSignup();
            nextStep();
        }
    };

    const updateProgress = () => {
        const totalSteps = 2; // Assuming there are two steps in the form
        const newProgress = (step / totalSteps) * 100;
        setProgress(newProgress);
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
                                {step === 1 &&
                                    <>
                                        <Form method="POST">
                                            <Row className="row ">
                                                <div className=" col-lg-6 mt-3">
                                                    <input type="text" className="" name="name" placeholder="Name" value={formData.name}
                                                        onChange={handleInputChange} style={{ borderColor: validationErrors.name ? "red" : "" }} />
                                                    {validationErrors.name && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.name}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="col-lg-6 mt-3">
                                                    <input type="email" className="" id="email" name="email" placeholder="Email " value={formData.email}
                                                        onChange={handleInputChange} style={{ borderColor: validationErrors.email ? "red" : "" }}/>
                                                    {validationErrors.email && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.email}
                                                        </div>
                                                    )}                                                
                                                </div>
                                            </Row>

                                            <Row >
                                                <Col md={6} className="mt-3">
                                                    <input
                                                        type="password"
                                                        className=""
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                    />
                                                    {validationErrors.password && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.password}
                                                        </div>
                                                    )}
                                                </Col>
                                                <Col md={6} className="mt-3">
                                                    <input
                                                        type="password"
                                                        className=""
                                                        id="confirm_password"
                                                        name="confirm_password"
                                                        placeholder="Confirm Password"
                                                        value={formData.confirm_password}
                                                        onChange={handleInputChange}
                                                    />
                                                    {validationErrors.confirm_password && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.confirm_password}
                                                        </div>
                                                    )}                                                
                                                </Col>
                                            </Row>
                                            <Row className="re-captcha mt-3 ">
                                                <Col lg={12}>
                                                    <ReCAPTCHA
                                                        sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                                                    //   onChange={handleVerification}
                                                    />
                                                </Col>
                                            </Row>


                                            <div className="footer_line mt-3">
                                                <h6>Already have an account? <a className="page_move_btn" href="/login">Login</a></h6>
                                            </div>
                                            <div className="float-end">
                                            </div>
                                        </Form>
                                    </>}
                                {step === 2 &&
                                    <div className=" justify-content-between mt-4 ">
                                        <Row>
                                            <Col lg={12}>
                                                <ProgressBar now={progress} label={`${progress}%`} className="mt-3" />
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col lg={6} md={6} sm={6}>
                                                <div className="pricingTable m-0">
                                                    <div className="pricingTable-header">
                                                        <span className="heading">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" /></svg>
                                                        </span>
                                                    </div>
                                                    <div className="pricing-plans">
                                                        <span className="price-value"><i className="fa fa-eur" aria-hidden="true"><FaEuroSign /></i><span>199</span></span>
                                                        <span className="subtitle"><b>Duration : 12 Months</b></span>
                                                        <h4>Package : Hotel Profile</h4>
                                                    </div>
                                                    <div className="pricingContent">

                                                    </div>

                                                    <div className="pricingTable-sign-up">
                                                        <a href="#" className="btn btn-block btn-default">Pay With Card <i aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg={6} md={6} sm={6}>
                                                <div className="pricingTable m-0">
                                                    <div className="pricingTable-header">
                                                        <span className="heading">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" /></svg>
                                                        </span>
                                                    </div>
                                                    <div className="pricing-plans">
                                                        <span className="price-value"><i aria-hidden="true"><FaEuroSign /></i><span>399</span></span>
                                                        <span className="subtitle"><b>Duration : 12 Months</b></span>
                                                        <h4>Package : Hotel Profile</h4>
                                                    </div>
                                                    <div className="pricingContent">

                                                    </div>

                                                    <div className="pricingTable-sign-up">
                                                        <a href="#" className="btn btn-block btn-default">Pay With Card <i aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </Col>


                                        </Row>
                                        <Row className="mt-3">
                                            <Col lg={6}></Col>
                                            <Col lg={6} className="d-flex">

                                            </Col>
                                        </Row>


                                    </div>}

                                {step > 1 && (
                                    <>
                                        <div className="float-end">
                                            <button onClick={prevStep} >
                                                Previous
                                            </button>
                                            <button onClick={nextStep} >
                                                Submit
                                            </button>
                                        </div>
                                    </>
                                )}
                                {step < 2 && (
                                    <button onClick={handleSignupClick} >
                                        Signup
                                    </button>
                                )}

                            </form>


                        </div>


                    </div></Col>
                </Row>
            </Container>
            <Footer />
        </>

    );
}
export default Signup;