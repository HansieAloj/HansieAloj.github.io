import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/About.css';
import '../App.css';
import { Footer } from '../components/Footer.js';

import CarouselComponent from '../components/Carousel';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';






function About() {

  return (
    <div class="About">
        <div class="Header">
            <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="#" active>
                    <img
                    src="./images/logo.jpg"
                    width="100"
                    //   height="65"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>        
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Button variant="outline-primary">Home</Button>{' '}

                    <div class='space'/>

                    <Dropdown as={ButtonGroup}>
                        <Button variant="outline-primary">Explore</Button>
                        <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div class='space'/>

                    <Dropdown as={ButtonGroup}>
                        <Button variant="outline-primary">Regions</Button>
                        <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div class='space'/>

                    <Button variant="outline-primary" active>About Us</Button>

                    <div class='space'/>

                    <Button variant="outline-primary">Contact Us</Button>

                </Nav>

                <Button variant="dark">Login</Button>

                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>


        <div class="AboutBg">
            <div class="AboutContainer">
            <h2>Two Equal Columns</h2>

                <div class="row">
                    <div class="column">
                        <h2>Column 1</h2>
                        <p>Some text..</p>
                    </div>
                    <div class="column">
                        <h2>Column 2</h2>
                        <p>Some text..</p>
                    </div>
                </div>


            </div>

            <h2>Two Equal Columns</h2>

        </div>


        <Footer class="Footer"/>
    </div>
  );
}

export default About;