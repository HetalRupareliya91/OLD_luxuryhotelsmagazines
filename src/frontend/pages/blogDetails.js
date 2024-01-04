import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import {  FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram, FaLinkedin, FaSnapchat, FaEye, FaHeart, FaMapMarker, FaBuilding, FaSpaceShuttle, FaHome, FaList, FaPencilAlt } from 'react-icons/fa';

import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News3 from '../../assets/img/news3.jpg'
import News4 from '../../assets/img/news4.jpg'
import News5 from '../../assets/img/news5.jpg'
import News6 from '../../assets/img/news6.jpg'
import Logo from "../../assets/img/logo.svg"

import { Col, Container, Image, Row } from "react-bootstrap";
 function BlogDetails() {

    return(
        <><Header />
        <section className="room-details-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3 className="mt-0">Jumeirah Al Qasr Hotel, Dubai</h3>
                                <div className="rdt-right">

                                </div>
                                <div className="location"> <p><i ><FaMapMarker/></i> Courtyard by Marriott Nashik, Mumbai Naka, Mumbai-Agra National Highway, Nashik, 422001 Nashik, India</p></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-lg-12 col-6"><img src={News5} alt="" className="mb-2" /></div>
                                    <div className="col-lg-12 col-6"><img src={News5} alt="" /></div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <img src={News5} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 ">
                        <div>

                            <a href="/discover/discover-saudi/content/discover-saudis-unesco-world-heritage-sites/" aria-label="Discover Saudi's UNESCO World Heritage Sites" style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "center", marginBottom: "10px", color: "#000" }}>
                                <div >
                                    <img className="contentcollection_itemimage2" src={News2} />
                                </div>
                                <div  >
                                    <h4 className="contentcollection_itemtext2">Jumeirah Al Qasr Hotel, Dubai</h4>
                                </div>
                            </a>
                            <a href="/discover/discover-saudi/content/discover-saudis-unesco-world-heritage-sites/" aria-label="Discover Saudi's UNESCO World Heritage Sites" style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "center", marginBottom: "10px", color: "#000" }}>
                                <div >
                                    <img className="contentcollection_itemimage2" src={News2} />
                                </div>
                                <div  >
                                    <h4 className="contentcollection_itemtext2">Jumeirah Al Qasr Hotel, Dubai</h4>
                                </div>
                            </a>
                            <a href="/discover/discover-saudi/content/discover-saudis-unesco-world-heritage-sites/" aria-label="Discover Saudi's UNESCO World Heritage Sites" style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "center", marginBottom: "10px", color: "#000" }}>
                                <div >
                                    <img className="contentcollection_itemimage2" src={News3} />
                                </div>
                                <div  >
                                    <h4 className="contentcollection_itemtext2">Jumeirah Al Qasr Hotel, Dubai</h4>
                                </div>
                            </a>

                            <a href="/discover/discover-saudi/content/discover-saudis-unesco-world-heritage-sites/" aria-label="Discover Saudi's UNESCO World Heritage Sites" style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "center", marginBottom: "10px", color: "#000" }}>
                                <div >
                                    <img className="contentcollection_itemimage2" src={News4} />                            </div>
                                <div  >
                                    <h4 className="contentcollection_itemtext2">Jumeirah Al Qasr Hotel, Dubai</h4>
                                </div>
                            </a>





                        </div>
                    </div>
                </div>
                {/* <div className="row">

                    <div className="col-lg-12">
                        <div className="row mt-3">
                            <div className="col-lg-8 col-7"><h3 className="m-0"><span style={{ borderBottom: "2px solid #b5191fff" }}>Hotel Amenities</span></h3></div>
                            <div className="col-lg-4 col-5"><button className=" btn-default w-100" >Book Online</button></div>
                        </div>
                        <div className="amenity-main mt-4">
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V192h64V32zm320 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM224 512c17.7 0 32-14.3 32-32V320H192V480c0 17.7 14.3 32 32 32zM320 0c-9.3 0-18.1 4-24.2 11s-8.8 16.3-7.5 25.5l31.2 218.6L288.6 409.7c-3.5 17.3 7.8 34.2 25.1 37.7s34.2-7.8 37.7-25.1l.7-3.6c1.3 16.4 15.1 29.4 31.9 29.4c17.7 0 32-14.3 32-32c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM112 80A48 48 0 1 0 16 80a48 48 0 1 0 96 0zm0 261.3V269.3l4.7 4.7c9 9 21.2 14.1 33.9 14.1H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H157.3l-41.6-41.6c-14.3-14.3-33.8-22.4-54-22.4C27.6 160 0 187.6 0 221.6v55.7l0 .9V480c0 17.7 14.3 32 32 32s32-14.3 32-32V384l32 42.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V421.3c0-10.4-3.4-20.5-9.6-28.8L112 341.3z" /></svg>&nbsp; Number of room</div>
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" /></svg> &nbsp;Restaurant</div>
                            <div className="amenity" ><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512"><path d="M128 127.7C128 74.9 170.9 32 223.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7V224H384V127.7C384 74.9 426.9 32 479.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7V361c-1.6 1-3.3 2-4.8 3.1c-18 12.4-40.1 20.3-59.2 20.3h0V288H192v96.5c-19 0-41.2-7.9-59.1-20.3c-1.6-1.1-3.2-2.2-4.9-3.1V127.7zM306.5 389.9C329 405.4 356.5 416 384 416c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 469.7 417 480 384 480c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 405.2 165.1 416 192 416c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" /></svg>&nbsp;Outdoor swimming pool</div>

                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 512"><path d="M189.6 310.6c3.5 3.3 15.3 9.4 34.4 9.4s30.9-6.2 34.4-9.4c16-14.8 34.5-22.6 53.5-22.6h16.3c19 0 37.5 7.8 53.5 22.6 3.5 3.3 15.3 9.4 34.4 9.4s30.9-6.2 34.4-9.4c14.9-13.7 31.9-21.1 49.4-22.2l-112.8-80.6 18-12.9c3.6-2.6 8.3-3.5 12.6-2.6l100.4 21.5c25.9 5.5 51.4-11 57-36.9 5.6-25.9-11-51.4-36.9-57L437.7 98.5c-30.7-6.6-63 .1-88.6 18.4l-80 57.2c-10.4 7.4-19.4 16.4-26.7 26.9L173.8 299c5.5 3.2 10.8 6.9 15.9 11.6zM624 352h-16c-26 0-45.8-8.4-56.1-17.9-8.9-8.2-19.7-14.1-31.8-14.1h-16.3c-12.1 0-22.9 5.9-31.8 14.1C461.8 343.6 442 352 416 352s-45.8-8.4-56.1-17.9c-8.9-8.2-19.7-14.1-31.8-14.1h-16.3c-12.1 0-22.9 5.9-31.8 14.1C269.8 343.6 250 352 224 352s-45.8-8.4-56.1-17.9c-8.9-8.2-19.7-14.1-31.8-14.1h-16.3c-12.1 0-22.9 5.9-31.8 14.1C77.8 343.6 58 352 32 352H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16c38.6 0 72.7-12.2 96-31.8 23.3 19.7 57.4 31.8 96 31.8s72.7-12.2 96-31.8c23.3 19.7 57.4 31.8 96 31.8s72.7-12.2 96-31.8c23.3 19.7 57.4 31.8 96 31.8h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-512-96c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" /></svg>&nbsp;Indoor Swimming Pool</div>

                        </div>
                        <div className="amenity-main">
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512"><path d="M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1C576 360.1 456.1 480 308.1 480H288 267.9C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3zM301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6C278 33.9 282.9 32 288 32s10 1.9 13.5 5.6z" /></svg>&nbsp;Spa</div>
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 320 512"><path d="M32.1 29.3C33.5 12.8 47.4 0 64 0H256c16.6 0 30.5 12.8 31.9 29.3l14 168.4c6 72-42.5 135.2-109.9 150.6V448h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H160 80c-17.7 0-32-14.3-32-32s14.3-32 32-32h48V348.4C60.6 333 12.1 269.8 18.1 197.8l14-168.4zm56 98.7H231.9l-5.3-64H93.4l-5.3 64z" /></svg>&nbsp;Bars</div>
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" /></svg>&nbsp;Gym</div>

                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512"><path d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z" /></svg>&nbsp;Private Beach</div>
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z" /></svg>&nbsp;Concierge service</div>
                            <span className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M511.8 267.4c-26.1 8.7-53.4 13.8-81 15.1c9.2-105.3-31.5-204.2-103.2-272.4C434.1 41.1 512 139.5 512 256c0 3.8-.1 7.6-.2 11.4zm-3.9 34.7c-5.8 32-17.6 62-34.2 88.7c-97.5 48.5-217.7 42.6-311.9-24.5c23.7-36.2 55.4-67.7 94.5-91.8c79.9 43.2 170.1 50.8 251.6 27.6zm-236-55.5c-2.5-90.9-41.1-172.7-101.9-231.7C196.8 5.2 225.8 0 256 0c2.7 0 5.3 0 7.9 .1c90.8 60.2 145.7 167.2 134.7 282.3c-43.1-2.4-86.4-14.1-126.8-35.9zM138 28.8c20.6 18.3 38.7 39.4 53.7 62.6C95.9 136.1 30.6 220.8 7.3 316.9C2.5 297.4 0 277 0 256C0 157.2 56 71.5 138 28.8zm69.6 90.5c19.5 38.6 31 81.9 32.3 127.7C162.5 294.6 110.9 368.9 90.2 451C66 430.4 45.6 405.4 30.4 377.2c6.7-108.7 71.9-209.9 177.1-257.9zM256 512c-50.7 0-98-14.7-137.8-40.2c5.6-27 14.8-53.1 27.4-77.7C232.2 454.6 338.1 468.8 433 441c-46 44-108.3 71-177 71z" /></svg>&nbsp;Sport classNamees</span>

                        </div>


                        <div className="amenity-main">
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>&nbsp;Sun beds</div>
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512"><path d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z" /></svg>&nbsp;Beach Cabanas</div>
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>&nbsp;Private driver</div>
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z" /></svg>&nbsp;Room service</div>
                            <div className="amenity"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>&nbsp;Shopping</div>
                        </div>

                    </div>
                </div> */}

                <div className="row mt-5">
                    <div className="col-lg-8">
                        <div className="rd-text">
                            <div className="rd-title">

                            </div>


                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>


                        <div className="rd-text">
                            <div className="rd-title">
                                <i ><FaMapMarker/></i> Location
                            </div>


                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>
                        <div className="rd-text">
                            <div className="rd-title">
                                <i  aria-hidden="true"><FaBuilding/></i> Rooms & Suites
                            </div>


                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>
                        <div className="rd-text">
                            <div className="rd-title">
                                <i className="fa fa-cutlery" aria-hidden="true"><FaSpaceShuttle/></i>  Restaurants & Bars
                            </div>


                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>
                        {/* <div className="rd-text">
                            <div className="rd-title">
                                <i  aria-hidden="true"><FaHome/></i> Spa & Wellness
                            </div>


                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div> */}
                        {/* <div className="rd-text">
                            <div className="rd-title">
                                <i  aria-hidden="true"><FaList/></i> Other Facilities
                            </div>


                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>
                        <div className="rd-text">
                            <div className="rd-title">
                                <i  aria-hidden="true"><FaPencilAlt/></i>  Additional information
                            </div>


                            <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                wheeler? The advantages and disadvantages of both are studied so that you can make your
                                choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                achievement of a lifetime. It can be similar to sojourning with your residence as you
                                search the various sites of our great land, America.</p>

                        </div>*/}
                        <div className="rd-text">
                            <div className="rd-title">
                                <i className="fa fa-share-alt" aria-hidden="true"></i> Share This
                            </div>

                            <div className="row">
                                <div className="col-lg-8"><p className="f-para sharethis mt-2"><i aria-hidden="true"><FaFacebook /></i>
                                    <i aria-hidden="true"><FaTwitter /></i><i aria-hidden="true"><FaWhatsapp /></i><i aria-hidden="true"><FaTelegram /></i><i aria-hidden="true"><FaLinkedin /></i><i aria-hidden="true"><FaSnapchat /></i><i aria-hidden="true"><FaEnvelope /></i>
                                </p></div>
                                <div className="col-lg-4 text-end">

                                    <p className="f-para likeview mt-2">
                                        <i aria-hidden="true">&nbsp;5 <FaEye /></i>
                                        <i aria-hidden="true">&nbsp;10 <FaHeart /></i>
                                        </p>
                                </div>
                            </div>


                        </div> 

                    </div>
                    <div className="col-lg-4">
                        <div className="hotel-logo">
                            <img src={Logo} alt="" className="w-50" />
                        </div>
                        <div className=" ">
                            <form action="#" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h5 className="text-center px-4 mt-0">VOTE FOR THE BEST LUXURY HOTELS OF THE YEAR</h5>
                                        <input type="text" placeholder="Your Full Name" />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" placeholder="Your Email" />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Describe Your Experience"></textarea>
                                        <button type="submit" className=" btn-default">Submit Now</button>
                                    </div>
                                </div>
                            </form>

                            <div className="youtube-video mt-3">
                                <iframe width="100%" height="200" src="https://www.youtube.com/embed/D0UnqGm_miA?si=qnB4y7REmVnd-Lyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>

                            {/* <div className="locationmap mt-3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29759.049789885605!2d72.75953112132576!3d21.196876856223426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c351ceae251%3A0x1d35b30f855a2c36!2sAdajan%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703916461865!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                            </div>
                            <div className="row  ">
                                <div className="col-lg-6 mt-3 text-center"><button className=" btn-default w-100">Book Online</button></div>
                                <div className="col-lg-6 mt-3 text-center"><button className=" btn-default w-100">Visit Website</button>

                                </div>
                                <div className="col-lg-12 mt-3 text-center"><a href="/pricing-plan"><button className=" btn-default w-100">Claim Listing</button></a>
                                </div>


                            </div> */}
                        </div>
                    </div>







                </div>
            </div>
        </section>
        <Footer />
    </>
    );
    
 }
 export default BlogDetails;