import React from 'react'
import Header from '../components/header';
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'

import { useState } from 'react';
import DataTable from 'react-data-table-component';
import fileImage from '../../assets/img/file-upload.png'
import MultiStep from 'react-multistep';

import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Footer from '../components/footer';
import Step1 from './multistepForm/stepOne';
import Step3 from './multistepForm/stepThree';
import Step4 from './multistepForm/stepFour';
import Step2 from './multistepForm/stepTwo';



function UserProfile() {
  const [currentSection, setCurrentSection] = useState('myHotels');
  const showSection = (section) => {
    setCurrentSection(section);
  };
  const [hotelEditorState, setHotelEditorState] = useState(EditorState.createEmpty());
  const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());

  const handleHotelEditorChange = (editorState) => {
    setHotelEditorState(editorState);
  };

  const handleBlogEditorChange = (editorState) => {
    setBlogEditorState(editorState);
  };

 

  return (
    <>
      <Header />
      <section className="sidebar-section">

        <Container className='d-flex sidebar-div order-1'>
          <Nav id="sidebar" className="col-col-3 col-lg-2 d-col-block  sidebar">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="sidebar-sticky desktopmenu">

              <div className="text-center">
                <img id="userImage" src={News1} alt="User Image" />
                <h5 className="text-light">Adam Milne</h5>
                <h6 className="text-light">Traveller</h6>
              </div>
              <hr className="sidebar-line" />
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myHotels' ? 'active' : ''
                      }`}
                    href="#"
                    onClick={() => showSection('myHotels')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f2f2f2" d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" /></svg>
                    My Hotels
                  </a>
                </li><hr className="sidebar-line" />
                <li className="nav-item">
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myBlogs' ? 'active' : ''
                      }`}
                    href="#"
                    onClick={() => showSection('myBlogs')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f0f2f4" d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" /></svg>
                    My Blogs
                  </a>
                </li><hr className="sidebar-line" />
                <li className="nav-item">
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myProfile' ? 'active' : ''
                      }`}
                    href="#"
                    onClick={() => showSection('myProfile')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#e6e7ea" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    My Profile
                  </a>
                </li><hr className="sidebar-line" />
                <li className="nav-item">
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myProfile' ? 'active' : ''
                      }`}
                    href="#"
                   
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f1f2f3" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" /></svg>
                    Logout
                  </a>
                </li>
              </ul>
              <hr className="sidebar-line mb-5" />
             
            </div>
            <div className="sidebar-sticky mobile-menuone">
              <Row>
                <Col lg={8} className='col-8'>
                <Row>
                
                 
                    <Col lg={3} className='col-4'><img id="userImage" src={News1} alt="User Image" className='ms-2' /></Col>
                    <Col lg={9} className='col-8'><h5 className="text-light">Adam Milne</h5>
                     <h6 className="text-light">Traveller</h6></Col>
                  </Row>
                
                
            
              </Col>
                <Col lg={4} className='col-4'><div className="text-center ">
                <button className='p-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f1f2f3" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" /></svg>
                  Logout
                </button>
              </div></Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <ul className='d-flex'>
                  <li className="nav-item">
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myHotels' ? 'active' : ''
                      }`}
                    href="#"
                    onClick={() => showSection('myHotels')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f2f2f2" d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" /></svg>
                    My Hotels
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myBlogs' ? 'active' : ''
                      }`}
                    href="#"
                    onClick={() => showSection('myBlogs')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f0f2f4" d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" /></svg>
                    My Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myProfile' ? 'active' : ''
                      }`}
                    href="#"
                    onClick={() => showSection('myProfile')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#e6e7ea" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    My Profile
                  </a>
                </li>
                  </ul>
                </Col>
              </Row>

              
             
              
            </div>
          </Nav>
          <div id="content">
            <div id="welcomeMessage" >
              <div id="myHotels" style={{ display: currentSection === 'myHotels' ? 'block' : 'none' }}>
                <button className='userprofilebuttons' >All Hotels</button>
                <button className='userprofilebuttons' onClick={() => showSection('addHotels')} >Add Hotel</button>
                <Row className='hotel-profile-div mt-4'>
                  <Col lg={4}><div className='image-div '>
                    <Image src={News1} />
                  </div></Col>
                  <Col lg={8}><div className='details-div mt-4'>
                    <div className='mb-3'>
                      <h4>Symphony Style Hotel, Quorvus Collection</h4>
                      <h6>created at 2023-10-08</h6>

                      <h5>Package expiry: 2024/04/08</h5>
                      </div>
                      <Row className='mt-5'>
                        <Col lg={8} className='mt-2'> 
                      <div className='time-left '>
                        <span>Time Left: 97d 11h 36m 13s </span>
                      </div>
                      </Col>
                         <Col lg={4} className='mt-2'>   
                    <div className='d-flex  all-hotel-btns'>
                      <button className='me-1 btn-default'>View</button>
                      <button className='me-1 btn-default'>Edit</button>
                      <button className='me-1 btn-default'>Delete</button>
                    </div>
                    </Col>

                    </Row>
                  </div></Col>
                </Row>
                
                <Row className='hotel-profile-div mt-4'>
                  <Col lg={4}><div className='image-div '>
                    <Image src={News2} />
                  </div></Col>
                  <Col lg={8}><div className='details-div mt-4'>
                    <div className='mb-3'>
                      <h4>Symphony Style Hotel, Quorvus Collection</h4>
                      <h6>created at 2023-10-08</h6>

                      <h5>Package expiry: 2024/04/08</h5>
                      </div>
                      <Row className='mt-5'>
                        <Col lg={8} className='mt-2'> 
                      <div className='time-left '>
                        <span>Time Left: 97d 11h 36m 13s </span>
                      </div>
                      </Col>
                         <Col lg={4} className='mt-2'>   
                    <div className='d-flex  all-hotel-btns'>
                      <button className='me-1 btn-default'>View</button>
                      <button className='me-1 btn-default'>Edit</button>
                      <button className='me-1 btn-default'>Delete</button>
                    </div>
                    </Col>

                    </Row>
                  </div></Col>
                </Row>
                

               
               
                <div className="col-lg-12">
                    <div className="room-pagination">
                        <a href="#" className='active'>1</a>
                        <a href="#">2</a>
                        <a href="#">Next <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
                
              </div>


              <div id="myBlogs" style={{ display: currentSection === 'myBlogs' ? 'block' : 'none' }}>
                <button className='userprofilebuttons'  >All Blogs</button>
                <button className='userprofilebuttons' onClick={() => showSection('addBlogs')}>Add Blogs</button>
    <Row className='hotel-profile-div mt-4'>
                  <Col lg={4}><div className='image-div '>
                    <Image src={News1} />
                  </div></Col>
                  <Col lg={8}><div className='details-div mt-4'>
                    <div className='mb-3'>
                      <h4>Symphony Style Hotel, Quorvus Collection</h4>
                      <h6>created at 2023-10-08</h6>

                      <h5>Package expiry: 2024/04/08</h5>
                      </div>
                      <Row className='mt-5'>
                        <Col lg={8} className='mt-2'> 
                      <div className='time-left '>
                        <span>Time Left: 97d 11h 36m 13s </span>
                      </div>
                      </Col>
                         <Col lg={4} className='mt-2'>   
                    <div className='d-flex  all-hotel-btns'>
                      <button className='me-1 btn-default'>View</button>
                      <button className='me-1 btn-default'>Edit</button>
                      <button className='me-1 btn-default'>Delete</button>
                    </div>
                    </Col>

                    </Row>
                  </div></Col>
                </Row>
                
                <Row className='hotel-profile-div mt-4'>
                  <Col lg={4}><div className='image-div '>
                    <Image src={News2} />
                  </div></Col>
                  <Col lg={8}><div className='details-div mt-4'>
                    <div className='mb-3'>
                      <h4>Symphony Style Hotel, Quorvus Collection</h4>
                      <h6>created at 2023-10-08</h6>

                      <h5>Package expiry: 2024/04/08</h5>
                      </div>
                      <Row className='mt-5'>
                        <Col lg={8} className='mt-2'> 
                      <div className='time-left '>
                        <span>Time Left: 97d 11h 36m 13s </span>
                      </div>
                      </Col>
                         <Col lg={4} className='mt-2'>   
                    <div className='d-flex  all-hotel-btns'>
                      <button className='me-1 btn-default'>View</button>
                      <button className='me-1 btn-default'>Edit</button>
                      <button className='me-1 btn-default'>Delete</button>
                    </div>
                    </Col>

                    </Row>
                  </div></Col>
                </Row>
                
                <div className="col-lg-12">
                    <div className="room-pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">Next <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
              </div>
              <div id="myProfile" style={{ display: currentSection === 'myProfile' ? 'block' : 'none' }}>
                <h3 className="mb-4">Personal Information</h3>

                <div class="row">
           
            <div class="col-lg-8 p-0 mt-3">
               <div class="card">
                  <div class="card-body card-body-div">
                     <div class="row mb-3">
                        <div class="col-sm-3">
                           <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                           <input type="text" class="sidebar-input" value="John Doe"/>
                        </div>
                     </div>
                     <div class="row mb-3">
                        <div class="col-sm-3">
                           <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                           <input type="text" class="sidebar-input" value="john@example.com"/>
                        </div>
                     </div>
                     <div class="row mb-3">
                        <div class="col-sm-3">
                           <h6 class="mb-0">Paaword</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                           <input type="password" class="sidebar-input" value="(239) 816-9029"/>
                        </div>
                     </div>
                     <div class="row mb-3">
                        <div class="col-sm-3">
                           <h6 class="mb-0">Confirm Password</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                           <input type="password" class="sidebar-input" value="(320) 380-4539"/>
                        </div>
                     </div>
                     <div class="mt-3 text-center "><button class="btn btn-block btn-default w-25 ">Save Details</button></div>

                  </div>
               </div>
        
            </div>
            <div class="col-lg-4 p-0 mt-3">
               <div class="card ">
                  <div class="card-body current-subscription">
                     <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                           <h6 class="m-0">Current Subcription :</h6>
                          <b><span class="">Basic</span></b>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                           <h6 class="m-0">Amount:</h6>
                          <b><span class="">199</span></b>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                           <h6 class="m-0">Expiry Date :</h6>
                           <b><span class="">31/12/2024</span></b>
                        </li>
                        
                     </ul>
                   
                  </div>
               </div>
               <div class="card mt-3">
                  <div class="card-body">
                     <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                           <h6 class="m-0">Subcription Name:</h6>
                          <b><span class="text-dark"><i class="fa fa-eur" aria-hidden="true"></i>Premium</span></b>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                           <h6 class="m-0">Amount :</h6>
                          <b><span class="text-dark"><i class="fa fa-eur" aria-hidden="true"></i>399</span></b>
                        </li>
                        {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                           <h6 class="m-0">Expiry Date :</h6>
                           <b><span class="text-dark">31/12/2024</span></b>
                        </li> */}
                        
                     </ul>
                   
                  </div>
               </div>
               <div className='text-center'>
               <div class="mt-3"><a class="btn btn-block btn-default w-50 " href="/subscription">View All</a></div>
               </div>
            </div> 
         </div>
              </div>
              <div id="addBlogs" style={{ display: currentSection === 'addBlogs' ? 'block' : 'none' }}>
                <h3 className="mb-4">Add A New Blog</h3>
                <form id="addBlogForm">
                  <Row className="mb-3">
                    <Col lg={6}>
                      <input className="sidebar-input" type="text" id="blogTitle" name="blogTitle" placeholder='Name Of Business' required />
                    </Col>
                    <Col lg={6}>
            <div className="select-option">
              <select id="" className="sidebar-input" >
                <option value="Kyrgyzstan">Name Of Country</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
              </select>
            </div>
          </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={6}>
                      <input className="sidebar-input" type="text" id="" name="name" placeholder='Your Full Name' required />
                    </Col>
                    <Col lg={6}>
                      <input className="sidebar-input" type="email" id="" name="email" placeholder='Your Email Address' required />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={6}>
                      <input className="sidebar-input" type="text" id="" name="blogTitle" placeholder='Blog Title' required />
                    </Col>
                    <Col lg={6}>
                      <input className="sidebar-input" type="text" id="" name="blogTitle" placeholder='Youtube Link (optional)' required />
                    </Col>
                  </Row>
                
                  <Row className=" mb-3">
                
                    <Col lg={12}>

                      <Editor
                        editorState={hotelEditorState}
                        onEditorStateChange={handleHotelEditorChange}
                      />       </Col>
                  </Row>
            
                  <div className='text-center mb-3'>
                  <h5>YOU CAN ADD A “SPECIAL OFFER” HERE. (*non-obligatory) Offer Title</h5>
                  </div>
                  <Row className="mb-3">
                 
                    <Col lg={6}>
                      <input className="sidebar-input" type="text" id="blogTitle" name="blogTitle" placeholder='Enter Offer Title'required />
                    </Col>
                    <Col lg={6}>
            <div className="select-option">
              <select id="" className="sidebar-input" >
                <option value="Kyrgyzstan">Name Of Country</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
              </select>
            </div>
          </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                    <input className="sidebar-input" type="text" id="blogTitle" name="blogTitle" placeholder='Phone Number'required />
                    </Col>
                    <Col lg={6}>
                    <input className="sidebar-input" type="text" id="blogTitle" name="blogTitle" placeholder='Enter The Link Where Client Can Redeem Your Offer'required />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                    <input className="sidebar-input" type="date" id="offervalidto" name="offerValidTo" placeholder='Dates Offer Valid To 'required />
                    </Col>
                    <Col lg={6}>
                    <input className="sidebar-input" type="date" id="offervalidfrom" name="offerValidFrom" placeholder='Dates Offer Valid From'required />
                    </Col>
                  </Row>
                  <Row className=" mb-3">
                  
                    <Col lg={12}>

                      <Editor
                        editorState={hotelEditorState}
                        onEditorStateChange={handleHotelEditorChange}
                      />       </Col>
                  </Row>
                  <Row className=" mb-3">
                    <Col lg={2}>
                    </Col>
                    <Col lg={6}>
                      <button type="submit">Add Blog</button>
                    </Col>
                  </Row>
                </form>
              </div>
              <div id="addHotels" style={{ display: currentSection === 'addHotels' ? 'block' : 'none' }}>
                <MultiStep activeStep={0} >
    <Step1 title='Hotel Details'/>
    <Step2 title='Hotel Contacts'/>
    <Step3 title='Special Offer'/>
    <Step4 title='Home Page Addon'/>
</MultiStep>              </div>

            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
export default UserProfile;
