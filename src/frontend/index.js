import React from 'react'
import Hero from './components/hero';
import Search from './components/search';
import AboutUs from './components/aboutUs';
import LatestNews from './components/latestnews';
import Collections from './components/collection';
import MostPopular from './components/mostPopular';
import KnoledgeTest from './components/knoledgeTest';
import CallToAction from './components/callToAction';
import Footer from './components/footer';
import Destination from './components/destination';
import Header from './components/header';
import ClientLogo from './components/clientLogo';
import Tabs from './components/tabs';
function IndexPage(){
    return(
        <><Header/>
    <Hero/>
    <Search/>
    <AboutUs/>
    <ClientLogo/>
    <Tabs/>
    <LatestNews/>
    <Destination/>
    <Collections/>
    <MostPopular/>
    <KnoledgeTest/>
    <CallToAction/>
    <Footer/>
    </>

        );
}
   
export default IndexPage;