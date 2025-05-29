
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

function App() {
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
              <Col style={{textAlign: "center" }}>
                <ul class='flex padding' >
                  <li class='nav-item'>HOME<FaAngleDown /></li>
                  <li class='nav-item'>SHOP<FaAngleDown /></li>
                  <li class='nav-item'>PRODUCT<FaAngleDown /></li>
                  <li class='nav-item'>BLOG<FaAngleDown /></li>
                  <li class='nav-item'>PAGES<FaAngleDown /></li>
                </ul>
              </Col>
              <Col style={{ textAlign: "center" }}>2</Col>
              <Col style={{ textAlign: "center" }}>3</Col>

            </Row>
          </Container>

        </Navbar>
      </header>



    </>
  );
}

export default App;
