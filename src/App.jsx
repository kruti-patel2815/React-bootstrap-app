import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaPhone,
  FaLocationArrow,
  FaHeadphonesAlt,
  FaAngleDown,
  FaSearch,
  FaRegUser,
  FaRegComment,
  FaRegCommentAlt,
  FaBahai,
  FaGalacticRepublic,
  FaRegHeart,
  FaStar,
  FaFacebook,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";
import Logo from "./image/logo_black (1).png";

import Slider from "react-slick";
import image from "./image/bg-img-01.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./image/slide1.webp";
import image2 from "./image/slide_3.webp";
import React, { useState, useEffect } from "react";
import icon1 from "./image/icon1.png";
import icon2 from "./image/icon2.png";
import icon3 from "./image/icon3.png";
import icon4 from "./image/icon4.png";
import img1 from "./image/girl_with_spf_1.webp";
import img2 from "./image/a3.webp";
import img3 from "./image/a5_copy_2.webp";
import img4 from "./image/a2.webp";
import img5 from "./image/a1.webp";
import photo from "./image/BrighteningSerum_96bd55b9-b0f8-4ce8-82a6-53269ea9c0e9 (1).webp";
import cleanser from "./image/Cleanser_2_1.webp";
import p1 from "./image/image1.webp";
import p2 from "./image/image2.webp";
import p3 from "./image/image3.webp";
import p4 from "./image/image4.webp";
import p5 from "./image/289308348_570360974501923_4268642918911341495_n.webp";
import Accordion from "react-bootstrap/Accordion";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 992;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: windowWidth < 768 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <header>
        {/* Top Header - Hidden on mobile */}
        <Navbar className="top d-none d-md-flex header-top py-2">
          <Container fluid>
            <Row className="align-items-center w-100 g-0">
              {/* Left Section - Only Icons on medium screens */}
              <Col md={4} className="text-start">
                {/* Desktop - Full text */}
                <div
                  className="d-none d-lg-flex align-items-center flex-nowrap"
                  style={{ fontSize: "0.9rem" }}
                >
                  <div className="d-flex align-items-center me-3">
                    <FaPhone className="me-1" />
                    <span>+800-345-678</span>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <FaLocationArrow className="me-1" />
                    <span>Store</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaHeadphonesAlt className="me-1" />
                    <span>Virtual Appointment</span>
                  </div>
                </div>

                {/* Medium screens (800px-992px) - Only icons */}
                <div className="d-lg-none d-flex align-items-center">
                  <div className="d-flex align-items-center me-3">
                    <FaPhone className="fs-6" />
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <FaLocationArrow className="fs-6" />
                  </div>
                  <div className="d-flex align-items-center">
                    <FaHeadphonesAlt className="fs-6" />
                  </div>
                </div>
              </Col>

              {/* Center Section - Offer */}
              <Col md={4} className="text-center">
                <div className="d-inline-block" style={{ fontSize: "0.9rem" }}>
                  {/* Full text on desktop */}
                  <span className="fw-bold d-none d-lg-inline">
                    Get up to 35% off + Free shipping
                  </span>
                  {/* Short text on medium */}
                  <span className="fw-bold d-lg-none">
                    35% OFF + Free Shipping
                  </span>
                  <a href="#" className="ms-2 text-decoration-underline">
                    Shop Now
                  </a>
                </div>
              </Col>

              {/* Right Section - Countdown */}
              <Col md={4} className="text-end">
                <div style={{ fontSize: "0.9rem" }}>
                  <span className="fw-semibold d-none d-md-inline">
                    Ends in:{" "}
                  </span>
                  <span
                    className="badge bg-danger ms-1"
                    style={{ padding: "0.25rem 0.5rem", fontSize: "0.8rem" }}
                  >
                    Finished!
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
        {/* Bottom Header */}
        <Navbar className="header-bottom" expand="lg">
          <Container>
            {/* Mobile Logo & Toggle */}
            <div className="d-lg-none d-flex justify-content-between w-100 align-items-center">
              <Navbar.Brand href="#">
                <img src={Logo} alt="Logo" style={{ width: "120px" }} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav" />
            </div>

            <Navbar.Collapse id="navbar-nav">
              {/* Desktop Layout */}
              <div className="d-none d-lg-flex w-100 align-items-center justify-content-between position-relative">
                {/* Left Navigation - PAGES સુધી */}
                <div className="left-nav-section">
                  <ul className="navbar-nav flex-row">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle px-2"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        HOME
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle px-2"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        SHOP
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle px-2"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        PRODUCT
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle px-2"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        BLOG
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle px-2"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        PAGES
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Center Logo - Absolute Positioning */}
                <Navbar.Brand href="#" className="logo-center">
                  <img src={Logo} alt="Logo" style={{ width: "180px" }} />
                </Navbar.Brand>

                {/* Right Navigation */}
                <div className="right-nav-section">
                  <ul className="navbar-nav flex-row">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle px-2"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        USD
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle px-2"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        ENGLISH
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="#">
                        <FaSearch />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="#">
                        <FaRegUser />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2 position-relative" href="#">
                        <FaRegComment />
                        <span
                          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                          style={{
                            fontSize: "0.6rem",
                            padding: "0.1rem 0.25rem",
                          }}
                        >
                          3
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2 position-relative" href="#">
                        <FaRegHeart />
                        <span
                          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                          style={{
                            fontSize: "0.6rem",
                            padding: "0.1rem 0.25rem",
                          }}
                        >
                          2
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="d-lg-none">
                {/* Mobile Navigation Items */}
                <ul className="navbar-nav mb-3">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      SHOP
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      PRODUCT
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      BLOG
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      PAGES
                    </a>
                  </li>
                </ul>

                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      USD
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      ENGLISH
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <FaSearch />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <FaRegUser />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <FaRegComment />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <FaRegHeart />
                    </a>
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <hero>
        <Carousel fade>
          <Carousel.Item>
            <img className="carousel-image" src={image} alt="First slide" />
            <Carousel.Caption className="carousel-caption-custom">
              <h3>"Advanced Science Of Care That Uplifts And Inspires."</h3>
              <p>
                Specially priced diamond studs and tennis bracelets. These
                timeless
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-image" src={image1} alt="Second slide" />
            <Carousel.Caption className="carousel-caption-custom">
              <h3>"Your Skin's Best Solutions for Every Concern."</h3>
              <p>
                Bring your love to life with a handcrafted design that perfectly
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-image" src={image2} alt="Third slide" />
            <Carousel.Caption className="carousel-caption-custom">
              <h3>"Advanced Science Of Care That Uplifts And Inspires."</h3>
              <p>
                Specially priced diamond studs and tennis bracelets. These
                timeless
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="slider-container">
          <Slider {...settings}>
            <div className="slider-item">
              <h3>
                <FaBahai /> BLOSSOM
              </h3>
            </div>
            <div className="slider-item">
              <h3>
                <IoSunnySharp /> REVITALIZE
              </h3>
            </div>
            <div className="slider-item">
              <h3>
                <FaBahai /> BLOSSOM
              </h3>
            </div>
            <div className="slider-item">
              <h3>
                <IoSunnySharp /> REVITALIZE
              </h3>
            </div>
            <div className="slider-item">
              <h3>
                <FaBahai /> BLOSSOM
              </h3>
            </div>
            <div className="slider-item">
              <h3>
                <IoSunnySharp /> REVITALIZE
              </h3>
            </div>
          </Slider>
        </div>
      </hero>

      <main>
        <Container className="pt-5 text-center">
          <h4 className="heading">WHAT WE BELIEVE</h4>
          <span className="heading1 text-center">
            IT'S ABOUT YOUR SKIN, BUT IT'S <br className="d-none d-md-block" />{" "}
            ALSO ABOUT YOU.
          </span>
          <p className="heading2 text-center">
            While we believe in the power of science and the role it has in
            determining how one's skin looks and feels, we
            <br className="d-none d-lg-block" />
            also acknowledge that skincare is as much an emotional journey as it
            is a physical one.
          </p>

          <Row className="icon justify-content-center">
            <Col xs={6} sm={3} className="mb-4 mb-sm-0">
              <img src={icon1} alt="" className="img-fluid" />
              <div className="line-text mt-2">FOR ALL SKIN TYPES</div>
            </Col>
            <Col xs={6} sm={3} className="mb-4 mb-sm-0">
              <img src={icon2} alt="" className="img-fluid" />
              <div className="line-text mt-2">NOT TESTED ON ANIMALS</div>
            </Col>
            <Col xs={6} sm={3} className="mb-4 mb-sm-0">
              <img src={icon3} alt="" className="img-fluid" />
              <div className="line-text mt-2">HYPOALLERGENIC</div>
            </Col>
            <Col xs={6} sm={3} className="mb-4 mb-sm-0">
              <img src={icon4} alt="" className="img-fluid" />
              <div className="line-text mt-2">FREE FROM PARABENS</div>
            </Col>
          </Row>
        </Container>
      </main>

      <collection>
        <div className="collection">
          <Container>
            <h2 className="heading3 ">COLLECTION BUNCH</h2>
            <h1>Shop By Categories</h1>

            <div className="d-flex flex-nowrap overflow-auto pt-4 categories-scroll">
              <div className="category-item text-center mx-2">
                <img src={img1} alt="" className="img-fluid rounded" />
                <div className="mt-2">Cleanser</div>
              </div>
              <div className="category-item text-center mx-2">
                <img src={img2} alt="" className="img-fluid rounded" />
                <div className="mt-2">Moisturizer</div>
              </div>
              <div className="category-item text-center mx-2">
                <img src={img3} alt="" className="img-fluid rounded" />
                <div className="mt-2">Serum Ampoule</div>
              </div>
              <div className="category-item text-center mx-2">
                <img src={img4} alt="" className="img-fluid rounded" />
                <div className="mt-2">Sun Protection</div>
              </div>
              <div className="category-item text-center mx-2">
                <img src={img5} alt="" className="img-fluid rounded" />
                <div className="mt-2">Eye Care</div>
              </div>
            </div>
          </Container>
        </div>
      </collection>

      <rating>
        <Container>
          <Row className="rating align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="heading3 ">AMAZING</h2>
              <div className="mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="heading4">
                The Ring Is AMAZING. It's An Eye Catcher For Everyone. Extremely
                Well Made And We Love It
              </p>
              <h5 className="heading5">— Joseph M.</h5>
            </Col>
            <Col md={6}>
              <img src={photo} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </rating>

      <bunch>
        <div className="background-container d-flex align-items-center">
          <Container>
            <Row>
              <Col lg={6} md={8} sm={10}>
                <div className="top-left-box">
                  <h2 className="heading3 ">BUNCH COLLECTION</h2>
                  <span className="heading1">
                    Personalized Formulas <br />
                    Tailored Just for You.
                  </span>
                  <p className="heading6">
                    Our formulas are carefully crafted to work best for you,
                    with only the essential ingredients needed for great
                    results.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-dark btn-shop">
                      Shop Now
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </bunch>

      <journey>
        <Container>
          <div className="margin">
            <h1 className="text-center text-md-left">
              Make Us A Part Of Your Skin
              <br className="d-none d-md-block" /> Care Journey.
            </h1>

            <Row className="justify-content-center pt-4">
              <Col xs={6} sm={6} md={3} className="mb-4">
                <img src={p1} alt="" className="img-fluid rounded" />
                <div className="text-center mt-3">
                  <a href="#" className="btn btn-underline">
                    Plant Extracts
                  </a>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} className="mb-4">
                <img src={p2} alt="" className="img-fluid rounded" />
                <div className="text-center mt-3">
                  <a href="#" className="btn btn-underline">
                    One Of A Kind SPF
                  </a>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} className="mb-4">
                <img src={p3} alt="" className="img-fluid rounded" />
                <div className="text-center mt-3">
                  <a href="#" className="btn btn-underline">
                    Highly Effective
                  </a>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} className="mb-4">
                <img src={p4} alt="" className="img-fluid rounded" />
                <div className="text-center mt-3">
                  <a href="#" className="btn btn-underline">
                    Advanced Science
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </journey>

      <faqs>
        <div className="faqs">
          <Container>
            <h2 className="heading3 ">FAQS</h2>
            <p className="heading7">Frequently Asked Questions</p>
            <Row>
              <Col md={6} className="mb-4 mb-md-0">
                <img src={p5} alt="" className="img-fluid rounded" />
              </Col>
              <Col md={6}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="q1">
                      How do you choose what materials to use?
                    </Accordion.Header>
                    <Accordion.Body>
                      Act natural. We also use mostly natural materials, which
                      break down better and are less of a pollutant than the
                      synthetic fibers that are being found in oceans and water
                      supplies.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="q1">
                      Where are your products made?
                    </Accordion.Header>
                    <Accordion.Body>
                      We want you to be completely satisfied with your purchase.
                      If for any reason you are not, you can return any item in
                      its original condition within 30 days of receipt for a
                      full refund or exchange.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="q1">
                      What are you doing to be more sustainable?
                    </Accordion.Header>
                    <Accordion.Body>
                      Absolutely. We prioritize the security of our customers'
                      data. Our website uses Secure Socket Layer (SSL)
                      encryption to ensure that your personal and payment
                      information is kept safe and private.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="q1">
                      Why choose SPF for Pore and Acne Care?
                    </Accordion.Header>
                    <Accordion.Body>
                      Absolutely. We prioritize the security of our customers'
                      data. Our website uses Secure Socket Layer (SSL)
                      encryption to ensure that your personal and payment
                      information is kept safe and private.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </div>
      </faqs>

      <hr className="my-0" style={{ color: "black", height: "2px" }}></hr>

      <footer>
        <div className="footer-top">
          <Container>
            <Row>
              <Col lg={3} md={6} className="mb-4">
                <div className="footer-left">
                  <h4>CONTACT US</h4>
                  <p>Email: clientcare@bunch.com</p>
                  <p>Phone: 1.888.838.3022</p>
                  <p>
                    Hours: Monday – Thursday: 9AM – 7PM ET, Friday: 9AM – 2PM ET
                  </p>
                </div>
              </Col>
              <Col lg={2} md={4} className="mb-4">
                <div className="left1">
                  <h4>INFORMATION</h4>
                  <ul className="list-unstyled">
                    <li className="footer-list mb-2">
                      <a href="#">My Account</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Order History</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Wishlist</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Specials</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Press</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={4} className="mb-4">
                <div className="left2">
                  <h4>FOOTER MENU</h4>
                  <ul className="list-unstyled">
                    <li className="footer-list mb-2">
                      <a href="#">Search</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Contact Us</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Returns</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Site Map</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Brands</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={4} className="mb-4">
                <div className="left3">
                  <h4>COLLECTIONS</h4>
                  <ul className="list-unstyled">
                    <li className="footer-list mb-2">
                      <a href="#">Acne Care</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Basic Care</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Blazers</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Bundles</a>
                    </li>
                    <li className="footer-list mb-2">
                      <a href="#">Extra Care</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6} className="mb-4">
                <div className="footer-right">
                  <h5>Let's stay in touch.</h5>
                  <p>
                    Sign up for private sales, new launches, style tips and
                    more.
                  </p>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>
                  <button type="submit" className="btn-theme mb-3 w-100">
                    SUBSCRIBE
                  </button>
                  <ul className="d-flex justify-content-center list-unstyled">
                    <li className="list-item me-3">
                      <a href="#">
                        <FaFacebook size={20} />
                      </a>
                    </li>
                    <li className="list-item me-3">
                      <a href="#">
                        <FaXTwitter size={20} />
                      </a>
                    </li>
                    <li className="list-item me-3">
                      <a href="#">
                        <FaPinterest size={20} />
                      </a>
                    </li>
                    <li className="list-item me-3">
                      <a href="#">
                        <FaInstagram size={20} />
                      </a>
                    </li>
                    <li className="list-item me-3">
                      <a href="#">
                        <FaYoutube size={20} />
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="#">
                        <FaTiktok size={20} />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <p className="bottom mb-0"> © 2024 - Bunch. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
