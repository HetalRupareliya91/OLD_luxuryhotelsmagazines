import React, { useState } from "react";
import Footer from "../components/footer";
import { Form } from "react-bootstrap";
import Header from "../components/header";
import axios from "axios";
function Login (){
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 
   const handleLogin = async (e) => {
     e.preventDefault();
 
     const userData = { email, password };
 
     try {
       const response = await axios.post("https://luxuryhotelsmagazines.fableadtechnolabs.com/backend/api/user-login",
         userData,
         {
           headers: {
             Authorization: "hXuRUGsEGuhGf6KM",
           },
         }
       );
 
       if (response.status === 200) {
         console.log("Login successful:");
       } else {
         console.error("Login failed:");
       }
     } catch (error) {
       console.error("Error:", error.message);
     }
   };

    return(
<>
<Header/>
<div className="container ">
         <div className="row">
            <div className="col-lg-6">
               <div className="image-container" >
                  <h3 className="  text-white"> List
                     Your Luxury Hotel On
                     LuxuryHotelsMagazines.com & receive direct commission-free bookings
                  </h3>
                  <p className=" mt-3 text-white">Swift 4-step process in under 5 minutes, with instant visibility and exclusive promotion of your Hotel to our over 1 million high-end subscribers </p>
                  
               </div>
            </div>
            <div className="col-lg-6">
               <div className="form-container">
                  <div className="auth_container">
                   
                     <div id="Log_in">
                        <h2>Log In</h2>
                     
                        <Form className="user_login authsection active" id="userlogin" >
                           <div className="form-floating">
                              <input type="text" className="" name="Username" placeholder="Username" />
                           </div>
                           <div className="form-floating">
                              <label for="Email"></label>
                              <input type="email" className="" name="Email" placeholder="Email "  onChange={(e) => setEmail(e.target.value)}/>
                           </div>
                           <div className="form-floating">
                              <input type="password" className="" name="Password" placeholder="Password "  onChange={(e) => setPassword(e.target.value)}/>
                           </div>
                           <button type="submit" name="user_login_submit" className="auth_btn" onClick={handleLogin}>Log in</button>
                           <div className="footer_line mt-2">
                              <h6>You Can Also Login With <span className="page_move_btn" >Facebook /Google</span></h6>
                           </div>
                           <div className="footer_line">
                              <h6>Don't have an account? <a className="page_move_btn" href="/signup">sign up</a></h6>
                           </div>
                        </Form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
   
      </div>
    
    <Footer/>
</>
    );
}
export default Login;