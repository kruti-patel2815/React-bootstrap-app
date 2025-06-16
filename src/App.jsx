
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import Logo from './image/logo_black (1).png';
import React from "react";
import Slider from "react-slick";
import image from "./image/bg-img-01.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
    
  };
  return (
    <>
      <header>
        <Navbar className='top' class='header-top'>
          <Container>
            <Row style={{ alignItems: "center" }}>

              <Col style={{ textAlign: "center" }} xs={4}>

                <Row>

                  <Col xs={4}><FaPhone />+800-345-678</Col>
                  <Col xs={4}><FaLocationArrow />Store</Col>
                  <Col xs={4}><FaHeadphonesAlt />Virtual Appointment</Col>
                </Row>

              </Col>



              <Col style={{ textAlign: "center" }} xs={4}>Get up to 35% off + Free shipping <a href="">Shop Now</a></Col>
              <Col style={{ textAlign: "center" }} xs={4}>Ends in Countdown Finished!</Col>
            </Row>
          </Container>
        </Navbar>
        <Navbar className='' class='header-bottom'>
          <Container>
            <Row style={{ alignItems: "center" }}>
              <Col style={{ textAlign: "center" }}>
                <ul className='flex' >
                  <li class='nav-item'>HOME<FaAngleDown /></li>
                  <li class='nav-item'>SHOP<FaAngleDown /></li>
                  <li class='nav-item'>PRODUCT<FaAngleDown /></li>
                  <li class='nav-item'>BLOG<FaAngleDown /></li>
                  <li class='nav-item'>PAGES<FaAngleDown /></li>
                </ul>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <img src={Logo} alt="Logo" style={{ width: "43%", height: "40px" }} />


              </Col>
              <Col style={{ textAlign: "center" }}>
                <ul className='flex' >
                  <li class='nav-item'>USD<FaAngleDown /></li>
                  <li class='nav-item'>ENGLISH<FaAngleDown /></li>
                  <li class='nav-item'><FaSearch /></li>
                  <li class='nav-item'><FaRegUser /></li>
                  <li class='nav-item'><FaRegComment /></li>
                  <li class='nav-item'><FaRegCommentAlt /></li>

                </ul>
              </Col>

            </Row>
          </Container>

        </Navbar>

      </header>
      <hero>

        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3><img src={image} alt="" style={{width:"100%"}} /></h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            
          </Slider>
        </div>




      </hero>



    </>
  );
}

export default App;
