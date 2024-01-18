import React from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
import HotelsImage from "../../assets/img/about_page/hotels.jpg";
import ClientImage from "../../assets/img/about_page/clients.jpg";
import YachetsImage from "../../assets/img/about_page/yachets.jpg";
import CountriesImage from "../../assets/img/about_page/countries.jpg";
import SocialImage from "../../assets/img/about_page/social.jpg";
import DownloadImage from "../../assets/img/about_page/download.jpg";
import SubscriberImage from "../../assets/img/about_page/subscribers.jpg";
import AboutImage from "../../assets/img/magazines/magazines.webp";
function AboutUsPage() {

    return (
        <>
            <Header />
            <section className="about-content my-5">
                <Container>
                    <h2 className="text-center">ABOUT US</h2>
                    <Row>
                        <Col className="my-4" md={4}>
                            <Image src={AboutImage} />
                        </Col>
                        <Col className="my-4" md={8}>
                            <p className="my-2">Luxury Hotels Magazines and Luxury Platform are distinguished by their reputable brand aesthetic and authoritative content. With offices in England and 7 locations worldwide, Luxury Hotels Magazines offer an all-encompassing luxury lifestyle guide full of captivating articles and the latest news published by our clients, featuring a range of topics that appeal to luxury enthusiasts, including Luxury Hotels, Super Cars, Mega Yachts for Sale & Charter, Luxury Boutiques & Exclusive Jewellery, Best Restaurants & Bars, Most Luxury Properties, Exotic Spas & Luxurious cosmetic products.</p>
                            <p className="my-4">Luxury Hotels Magazines take readers on a journey to explore exotic destinations, experience local traditions, taste local cuisine, try treatments at the most exotic spas, visit historical places and discover myths and religious sites, learn about investments and new luxury developments, and indulge in famous brands and boutiques, all while immersing themselves in the world of luxury.</p>
                            <p className="my-4">The complimentary print edition of Luxury Hotels Magazines is published annually, with digital editions released prior printed version. Each edition contains a staggering 100,000 high-quality printed copies, each featuring QR codes on hotel pages, distributed in 89 countries.</p>
                        </Col>
                    </Row>

                    <h2 className="text-center my-5">Luxury Hotels Magazines Distributed:</h2>
                    <Row>
                        <Col className="aboutimg_content">
                            <div>
                                <Image src={HotelsImage} height={130} width={130} />
                            </div>
                            <p className='title'>40 Hotels</p>
                            <p>In each country</p>
                        </Col>
                        <Col className="aboutimg_content">
                            <div>
                                <Image src={ClientImage} height={130} width={130} />
                            </div>
                            <p className='title'>7825</p>
                            <p>VIP Clients</p>
                        </Col>
                        <Col className="aboutimg_content">
                            <div>
                                <Image src={YachetsImage} height={130} width={130} />
                            </div>
                            <p className='title'>8500</p>
                            <p>Luxury yachts</p>
                        </Col>
                        <Col className="aboutimg_content">
                            <div>
                                <Image src={CountriesImage} height={130} width={130} />
                            </div>
                            <p className='title'>89 countries</p>
                            <p>Promoted</p>
                        </Col>
                        <Col className="aboutimg_content">
                            <div>
                                <Image src={SocialImage} height={130} width={130} />
                            </div>
                            <p className='title'>30 million</p>
                            <p>13 Soc Networks & 550 Groups</p>
                        </Col>
                        <Col className="aboutimg_content">
                            <div>
                                <Image src={SubscriberImage} height={130} width={130} />
                            </div>
                            <p className='title'>1 Million </p>
                            <p>Digital Subscribers</p>
                        </Col>
                        <Col className="aboutimg_content">
                            <div>
                                <Image src={DownloadImage} height={130} width={130} />
                            </div>
                            <p className='title'>5 Digital Platform</p>
                            <p>For free Downloads</p>
                        </Col>
                    </Row>
                    <div>
                        <p className="my-5" ><strong><a style={{ color: "#000" }} href='#'>Luxury Hotels </a></strong>
                            connecting high-end hotels with discerning luxury clientele globally. In the current competitive market, attracting and retaining esteemed clients poses a considerable challenge. We present a solution inspired by successful hotel groups like Marriott, Mandarin Oriental, and Four Seasons—a groundbreaking rotation program that successfully has been implemented for the last 17 years and guarantees to bring visitors to your hotel.</p>
                        <p> Here are the benefits of participating in the Luxury Hotels Rotation Program</p>
                        <p>1. Each Edition Rotation Program: Your hotel becomes one of the 40 most luxurious hotels that our clients intend to visit. This ensures a continuous stream of bookings and consistent room occupancy by 800,000 to 1 million tourists throughout the year, all without commission fees.</p>
                        <p>2. Global Reach:&nbsp;Published in 89 countries, integrating online (70%) and print (30%) components.</p>
                        <p>3. Extensive Digital Presence: Our magazines are available as free downloads on 5 independent digital platforms, attracting 4-5 million readers per edition.</p>
                        <p>4. Social Media Engagement: We actively promote hotels on 13 social networks, engaging with 13 million monthly users.</p>
                        <p>5. Bonus Online Platform: Each Hotel will receive a complimentary six-month Hotel Profile on our LuxuryHotelsMagazines.com Online Platform (worth €399). This profile will be shared instantly with our 1 million subscribers, providing direct access to bookings through your website. Review Sample with Special Offer here</p>
                        <p>6. Flexibility to add Special Offers: Could be published any time during the year.&nbsp;</p>
                        <p>7. Effortless Bookings: Every hotel ad in the printed version is accompanied by QR codes with direct access to your website for easy bookings.</p>
                        <p>8. Data Analysis: Demonstrate that this program has increased direct bookings for each hotel by an impressive 60%.</p>
                        <p>9. Recognition: Each hotel could be nominated by our readers as "The Best &amp; Most Luxury Hotel of the Year," and you will have access to data on the voting clients.</p>
                    </div>
                </Container>
            </section>

            <CallToAction />
            <Footer />

        </>
    );
}
export default AboutUsPage;