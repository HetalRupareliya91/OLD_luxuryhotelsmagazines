import React ,{useEffect, useState} from "react";
import { Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';
import News1 from '../../../assets/img/news1.jpg'
import News2 from '../../../assets/img/news2.jpg'
import axios from "axios";
import API from "../../../utils";
import HotelDeleteAlert from "./hotelDeleteAlert";
import { useNavigate } from "react-router-dom";
import EditHotelModal from "./editHotelModal";

function AllHotels(){
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const[hotelId, setHotelId]=useState("")

  const handleOpenModal = (hotel) => {
    setHotelId(hotel.id)
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  

  const fetchAllHotels = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotels}`, {
        headers: {
          "Authorization": "Bearer " + token,
        }
      });
      const data = response.data;
      if (data.status === true) {
        setApiData(data.data);
        console.log(data)
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchAllHotels();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = apiData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const handleViewClick = async (hotel) => {
  //   try {
  //     // Make an API call using the hotel id
  //     const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS}}`, {
  //       headers: {
  //         Authorization: "hXuRUGsEGuhGf6KM",
  //       },
  //     });
  
  //     const roomData = response.data;
  
  //     if (roomData.status === true) {
       
  //       history.push(`/hotel-details/${hotel.id}`);
  //     } else {
  //       console.error("Failed to fetch room details");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };
  const [showEditModal, setShowEditModal] = useState(false);
  const handleViewButtonClick = (news) => {
    // Navigate to the room-details page with the news id in the URL
    navigate(`/hotel-details/${news.id}/kuwait/la-maison-des-tetes-relais-chateaux`);
  };

  const handleEditModal = (id) => {
    setShowEditModal(!showEditModal);
  };

  // Step 5: Trigger the modal to open when the "Edit" button is clicked
  const handleEditButtonClick = (hotel) => {
    setHotelId(hotel.id);  
    handleEditModal(hotel.id);


  };
  
  const formatDate = (dateString) => {
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  
    return(
        <>
        
        <Row className='hotel-profile-div mt-4' >
          <Col lg={4}>
            <div className='image-div'>
              <Image src={News1} />
            </div>
          </Col>

          <Col lg={8}>
            <div className='details-div mt-4'>
              <div className='mb-3'>
                <h4>The Ritz-Carlton, Doha</h4>
                <h6>Created at : 2023-08-30</h6>
                <h5>Package expiry: 2024-01-30</h5>
              </div>
              <Row className='mt-5'>
                <Col lg={8} className='mt-2'>
                  <div className='time-left '>
                    <span>Time Left :75d 11h 36m 6s</span>
                  </div>
                </Col>
                <Col lg={4} className='mt-2'>
                  <div className='d-flex all-hotel-btns'>
                  <button className='me-1 btn-default' >View</button>
                    <button className='me-1 btn-default'   >Edit</button>
                    <button className='me-1 btn-default' >Delete</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
    
      
        <Row className='hotel-profile-div mt-4' >
          <Col lg={4}>
            <div className='image-div'>
              <Image src={News2} />
            </div>
          </Col>

          <Col lg={8}>
            <div className='details-div mt-4'>
              <div className='mb-3'>
                <h4>Symphony Style Hotel, Quorvus Collection</h4>
                <h6>Created at : 2023-08-30</h6>
                <h5>Package expiry: 2024-01-30</h5>
              </div>
              <Row className='mt-5'>
                <Col lg={8} className='mt-2'>
                  <div className='time-left '>
                    <span>Time Left :75d 11h 36m 6s</span>
                  </div>
                </Col>
                <Col lg={4} className='mt-2'>
                  <div className='d-flex all-hotel-btns'>
                  <button className='me-1 btn-default' >View</button>
                    <button className='me-1 btn-default'   >Edit</button>
                    <button className='me-1 btn-default' >Delete</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
    
      <div className="col-lg-12">
        <div className="room-pagination">
          {apiData.length > postsPerPage &&
            Array.from({ length: Math.ceil(apiData.length / postsPerPage) }).map((_, index) => (
              <a
                key={index}
               
                className={index + 1 === currentPage ? 'active' : ''}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </a>
            ))}
          {/* Example: Next page button */}
          <a onClick={() => paginate(currentPage + 1)}>Next <i className="fa fa-long-arrow-right"></i></a>
        </div>
      </div>
      <HotelDeleteAlert
    hotel_id={hotelId} 
       showModal={showModal}
       handleClose={handleEditModal}
      />

      <EditHotelModal
       show={showEditModal}
       handleClose={showEditModal}
       hotel_id={hotelId} 
      />
      </>
    );
}
export default AllHotels;