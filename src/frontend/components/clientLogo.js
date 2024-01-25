import React from "react";
import logo1 from "../../assets/img/whowithwork/withWorkImage1.webp";
import logo2 from "../../assets/img/whowithwork/withWorkImage2.webp";
import logo3 from "../../assets/img/whowithwork/withWorkImage3.webp";
import logo4 from "../../assets/img/whowithwork/withWorkImage4.webp";

function ClientLogo() {
    // Duplicate logos to create an infinite loop
    const logos = [logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4];

    return (
        <section className="spad clientlogosection">
            <h1 className="text-center mb-5">Who We Work With</h1>
            <div className="slider">
                {logos.map((logo, index) => (
                    <div className="item" key={index}>
                        <a href=""><img alt="logo" src={logo} /></a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ClientLogo;
