import React, { useState } from "react";
import Logo from '../../assets/img/logo.png';
import Hero3 from "../../assets/img/hero/hero-3.jpg";
import { Parallax } from "react-parallax";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Zoom");

  const openLink = (animName) => {
    setActiveTab(animName);
  }

  return (
    <Parallax blur={0} bgImage={Hero3} bgImageAlt="the cat" strength={300}>
    <section className="special spad tabs-section" data-scrollax-parent="true">
    
      <div className="content tabcontainer">
        <div>
          <div className="w3-sidebar w3-bar-block  w3-card">
            <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom')}><i className="fa fa-globe" aria-hidden="true"></i> Spain</button>
            <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom2' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom2')}><i className="fa fa-globe" aria-hidden="true"></i> Queensland</button>
            <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom3' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom3')}><i className="fa fa-globe" aria-hidden="true"></i> Great American West</button>
          </div>
          <div className="zoom-content">
            <div id="Zoom" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom' ? '' : 'hidden'}`}>
              <img src={Logo} alt="" className="w-50" />
              <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/D0UnqGm_miA?si=PdW4fKdvAkI6E_Oc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div id="Zoom2" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom2' ? '' : 'hidden'}`}>
              <img src={Logo} alt="" className="w-50" />
              <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/D0UnqGm_miA?si=PdW4fKdvAkI6E_Oc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div id="Zoom3" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom3' ? '' : 'hidden'}`}>
              <img src={Logo} alt="" className="w-50" />
              <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/D0UnqGm_miA?si=PdW4fKdvAkI6E_Oc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
     
    </section>
    </Parallax>
  );
}

export default Tabs;
