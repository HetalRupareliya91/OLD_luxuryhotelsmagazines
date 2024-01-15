import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from ".";
import Blogs from "./pages/blogs";
import BlogDetails from "./pages/blogDetails";
import Rooms from "./pages/rooms";
import Login from "./auth/login";
import Signup from "./auth/signup";
import UserProfile from "./pages/userProfile";
import RoomDetails from "./pages/roomDetails";
import PricingPlan from "./components/pricingPlan";
import Profile from "./components/profile";
import SubsriptionPage from "./components/subscriptionPage";


function RoutesPage(){
    return(
      <Routes>
      <Route exact path="/" element={<IndexPage/> } />
      <Route exact path="/home" element={<IndexPage/> } />
      <Route exact path="/blogs" element={<Blogs/> } />
      <Route exact path="/Blog-details/:news_id" element={<BlogDetails/> } />
      <Route exact path="/rooms" element={<Rooms/> } />
      <Route exact path="/room-details/:news_id" element={<RoomDetails/> } />
      <Route exact path="/Login" element={<Login/> } />
      <Route exact path="/signup" element={<Signup/> } />
      <Route exact path="/userprofile" element={<UserProfile/> } />
      <Route exact path="/pricing-plan" element={<PricingPlan/> } />
      <Route exact path="/profile" element={<Profile/> } />
      <Route exact path="/subscription" element={<SubsriptionPage/> } />
      </Routes>  
    );
}
export default RoutesPage;