import React, { useState } from "react";
import Footer from "../components/footer";
import { Col, Container, Form, Row } from "react-bootstrap";
import Header from "../components/header";
import axios from "axios";
import API from "../../utils";
import { useNavigate } from "react-router-dom"; 
function Login() {

   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [userName, setUserName] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [userNameError, setUserNameError] = useState("");

   const handleInputChange = (e) => {
      const { name, value } = e.target;

      switch (name) {
         case "Username":
            setUserName(value);
            setUserNameError("");
            break;
         case "Email":
            setEmail(value);
            setEmailError("");
            break;
         case "Password":
            setPassword(value);
            setPasswordError("");
            break;
         default:
            break;
      }
   };

   const handleLogin = async (e) => {

      e.preventDefault();


      setEmailError("");
      setPasswordError("");
      setUserNameError("");

      // Validation
      let isValid = true;

      if (!email) {
         setEmailError("Email is required");
         isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
         setEmailError("Invalid email format");
         isValid = false;
      }
      if (!userName) {
         setUserNameError("Username is required");
         isValid = false;
      }

      if (!password) {
         setPasswordError("Password is required");
         isValid = false;
      }

      if (!isValid) {
         return;
      }

      const userData = { email, password };

      try {
         const response = await axios.post(
            `${API.BASE_URL}${API.ENDPOINTS.login}`,
            JSON.stringify(userData),
            {
               headers: {
                  Authorization: "hXuRUGsEGuhGf6KM",
               },
            }
         );

         if (response.status === 200) {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem('isLoggedIn', 'true');
            navigate("/home");
            console.log(response.data.message);
         } else {
            console.error("Login failed:");
         }
      } catch (error) {
         console.error("Error:", error.message);
      }
   };

   return (
      <>
         <Header />
         <Container>
            <Row >
               <Col lg={6} >
                  <div className="image-container" >
                     <h3 className="  text-white"> List
                        Your Luxury Hotel On
                        LuxuryHotelsMagazines.com & receive direct commission-free bookings
                     </h3>
                     <p className=" mt-3 text-white">Swift 4-step process in under 5 minutes, with instant visibility and exclusive promotion of your Hotel to our over 1 million high-end subscribers </p>

                  </div>
               </Col>
               <Col lg={6} >
                  <div className="form-container">
                     <div className="auth_container">

                        <div id="Log_in">
                           <h2>Log In</h2>

                           <Form className="user_login authsection active" id="userlogin" >
                              <div className="form-floating">
                                 <input type="text" className="" name="Username" placeholder="Username" onChange={handleInputChange} style={{ borderColor: userNameError ? "red" : "" }} />
                              </div>
                              {userNameError && (
                                 <div style={{ color: "red", textAlign: "left" }}>
                                    {userNameError}
                                 </div>
                              )}
                              <div className="form-floating">
                                 <label for="Email"></label>
                                 <input type="email" className="" name="Email" placeholder="Email " onChange={handleInputChange} style={{ borderColor: emailError ? "red" : "" }} />

                              </div>
                              {emailError && (
                                 <div style={{ color: "red", textAlign: "left" }}>
                                    {emailError}
                                 </div>
                              )}
                              <div className="form-floating">
                                 <input type="password" className="" name="Password" placeholder="Password " onChange={handleInputChange} style={{ borderColor: passwordError ? "red" : "" }} />

                              </div>
                              {passwordError && (
                                 <div style={{ color: "red", textAlign: "left" }}>
                                    {passwordError}
                                 </div>
                              )}
                              <button type="submit" name="user_login_submit" className="auth_btn" onClick={handleLogin}>Log in</button>
                              <div className="footer_line mt-3">
                                 <h6>Don't have an account? <a className="page_move_btn" href="/signup"  >Sign up</a></h6>
                              </div>
                           </Form>
                        </div> 
                     </div>
                  </div>
               </Col>
            </Row>

         </Container>

         <Footer />
      </>
   );
}
export default Login;