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

import { useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Toast from 'react-bootstrap/Toast';




function Contact() {

    return (
        <div class="ContactUs">


        
            <div class="ContactUsContainer">

                        <div class="section-title text-center">
                            <h1>Contact Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. F   usce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-7 formInfo">
                                <br/><br/>
                                <div >
                                    <form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <input type="text" name="name" class="form-control" placeholder="Name" required="required" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="email" name="email" class="form-control" placeholder="Email" required="required" />
                                            </div>
                                            <br /><br /><br />
                                            <div class="form-group col-md-12">
                                                <input type="text" name="subject" class="form-control" placeholder="Subject" required="required" />
                                            </div>
                                            <br /><br /><br />
                                            <div class="form-group col-md-12">
                                                <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="col-lg-5 iconInfo">
                                <br/><br/>
                                <div class="single_address">
                                    <i class="fa fa-map-marker"></i>
                                    <h4 class="iconTitle">Our Address</h4>
                                    <p>3481 Melrose Place, Beverly Hills</p>
                                </div>
                                <div class="single_address">
                                    <i class="fa fa-envelope"></i>
                                    <h4 class="iconTitle">Send your message</h4>
                                    <p>Info@example.com</p>
                                </div>
                                <div class="single_address">
                                    <i class="fa fa-phone"></i>
                                    <h4 class="iconTitle">Call us on</h4>
                                    <p>(+1) 517 397 7100</p>
                                </div>
                                <div class="single_address">
                                    <i class="fa fa-clock-o"></i>
                                    <h4 class="iconTitle">Work Time</h4>
                                    <p>Mon - Fri: 08.00 - 16.00. <br />Sat: 10.00 - 14.00</p>
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