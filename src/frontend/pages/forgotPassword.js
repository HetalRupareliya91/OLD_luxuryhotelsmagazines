import React, { useState, useRef, useEffect } from "react";
import Header from "../components/header";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import bg2 from "../../assets/img/magazines/bg4.jpg";
import { Parallax } from "react-parallax";
import { FaAngleRight } from "react-icons/fa";
import Footer from "../components/footer";

function ForgotPassword() {
    const [showEmailForm, setShowEmailForm] = useState(true);
    const [showOTPForm, setShowOTPForm] = useState(false);
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
    const otpRefs = useRef(Array(6).fill(null).map(() => React.createRef()));
  const handleEmailSubmit = () => {
    // Add logic to handle email submission and show OTP form
    setShowEmailForm(false);
    setShowOTPForm(true);
  };

  const handleOTPSubmit = () => {
    // Add logic to handle OTP submission and show password form
    setShowOTPForm(false);
    setShowPasswordForm(true);
  };

  const handleOtpInputChange = (index, value) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);

    // Move focus to the next input field
    if (index < 5 && value !== "") {
      otpRefs.current[index + 1].current.focus();
    }
  };
  const handlePasswordSubmit = () => {
    // Add logic to handle password submission
    // For example, you can check if password and confirmPassword match
    if (password === confirmPassword) {
      // Handle password submission logic here
      console.log("Password submitted:", password);
    } else {
      // Passwords don't match, handle accordingly
      console.error("Passwords do not match");
    }
  };

  useEffect(() => {
    // Focus on the first OTP input field when the OTP form is shown
    if (showOTPForm) {
      otpRefs.current[0].current.focus();
    }
  }, [showOTPForm]);

  return (
    <>
      <Header />

      <Parallax blur={0} bgImage={bg2} bgImageAlt="the cat" strength={300}>
        <section className="forgot-password-section spad">
          <Container>
            <Row>
              <Col lg={3}></Col>
              <Col lg={6}>
                {showEmailForm && (
                  <Form>
                    <div className="text-center mb-4">
                      <h1>Reset Password</h1>
                    </div>
                    <Form.Label >Enter Your Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter email"
                      className="forgot-input-feild mt-2"
                    />
                    <div className="d-flex justify-content-around mt-3 ">
                    <div className="">
                      <p className="mt-4">
                        <FaAngleRight className="m-0"/> <a>Back To Login</a>
                      </p>
                    </div>
                    <div className=" mt-3">
                      <Button className="" onClick={handleEmailSubmit}>
                        Submit Email
                      </Button>
                    </div>
                    
                    </div>
                  </Form>
                )}

                {showOTPForm && (
                  <Form>
                    <div className="text-center mb-4">
                      <h1>Enter OTP</h1>
                    </div>
                    {/* Display all 6 input fields for OTP in a single row */}
                    <Row className="">
                      {otpInputs.map((value, index) => (
                        <Col key={index} xs={2}>
                          <Form.Control
                            ref={otpRefs.current[index]}
                            type="text"
                          className="otp-feild"
                            value={value}
                            onChange={(e) =>
                              handleOtpInputChange(index, e.target.value)
                            }
                          />
                        </Col>
                      ))}
                    </Row>
                    <div className="d-flex justify-content-around mt-3 ">
                    <div className="">
                      <p className="mt-4">
                        <FaAngleRight className="m-0"/> <a>Back To Login</a>
                      </p>
                    </div>
                    <div className=" mt-3">
                      <Button className="" onClick={handleOTPSubmit}>
                        Submit OTP
                      </Button>
                    </div>
                    
                    </div>
                  </Form>
                )}

{showPasswordForm && (
                  <Form>
                    <div className="text-center mb-4">
                      <h1>Create Password</h1>
                    </div>
                    <Form.Group controlId="password">
                      <Form.Label className="mb-2">Password</Form.Label>
                      <Form.Control
                        type="password"
                        className="forgot-input-feild"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="confirmPassword" className="mt-4">
                      <Form.Label className="mb-2">Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-around mt-3 ">
                    <div className="">
                      <p className="mt-4">
                        <FaAngleRight className="m-0"/> <a>Back To Login</a>
                      </p>
                    </div>
                    <div className=" mt-3">
                      <Button className="" onClick={handlePasswordSubmit}>
                        Reset Password
                      </Button>
                    </div>
                    
                    </div>
                  </Form>
                )}
              </Col>

              <Col lg={3}></Col>
            </Row>
          </Container>
        </section>
      </Parallax>

      <Footer/>
    </>
  );
}

export default ForgotPassword;
