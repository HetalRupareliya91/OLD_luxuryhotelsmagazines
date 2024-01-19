import React from "react";
import logo1 from "../../assets/img/hero/logo1.png";
import logo2 from "../../assets/img/hero/logo2.png";
import logo3 from "../../assets/img/hero/logo3.png";
import logo4 from "../../assets/img/hero/logo4.png";
import logo5 from "../../assets/img/hero/logo5.png";


function ClientLogo() {

    return (
        <section className="spad clientlogosection">
            <h1 className="text-center mb-4">Who We Work With
</h1>
            <div className="slider">
                <div className="item"><a href=""><img alt="logo" src={logo1} /></a>
                </div>
                <div className="item"><a href=""><img alt="logo" src={logo2} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo3} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo4} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo5} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo1} /></a>
                </div>
                <div className="item"><a href=""><img alt="logo" src={logo2} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo3} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo4} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo5} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo1} /></a>
                </div>
                <div className="item"><a href=""><img alt="logo" src={logo2} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo3} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo4} /></a></div>
                <div className="item"><a href=""><img alt="logo" src={logo5} /></a></div>
            </div>
        </section>

    );
}

export default ClientLogo