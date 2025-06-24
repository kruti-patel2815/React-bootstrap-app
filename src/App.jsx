
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
import cleanser from "./image/Cleanser_2_1.webp";
import p1 from "./image/image1.webp";
import p2 from "./image/image2.webp";
import p3 from "./image/image3.webp";
import p4 from "./image/image4.webp";
import p5 from "./image/289308348_570360974501923_4268642918911341495_n.webp";
import Accordion from 'react-bootstrap/Accordion';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
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
              <p className='heading4'>The Ring Is AMAZING. It's An Eye Catcher For Everyone. Extremely Well Made And We Love It</p>
              <h5 className='heading5'>— Joseph M.</h5>
            </Col>
            <Col>
              <img src={photo} alt="" />
            </Col>
          </Row>

        </Container>
      </rating>
      <bunch>

        <div className="background-container">
          <div className="top-left-box">
            <h2 className="heading3 ">BUNCH COLLECTION</h2>
            <span className="heading1 text-center">
              Personalized Formulas <br />Tailored Just for You.
            </span>
            <p className="heading6 text-left">

              Our formulas are carefully crafted to work best for you, with only the  <br /> essential ingredients needed for great results.

            </p>
            <div className='parallax-banner__btn  align-items-center'>
              <div className='mt-3'>
                <div className='parallax-banner__btn align-items-center'>
                  <div className='mt-3'>
                    <a
                      href="#"
                      className="btn"
                      style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '15px 50px',
                        border: 'none',
                        borderRadius: '4px',
                        display: 'inline-block',
                        textDecoration: 'none'
                      }}
                    >
                      Shop Now
                    </a>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>

      </bunch>
      <journey>
        <Container>
          <div className='margin'>
            <h1 className="text-left">
              Make Us A Part Of Your Skin<br /> Care Journey.
            </h1>

            <Row className=" text-center flex-nowrap overflow-auto pt-4">
              <Col xs="auto"><img src={p1} alt="" style={{ width: '260px' }} /></Col>
              <Col xs="auto"><img src={p2} alt="" style={{ width: '260px' }} /></Col>
              <Col xs="auto"><img src={p3} alt="" style={{ width: '260px' }} /></Col>
              <Col xs="auto"><img src={p4} alt="" style={{ width: '260px' }} /></Col>

            </Row>
            <Row className="text-center flex-nowrap overflow-auto pt-4">
              <Col><a href="#" className="btn btn-underline">Plant Extracts</a></Col>
              <Col><a href="#" className="btn btn-underline">One Of A Kind SPF</a></Col>
              <Col><a href="#" className="btn btn-underline">Highly Effective</a></Col>
              <Col><a href="#" className="btn btn-underline">Advanced Science</a></Col>
            </Row>
          </div>


        </Container>
      </journey>
      <faqs>
        <div className='faqs'>
          <Container>
            <h2 className="heading3 ">FAQS</h2>
            <p className='heading7'>Frequently Asked Questions</p>
            <Row>
              <Col md={6}>
                <img src={p5} alt="" style={{ width: "100%" }} /></Col>
              <Col md={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className='q1'>How do you choose what materials to use?</Accordion.Header>
                    <Accordion.Body>
                      Act natural. We also use mostly natural materials, which break down better and are less of a pollutant than the synthetic fibers that are being found in oceans and water supplies.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className='q1'>Where are your products made?</Accordion.Header>
                    <Accordion.Body>
                      We want you to be completely satisfied with your purchase. If for any reason you are not, you can return any item in its original condition within 30 days of receipt for a full refund or exchange. Please ensure that the products have all original tags and packaging. To initiate a return, visit our "Returns" page and follow the instructions provided. Remember to keep your receipt as proof of purchase. Some exclusions may apply, so be sure to check our detailed return policy for more information.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className='q1'>What are you doing to be more sustainable?</Accordion.Header>
                    <Accordion.Body>
                      Absolutely. We prioritize the security of our customers' data. Our website uses Secure Socket Layer (SSL) encryption to ensure that your personal and payment information is kept safe and private. This means that any information you input during the checkout process is encrypted before being transmitted over the internet. Additionally, we never store your credit card details on our servers. For more information about how we protect your data, please refer to our Privacy Policy.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className='q1'>Why choose SPF for Pore and Acne Care?</Accordion.Header>
                    <Accordion.Body>
                      Absolutely. We prioritize the security of our customers' data. Our website uses Secure Socket Layer (SSL) encryption to ensure that your personal and payment information is kept safe and private. This means that any information you input during the checkout process is encrypted before being transmitted over the internet. Additionally, we never store your credit card details on our servers. For more information about how we protect your data, please refer to our Privacy Policy.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>

        </div>
      </faqs>
      <hr style={{ margin: "0", color: 'black', height: '2px' }}></hr>
      <footer>
        <div className='footer-top'>
          <Container>
            <Row>
              <Col lg={3} md={6}>
                <div className='footer-left'>
                  <h4>CONTACT US</h4>
                  <p>Email: clientcare@bunch.com</p>
                  <p>Phone: 1.888.838.3022</p>
                  <p>Hours: Monday – Thursday: 9AM – 7PM ET, Friday: 9AM – 2PM ET</p>
                </div>
              </Col>
              <Col lg={2} md={4}>
                <div className='left1'>
                  <h4>INFORMATION</h4>
                  <ul>
                    <li className='footer-list'>
                      <a href="#">My Account</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Order History</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Wishlist</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Specials</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Press</a>
                    </li>
                  </ul>

                </div>
              </Col>
              <Col lg={2} md={4}>
                <div className='left2'>
                  <h4>FOOTER MENU</h4>
                  <ul>
                    <li className='footer-list'>
                      <a href="#">Search</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Contact Us</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Returns</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Site Map</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Brands</a>
                    </li>
                  </ul>

                </div>
              </Col>
              <Col lg={2} md={4}>
                <div className='left3'>
                  <h4>COLLECTIONS</h4>
                  <ul>
                    <li className='footer-list'>
                      <a href="#">Acne Care</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Basic Care</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Blazers</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Bundles</a>
                    </li>
                    <li className='footer-list'>
                      <a href="#">Extra Care</a>
                    </li>
                  </ul>

                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className='footer-right'>
                  <h1>Let's stay in touch.</h1>
                  <p>Sign up for private sales, new launches, style tips and more.</p>
                  <input type="text" placeholder='Your email' style={{ padding: '10px' }} />
                  <button type='submit' className='btn-theme'>SUBSCRIBE</button>
                  <ul className='flex'>
                    <li className='list-item'><a href="#"><FaFacebook /></a></li>
                    <li className='list-item'><a href="#"><FaXTwitter /></a></li>
                    <li className='list-item'><a href="#"><FaPinterest /></a></li>
                    <li className='list-item'><a href="#"><FaInstagram /></a></li>
                    <li className='list-item'><a href="#"><FaYoutube /></a></li>
                    <li className='list-item'><a href="#"><FaTiktok /></a></li>
                  </ul>

                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='footer-bottom'>
          <p className='bottom'> © 2024 - Bunch. All rights reserved.</p>
        </div>
      </footer>



    </>
  );
}

export default App;
