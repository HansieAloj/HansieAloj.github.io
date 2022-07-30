import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


import '../components/Home.css';
import '../App.css';
import { Footer } from '../components/Footer.js';

import CarouselComponent from '../components/Carousel';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

import React from 'react';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Tada from 'react-reveal/Tada';


import img0 from "../images/carousel/img0.jpg"
import img1 from "../images/carousel/img1.jpg"
import img2 from "../images/carousel/img2.jpg"
import img3 from "../images/carousel/img3.jpg"

import statueOfLiberty from "../images/topRated/statueOfLiberty.jpg"
import tajMahal from "../images/topRated/tajMahal.jpg"
import niagaraFalls from "../images/topRated/niagaraFalls.jpg"





function Home() {

    var myObject = {
        0 : {img: img0, title: "Islands", desc:'No matter where they are in the world, islands make everyone happy and calm.'},
        1 : {img: img1, title: "Mountains", desc:'“The mountains are calling, and I must go.” John Muir perfectly sums up our feelings about these majestic natural wonders. Mountains have always been a source of awe and beauty, and sometimes we don\'t have the words to capture how much we admire them.'},
        2 : {img: img2, title: "Beaches", desc:'There’s nothing like a relaxing day at the beach to soak up all your worries. Just closing your eyes and imagining the soft sand caressing your toes as gentle waves lap the shore and the sun shines warmly down is enough to bring about a feeling of tranquillity.'},
        4 : {img: img3, title: "Waterfalls", desc:'Roaring and powerful, yet serene and calming, waterfalls are one of nature’s most magical creations. “There\'s no better place to find yourself than sitting by a waterfall and listening to its music” ― Roland R Kemler'},
    };

  return (
    <div class="Home">
        {/* <div class="Header">
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
                    <Button variant="outline-primary" active>Home</Button>{' '}

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

                    <Button variant="outline-primary">About Us</Button>

                    <div class='space'/>

                    <Button variant="outline-primary">Contact Us</Button>

                </Nav>

                <Button variant="dark">Login</Button>

                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div> */}

        <Tada>
        <h1 class="banner">Popular Landscapes</h1>
        </Tada>
        <br/>

        <Zoom left>
        <div class="Carousel">
            {/* <CarouselComponent src="./images/explore/SevenWonders/tajMahal1.jpg"/> */}
            <CarouselComponent obj={myObject}/>
        </div>
        </Zoom>

        <br/><br/>
        <Tada>
        <h1 class="banner">Top Rated Places</h1>
        </Tada>

        <div class="Cards">
        <LightSpeed left>


        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={statueOfLiberty} class="cardImage"/>
            <Card.Body>
                <Card.Title>The Statue of Liberty</Card.Title>
                <Card.Text>
                    The Statue of Liberty is one of the most well-known and beloved monuments in America. It stands to welcome in immigrants to New York Harbor and to let people who are returning home know that they have reached America.
                </Card.Text>
                <Button variant="primary" target="_blank" href="https://earth.google.com/web/@40.6892494,-74.0445004,41.99810379a,777.91377107d,35y,0h,45t,0r/data=ChAaDgoIL20vMDcycDgYAiABKAI">
                    View 360°
                </Button>
                <div class="space"/>
                <Button variant="info">
                    Rating <Badge bg="dark">4.7⭐</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={tajMahal} class="cardImage"/>
            <Card.Body>
                <Card.Title>Taj Mahal</Card.Title>
                <Card.Text>
                    Taj Mahal represents the finest architectural and artistic achievement through perfect harmony and excellent craftsmanship. It is a masterpiece of architectural style in conception, treatment and execution.                
                </Card.Text>
                <Button variant="primary" target="_blank" href="https://earth.google.com/web/@27.173059,78.042134,157.84889705a,471.54638365d,35y,0h,59.99245526t,0r/data=CjISMBIgMWNlYzBmZjgyNTA0MTFlN2JlYTcxN2E0Njc3ZDAzZDUiDHNwbGFzaHNjcmVlbg">
                    View 360°
                </Button>

                <div class="space"/>

                {/* <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Simple tooltip</Tooltip>}> */}
                <Button variant="info">
                    Rating <Badge bg="dark">4.6⭐</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
                {/* </OverlayTrigger> */}
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={niagaraFalls} class="cardImage"/>
            <Card.Body>
                <Card.Title>Niagara Falls</Card.Title>
                <Card.Text>
                    What makes Niagara Falls so impressive is the amount of water flowing over. Most of the tallest falls in the world have very little water flowing over them. It's the combination of height and volume that makes Niagara Falls so breathtaking.                
                </Card.Text>
                <Button variant="primary" className="CardButton" target="_blank" href="https://earth.google.com/web/search/Niagara+Falls,+Niagara+Falls,+NY,+USA/@43.0828162,-79.0741629,98.65325994a,746.72019975d,35y,0h,45t,0r/data=CpABGmYSYAolMHg4OWQzNDMwNzQxMmQ3YWU5OjB4MjliZTFkMWU2ODljZTM1YhkcSqO4mYpFQCHlhL8Vv8RTwColTmlhZ2FyYSBGYWxscywgTmlhZ2FyYSBGYWxscywgTlksIFVTQRgCIAEiJgokCeD32gjAi0VAEY4exOF4ikVAGW7rfrWhxFPAIWlhIkB4xlPAKAI">
                    View 360°
                </Button>
                <div class="space"/>
                <Button variant="info">
                    Rating <Badge bg="dark">4.8⭐</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
            </Card.Body>
            </Card>
            </LightSpeed>

        </div>

        <Footer class="Footer"/>
    </div>
  );
}

export default Home;