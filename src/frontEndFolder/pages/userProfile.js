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

  const data = [
    {
      date: '2023-12-22',
      hotelName: 'Hotel 1',
      location: 'Location 1',
      amount: '$123',
    },
    {
      date: '2023-12-23',
      hotelName: 'Hotel 2',
      location: 'Location 2',
      amount: '$123', 
    },
    {
      date: '2023-12-22',
      hotelName: 'Hotel 3',
      location: 'Location 3',
      amount: '$123',
    },
  ];
  const blogData = [
    {
      date: '2023-12-22',
      blogName: 'Blog 1',
      location: 'Location 1',
      description: 'Description1',
    },
    {
      date: '2023-12-23',
      blogName: 'Blog 2',
      location: 'Location 2',
      description: 'Description2',
    },
  ];
  const columns = [
    { name: 'Date', selector: 'date' },
    { name: 'Hotel Name', selector: 'hotelName' },
    { name: 'Location', selector: 'location' },
    { name: 'Amount', selector: 'amount' },
    {
      name: 'Action',
      cell: row => (
        <div className='d-flex '>
          <button className='me-1 table-button'>View</button>
          <button className='me-1'>Edit</button>
          <button className='me-1'>Delete</button>
        </div>
      ),
    },
  ];
  const blogColumns = [
    { name: 'Date', selector: 'date' },
    { name: 'Blog Name', selector: 'blogName' },
    { name: 'Location', selector: 'location' },
    { name: 'Description', selector: 'description' },
    {
      name: 'Action',
      cell: row => (
        <div className='d-flex '>
          <button className='me-1 table-button'>View</button>
          <button className='me-1'>Edit</button>
          <button className='me-1'>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      <section className="sidebar-section">

        <Container className='d-flex sidebar-div order-1'>
          <Nav id="sidebar" className="col-md-3 col-lg-2 d-md-block  sidebar">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="sidebar-sticky">

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
                </li>
              </ul>
              <hr className="sidebar-line mb-5" />
              <div className="text-center logout-btn">
                <button >
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f1f2f3" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" /></svg>
                  Logout
                </button>
              </div>
            </div>
          </Nav>
          <div id="content">
            <div id="welcomeMessage" >
              <div id="myHotels" style={{ display: currentSection === 'myHotels' ? 'block' : 'none' }}>
                <button className='userprofilebuttons' >All Hotels</button>
                <button className='userprofilebuttons' onClick={() => showSection('addHotels')} >Add Hotel</button>
                <div className='d-flex hotel-profile-div mt-3 mb-5'>
                  <div className='image-div me-5'>
                    <Image src={News1} />
                  </div>
                  <div className='details-div mt-4'>
                    <div className='mb-3'>
                      <h4>Symphony Style Hotel, Quorvus Collection</h4>
                      <h6>created at 2023-10-08</h6>

                      <h5>Package expiry: 2024/04/08</h5>
                      </div>
                      <Row>
                        <Col lg={8}>
                      <div className='time-left mb-3'>
                        <h6>Time Left: 97d 11h 36m 13s </h6>
                      </div>
                      </Col>
                         <Col lg={4}>  
                    <div className='d-flex  all-hotel-btns'>
                      <button className='me-1 btn-default'>View</button>
                      <button className='me-1 btn-default'>Edit</button>
                      <button className='me-1 btn-default'>Delete</button>
                    </div>
                    </Col>

                    </Row>
                  </div>

                </div>

                <div className='d-flex hotel-profile-div'>
                  <div className='image-div me-5'>
                    <Image src={News2} />
                  </div>
                  <div className='details-div mt-4'>
                    <div className='mb-3'>
                      <h4>Symphony Style Hotel, Quorvus Collection</h4>
                      <h6>created at 2023-10-08</h6>

                      <h5>Package expiry: 2024/04/08</h5>
                      </div>
                      <Row>
                        <Col lg={8}>
                      <div className='time-left mb-3'>
                        <h6>Time Left: 97d 11h 36m 13s </h6>
                      </div>
                      </Col>
                         <Col lg={4}>  
                    <div className='d-flex  all-hotel-btns'>
                      <button className='me-1 btn-default'>View</button>
                      <button className='me-1 btn-default'>Edit</button>
                      <button className='me-1 btn-default'>Delete</button>
                    </div>
                    </Col>

                    </Row>
                  </div>
                </div>
               
                <div className="col-lg-12">
                    <div className="room-pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">Next <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
                
              </div>


              <div id="myBlogs" style={{ display: currentSection === 'myBlogs' ? 'block' : 'none' }}>
                <button className='userprofilebuttons'  >All Blogs</button>
                <button className='userprofilebuttons' onClick={() => showSection('addBlogs')}>Add Blogs</button>

                <div className='d-flex hotel-profile-div mt-3 mb-5'>
                  <div className='image-div me-5'>
                    <Image src={News1} />
                  </div>
                  <div className='details-div mt-4'>
                    <div className='mb-3'>
                      <h4>Symphony Style Hotel, Quorvus Collection</h4>
                      <h6>created at 2023-10-08</h6>

                      <h5>Package expiry: 2024/04/08</h5>
                      </div>
                      <Row>
                        <Col lg={8}>
                      <div className='time-left mb-3'>
                        <h6>Time Left: 97d 11h 36m 13s </h6>
                      </div>
                      </Col>
                         <Col lg={4}>  
                    <div className='d-flex  all-hotel-btns'>
                      <button className='me-1 btn-default'>View</button>
                      <button className='me-1 btn-default'>Edit</button>
                      <button className='me-1 btn-default'>Delete</button>
                    </div>
                    </Col>

                    </Row>
                  </div>

                </div>

                <div className='d-flex hotel-profile-div'>
                  <div className='image-div me-5'>
                    <Image src={News2} />
                  </div>
                  <div className='details-div mt-4'>
                    <div className='mb-3'>
                      <h4>Symphony Style Hotel, Quorvus Collection</h4>
                      <h6>created at 2023-10-08</h6>

                      <h5>Package expiry: 2024/04/08</h5>
                      </div>
                      <Row>
                        <Col lg={8}>
                      <div className='time-left mb-3'>
                        <h6>Time Left: 97d 11h 36m 13s </h6>
                      </div>
                      </Col>
                         <Col lg={4}>  
                    <div className='d-flex  all-hotel-btns'>
                      <button className='me-1 btn-default'>View</button>
                      <button className='me-1 btn-default'>Edit</button>
                      <button className='me-1 btn-default'>Delete</button>
                    </div>
                    </Col>

                    </Row>
                  </div>
                </div>
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

                <form id="profileForm">
                  <div class="row mb-3">
                    <div class="col-lg-2">
                      <label for="fullName">Full Name:</label>
                    </div>
                    <div class="col-lg-6">
                      <input class="sidebar-input" type="text" id="fullName" name="fullName" placeholder="Adam Milne" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-lg-2">
                      <label for="email">Email:</label>
                    </div>
                    <div class="col-lg-6">
                      <input class="sidebar-input" type="email" id="email" name="email" placeholder="adam@gmail.com" />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-lg-2">
                      <label for="phoneNumber">Phone Number:</label>
                    </div>
                    <div class="col-lg-6">
                      <input class="sidebar-input" type="tel" id="phoneNumber" name="phoneNumber" placeholder="123-456-7890" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-lg-2">
                      <label for="dob">Date of Birth:</label>
                    </div>
                    <div class="col-lg-6">
                      <input class="sidebar-input" type="date" id="dob" name="dob" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-lg-2">
                      <label for="bio">Bio:</label>
                    </div>
                    <div class="col-lg-6">
                      <textarea class="sidebar-input" id="bio" name="bio" rows="6">I am a web developer</textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-2">
                    </div>
                    <div class="col-lg-4">
                      <button type="submit">Save Profile</button>
                    </div>
                  </div>
                </form>
              </div>
              <div id="addBlogs" style={{ display: currentSection === 'addBlogs' ? 'block' : 'none' }}>
                <h3 className="mb-4">Add A New Blog</h3>
                <form id="addBlogForm">
                  <Row className="mb-3">
                    <Col lg={2}>
                      <label for="blogTitle">Blog Title:</label>
                    </Col>
                    <Col lg={10}>
                      <input className="sidebar-input" type="text" id="blogTitle" name="blogTitle" required />
                    </Col>
                  </Row>
                  <Row className=" mb-3">
                    <Col lg={2}>
                      <label for="blogImage">Blog Image:</label>
                    </Col>
                    <Col lg={10}>
                      <div className="drop-area text-center " id="imageDropArea">
                        <img src={fileImage} alt="" className="file-upload-img mt-3" />
                        <p className="file-upload-text" >Drag & Drop hotel images here or click to select images</p>
                      </div>
                    </Col>
                  </Row>
                  <Row className=" mb-3">
                    <Col lg={2}>
                      <label for="blogContent">Blog Content:</label>
                    </Col>
                    <Col lg={10}>

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