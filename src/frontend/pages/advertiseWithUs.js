import React, { useState, useRef } from "react";
import Logo from '../../assets/img/logo.svg';
import Hero3 from "../../assets/img/hero/hero-3.jpg";
import { Parallax } from "react-parallax";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaPhoneSquare, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import advimg1 from "../../assets/img/advertise/advertiseAustria.png"
import advimg2 from "../../assets/img/advertise/advertiseGreece.png"
import advimg3 from "../../assets/img/advertise/advertiseTasMania.png"
import advimg4 from "../../assets/img/advertise/advTaiwan.png"
import advimg5 from "../../assets/img/advertise/advbelize.png"
import magazineImage from "../../assets/img/advertise/advmagazineimg.png"
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
import Magazines1 from  "../../assets/img/magazines/magazines.webp"
import Magazines2 from  "../../assets/img/magazines/magazines2.webp"
import Magazines3 from  "../../assets/img/magazines/magazines3.webp"
import Advertise from "../components/advertiseWithus/advertise";
import AdvertiseTestimonial from "../components/advertiseWithus/advertiseTestimonial";
import AdvertiseWhatWeDo from "../components/advertiseWithus/advertiseWhatWeDo";
function AdvertiseWithUs() {

    const [activeTab, setActiveTab] = useState("Zoom");

    const openLink = (animName) => {
        setActiveTab(animName);
    }


    return (
        <>
            {/* <HEad */}
            <Header></Header>

        

         <Advertise/>
         <AdvertiseTestimonial/>
         <AdvertiseWhatWeDo/>
            <CallToAction />
            <Footer />
        </>

    );
}
export default AdvertiseWithUs;