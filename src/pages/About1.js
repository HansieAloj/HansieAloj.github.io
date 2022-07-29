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


import CarouselComponent from '../components/Carousel';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

import about2 from "../images/about2.jpg"


function About1() {

  return (
    <div class="About">

      <div class="AboutBody" id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">


        <div class="jumbotron text-center">
          <h1>Virtual Tour</h1>
          <p><i>- Made by Hansie Aloj</i></p>

        </div>

        {/* <br/> */}

        <div id="about" class="container-fluid divContainer">
          <div class="row">
            <div class="col-sm-8">
              <h2 class="divHeadings">About Company Page</h2><br />
              <h4 class="divHeadings">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-signal logo"></span>
            </div>
          </div>
        </div>

        <div class="container-fluid bg-grey divSolidContainer">
          <div class="row">
            <div class="col-sm-6">
              <img style={{ width: "100%" }} class="mt-4" src={about2} />
            </div>
            <div class="col-sm-6">
              <br />
              <h2>Our Values</h2><br />
              <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
              <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>

        <div id="services" class="container-fluid text-center divContainer">
          <h2 class="divHeadings">Support Us</h2>
          <h4 class="divHeadings">
            Support plays a huge role in any Successful journey. It’s the basis on which helps one be able to stand on their own two feet. Without a strong support system behind us, it’s easier to waver and crack under pressure. That’s why we are so grateful to be able to have an amazing crowd of support stand behind us.
          </h4>
          <h4 class="divHeadings">
            It will be really helpful for us if you follow us on our Social Media handles so that we can reach to you and many others! <br />Please click the below button to do so:
          </h4>

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

          <br /><br /><br />

          <h2 class="divHeadings">News Letter</h2>
          <h4 class="divHeadings">
            If you are loving the experience so far, Please Do Subscribe to our News Letter so that you never miss any update!
          </h4>

          <form>
            <div style={{ textAlign: "center" }}>
              <input type="email" class="form-control" style={{ width: "500px", height: "50px", margin: "auto" }} placeholder="Email Address" required />
              <button type="button" class="btn btn-danger" style={{ width: "150px", height: "40px", marginTop: 10 }}>Subscribe</button>
            </div>
          </form>
        </div>

        <div class="container-fluid text-center bg-grey divSolidContainer">

          <h2>What our Users say</h2>

          <div class="item active">
            <h4>"This site is the best. I am so happy with the result!"<br /><span>Michael Roe, Vice President, Comment Box</span></h4>
          </div>
          <div class="item">
            <h4>"One word... WOW!!"<br /><span>John Doe, Salesman, Rep Inc</span></h4>
          </div>
          <div class="item">
            <h4>"Could I... BE any more happy with this site?"<br /><span>Chandler Bing, Actor, FriendsAlot</span></h4>
          </div>

        </div>



      </div>

      <Footer class="Footer" />
    </div>
  );
}

export default About1;