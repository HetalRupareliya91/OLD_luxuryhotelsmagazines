import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
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
            <Header></Header>
            <Advertise />
            <AdvertiseTestimonial />
            <AdvertiseWhatWeDo />
            <CallToAction />
            <Footer />
        </>

    );
}
export default AdvertiseWithUs;