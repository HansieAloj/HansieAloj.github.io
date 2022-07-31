import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Contact.css';
import '../App.css';
import { Footer } from '../components/Footer.js';

import CarouselComponent from '../components/Carousel';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import CarouselOffcanvasComponent from '../components/CarouselOffcanvas';
import CarouselModalComponent from '../components/CarouselModal';
import CarouselCardComponent from '../components/CarouselCards';
import MultiCarouselComponent from '../components/MultiCarousel.js';

import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Toast from 'react-bootstrap/Toast';

import Slide from 'react-reveal/Slide';





function Contact() {
    const [show, setShow] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setShow(true)
    }

    return (
        <div class="ContactUs">

            <div class="ContactUsContainer">
                <div class="section-title text-center">
                    <Slide top>
                        <h1>Contact Us</h1>
                        <p>
                            Want to get in touch? We'd love to hear from you! Let's Connect!!!<br/>Here's how you can reach us...
                        </p>
                    </Slide>
                </div>
                <div class="row">
                    <div class="col-lg-7 formInfo">
                        <br />
                        <Slide left>
                            <div >
                                {/* <form class="form" name="enq" method="post" action={handleSubmit}> */}
                                <form class="form">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <input type="text" name="name" class="form-control" placeholder="Name" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="email" name="email" class="form-control" placeholder="Email" />
                                        </div>
                                        <br /><br /><br />
                                        <div class="form-group col-md-12">
                                            <input type="text" name="subject" class="form-control" placeholder="Subject" />
                                        </div>
                                        <br /><br /><br />
                                        <div class="form-group col-md-12">
                                            <textarea rows="6" name="message" class="form-control" placeholder="Your Message"></textarea>
                                        </div>
                                        <div class="col-md-12 text-center">
                                        <br />
                                            <button onClick={handleSubmit} type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Slide>
                        <div class="d-flex justify-content-center">
                            <Toast bg="success" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                <Toast.Header>
                                    <strong className="me-auto">Message Sent!</strong>
                                </Toast.Header>
                                <Toast.Body>We received your Message! Thanks for reaching out to us.</Toast.Body>
                            </Toast>
                        </div>
                    </div>

                    <div class="col-lg-5 iconInfo">
                        <br />
                        <div class="single_address">
                            <i class="fa fa-map-marker"></i>
                            <h4 class="iconTitle"><Slide left>Our Address</Slide></h4>
                            <p><Slide left>New Street, Mumbai, India</Slide></p>
                        </div>
                        <div class="single_address">
                            <i class="fa fa-envelope"></i>
                            <h4 class="iconTitle"><Slide left>Send your message</Slide></h4>
                            <p><Slide left>contact@virtualtour.com</Slide></p>
                        </div>
                        <div class="single_address">
                            <i class="fa fa-phone"></i>
                            <h4 class="iconTitle"><Slide left>Call us on</Slide></h4>
                            <p><Slide left>(+91) 9990000999</Slide></p>
                        </div>
                        <div class="single_address">
                            <i class="fa fa-clock-o"></i>
                            <h4 class="iconTitle"><Slide left>Work Time</Slide></h4>
                            <p><Slide left>Mon - Fri: 08.00 - 16.00. <br />Sat: 10.00 - 14.00</Slide></p>
                        </div>
                    </div>
                </div>
                {/* </div>
                </div>
            </div> */}


                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            </div>

            <div>
                <Footer class="Footer" />
            </div>

        </div>
    );
}

export default Contact