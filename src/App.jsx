
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

import Slider from "react-slick";
import image from "./image/bg-img-01.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel';
import image1 from "./image/slide1.webp";
import image2 from "./image/slide_3.webp";
import { FaBahai } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import React from "react";
import { FaGalacticRepublic } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import icon1 from "./image/icon1.png";
import icon2 from "./image/icon2.png";
import icon3 from "./image/icon3.png";
import icon4 from "./image/icon4.png";
import img1 from "./image/girl_with_spf_1.webp";
import img2 from "./image/a3.webp";
import img3 from "./image/a5_copy_2.webp";
import img4 from "./image/a2.webp";
import img5 from "./image/a1.webp";
import { FaStar } from "react-icons/fa";
import photo from "./image/BrighteningSerum_96bd55b9-b0f8-4ce8-82a6-53269ea9c0e9 (1).webp";
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
  const slide = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
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

        <Carousel fade>
          <Carousel.Item>
            <img className='carousel-image' src={image} alt="First slide" />
            <Carousel.Caption>
              <h3>
                "Advanced Science Of Care
                That Uplifts And Inspires."
              </h3>
              <p>
                Specially priced diamond studs and tennis bracelets. These timeless </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className='carousel-image' src={image1} alt="Second slide" />
            <Carousel.Caption>
              <h3>
                "Your Skin's Best Solutions for Every Concern."
              </h3>
              <p>
                Bring your love to life with a handcrafted design that perfectly</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className='carousel-image' src={image2} alt="Third slide" />
            <Carousel.Caption>
              <h3>
                "Advanced Science Of Care
                That Uplifts And Inspires."</h3>
              <p>Specially priced diamond studs and tennis bracelets. These timeless</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3><FaBahai />BLOSSOM</h3>
            </div>
            <div>
              <h3><IoSunnySharp />REVITALIZE</h3>
            </div>
            <div>
              <h3><FaBahai />BLOSSOM</h3>
            </div>
            <div>
              <h3><IoSunnySharp />REVITALIZE</h3>
            </div>
            <div>
              <h3><FaBahai />BLOSSOM</h3>
            </div>
            <div>
              <h3><IoSunnySharp />REVITALIZE</h3>
            </div>

          </Slider>
        </div>


      </hero>

      <main>
        <Container className="pt-5 text-center">
          <h4 className="heading">WHAT WE BELIEVE</h4>
          <span className="heading1 text-center">
            IT’S ABOUT YOUR SKIN, BUT IT’S <br /> ALSO ABOUT YOU.
          </span>
          <p className='heading2 text-center'>While we believe in the power of science and the role it has in determining how one’s skin looks and feels, we<br />
            also acknowledge that skincare is as much an emotional journey as it is a physical one.</p>

          <Row className='icon'>
            <Col><img src={icon1} alt="" /></Col>
            <Col><img src={icon2} alt="" /></Col>
            <Col><img src={icon3} alt="" /></Col>
            <Col><img src={icon4} alt="" /></Col>
          </Row>

          <Row className='line'>
            <Col>FOR ALL SKIN TYPES</Col>
            <Col>NOT TESTED ON ANIMALS</Col>
            <Col>HYPOALLERGENIC</Col>
            <Col>FREE FROM PARABENS</Col>
          </Row>
        </Container>




      </main>
      <collection>
        <div className='collection'>
          <Container>
            <h2 className="heading3 ">COLLECTION BUNCH</h2>
            <h1>Shop By Categories</h1>


            <Row className="justify-content-center text-center flex-nowrap overflow-auto pt-4">
              <Col xs="auto"><img src={img1} alt="" style={{ width: '200px' }} /></Col>
              <Col xs="auto"><img src={img2} alt="" style={{ width: '200px' }} /></Col>
              <Col xs="auto"><img src={img3} alt="" style={{ width: '200px' }} /></Col>
              <Col xs="auto"><img src={img4} alt="" style={{ width: '200px' }} /></Col>
              <Col xs="auto"><img src={img5} alt="" style={{ width: '200px' }} /></Col>
            </Row>


            <Row className="justify-content-center text-center mt-2 pt-2  ">
              <Col >Cleanser</Col>
              <Col >Moisturizer</Col>
              <Col >Serum Ampoule</Col>
              <Col >Sun Protection</Col>
              <Col >Eye Care</Col>
            </Row>
          </Container>

        </div>

      </collection>
      <rating>
        <Container>
          <Row className='rating'>
            <Col>
              <h2 className="heading3 ">AMAZING</h2>
              <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
              <p>The Ring Is AMAZING. It's An Eye Catcher For Everyone. Extremely Well Made And We Love It</p>
            </Col>
            <Col>
              <img src={photo} alt="" />
            </Col>
          </Row>

        </Container>
      </rating>



    </>
  );
}

export default App;
