import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/About.css';
import '../App.css';
import { Footer } from '../components/Footer.js';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';

import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


import CarouselComponent from '../components/Carousel';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

import about2 from "../images/about2.jpg"

import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade';



function About() {
	const [show, setShow] = useState(false);
	const [dismiss, setDismiss] = useState(false);


	return (
		<div class="About">

			<div class="AboutBody" id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">


				<div class="jumbotron text-center">
					<Flash>
						<h1>Virtual Tour</h1>
						<p><i>- Made by Hansie Aloj</i></p>
					</Flash>
				</div>


				<div id="about" class="container-fluid divContainer">
					<div class="row">
						<Fade right>
							<div class="col-sm-8">
								<h2 class="divHeadings">About Company Page</h2><br />
								<h4 class="divHeadings">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<div class="col-sm-4">
								<span class="glyphicon glyphicon-signal logo"></span>
							</div>
						</Fade>
					</div>
				</div>

				<div class="container-fluid bg-grey divSolidContainer">
					<div class="row">
						<div class="col-sm-6">
							<Fade right>
								<img style={{ width: "100%" }} class="mt-4" src={about2} />
							</Fade>
						</div>
						<div class="col-sm-6">
							<br />
							<Fade left>
								<h2>Our Values</h2><br />
								<h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
								<p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</Fade>
						</div>
					</div>
				</div>


				<div id="services" class="container-fluid text-center divContainer">
					<h2 class="divHeadings"><Fade left>Support Us</Fade></h2>
					<h4 class="divHeadings"><Fade left>
						Support plays a huge role in any Successful journey. It’s the basis on which helps one be able to stand on their own two feet. Without a strong support system behind us, it’s easier to waver and crack under pressure. That’s why we are so grateful to be able to have an amazing crowd of support stand behind us.
					</Fade></h4>
					<h4 class="divHeadings"><Fade left>
						It will be really helpful for us if you follow us on our Social Media handles so that we can reach to you and many others! <br />Please click the below button to do so:
					</Fade></h4>

					<Fade left>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<CDBBox display="flex">
								<CDBBtn flat color="primary" className="p-2" onClick={() => { window.open("https://www.facebook.com/", "_blank"); }}>
									<CDBIcon fab icon="facebook-f" style={{ width: "50px" }} />
								</CDBBtn>
								<CDBBtn flat color="primary" className="mx-3 p-2" onClick={() => { window.open("https://twitter.com/", "_blank"); }}>
									<CDBIcon fab icon="twitter" style={{ width: "50px" }} />
								</CDBBtn>
								<CDBBtn flat color="primary" className="p-2" onClick={() => { window.open("https://www.instagram.com/", "_blank"); }}>
									<CDBIcon fab icon="instagram" style={{ width: "50px" }} />
								</CDBBtn>
							</CDBBox>
						</div>
					</Fade>

					<br /><br />
					
					<div class="d-flex justify-content-center">
						<Alert show={show} hidden={dismiss} variant="success">
							<Alert.Heading>Subscribed to News Letter!</Alert.Heading>
							<p>
								You have Successfully Subscribed to our News Letter.<br/>We Appreciate your gesture and it means a lot to us!<br/>Thank you!!!
							</p>
							<Button variant="outline-success" onClick={(e)=>setDismiss(true)}>Dismiss</Button>
						</Alert>
					</div>

					<br />


					<div hidden={show}>
						<h2 class="divHeadings"><Fade left>
							News Letter</Fade></h2>
						<h4 class="divHeadings"><Fade left>

							If you are loving the experience so far, Please Do Subscribe to our News Letter so that you never miss any update!
						</Fade></h4>

						<Fade left>
							<form>
								<div style={{ textAlign: "center" }}>
									<input type="email" class="form-control" style={{ width: "500px", height: "50px", margin: "auto" }} placeholder="Email Address" required />
									<button show={false} onClick={(e) => setShow(true)} type="button" class="btn btn-danger" style={{ width: "150px", height: "40px", marginTop: 10 }}>Subscribe</button>
								</div>
							</form>
						</Fade>
					</div>
				</div>


				<div class="container-fluid text-center bg-grey divSolidContainer">
					<Fade up>
						<h2>What our Users say</h2>

						<div class="item active">
							<h4>"This site is the best. I am so happy with the result!"<br /><span><i>Michael Roe, Vice President, Comment Box</i></span></h4>
						</div>
						<div class="item">
							<h4>"One word... WOW!!"<br /><span><i>John Doe, Salesman, Rep Inc</i></span></h4>
						</div>
						<div class="item">
							<h4>"Could I... BE any more happy with this site?"<br /><span><i>Chandler Bing, Actor, FriendsAlot</i></span></h4>
						</div>
					</Fade>
				</div>



			</div>

			<Footer class="Footer" />
		</div>
	);
}

export default About;